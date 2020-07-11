import { db, storage } from '../firebase'

export const changeLoginStatus = isLoggedIn => ({
  type: 'CHANGE_LOGIN_STATUS',
  isLoggedIn: isLoggedIn
})

export const receiveProducts = prodData => ({
  type: 'RECEIVE_PRODUCTS',
  prodData
})

export const addProduct = (id, prodData) => ({
  type: 'ADD_PROD',
  id,
  prodData
})

export const editProduct = (index, prodData) => ({
  type: 'EDIT_PROD',
  index,
  prodData
})

export const removeProduct = id => ({
  type: 'DELETE_PROD',
  id,
})

export const changeLoadingStatus = isLoading => ({
  type: 'CHANGE_LOADING_STATUS',
  isLoading
})


//------------------------------------------------------------------------------
// Login

export const findUser = (login, password) => dispatch => {
  db.collection("users").where("login", "==", login).get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        if (doc.data().password === password) {
          localStorage.setItem('isLoggedIn', true)
          dispatch(changeLoginStatus(true))
        }
    });
  })
}

//------------------------------------------------------------------------------
// Get products

// if app should get products from firebase
const shouldGetProducts = (state) => {
  const products = state.products.items

  if (!products || products.length === 0)
    return true
  else
    return false
}

// get products from firebase and push it to state if needed
export const getProductsIfNeeded = () => (dispatch, getState) => {
  if ( shouldGetProducts(getState()) ) {
    const prodData = []

    db.collection("products").orderBy("id", "desc").get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        prodData.push(doc.data())
      })

      dispatch(receiveProducts(prodData))
    })
  }
}


//------------------------------------------------------------------------------
// Store product

// add image url to product send product to firebase and state
const storeProductData = (id, url, prodData, productIndex) => (dispatch, getState) => {
  console.log(productIndex);
  prodData.image = url
  delete prodData.imageInfo
  delete prodData.isDiscount

  db.collection("products").doc(id.toString()).set({
    id: id,
    prodData: prodData
  })
  .then(() => {
      console.log("Document written with ID: " + id);
      if (Number.isInteger(productIndex))
        dispatch(editProduct(productIndex, prodData))
      else
        dispatch(addProduct(id, prodData))
  })
  .catch(error => {
      console.error("Error adding document: ", error);
  });
}

// get uploaded image url from firebase store
const getImageUrl = (storageRef, id, prodData, productIndex) => dispatch => {
  storageRef.child(id.toString()).getDownloadURL().then(url => {
    console.log(url)
    dispatch(storeProductData(id, url, prodData, productIndex))
  }).catch(error => {

  })
}

// if image string is base64 then image is changed
const isImageChanged = imageString => {
  if (imageString.indexOf('base64') !== -1)
    return true
  else
    return false
}

// send product image to firebase store
export const sendProduct = (id, prodData, productIndex) => dispatch => {
  dispatch(changeLoadingStatus(true))
  
  if (isImageChanged(prodData.image)) {
    const storageRef = storage.ref()
    const imagesRef = storageRef.child(id.toString())

    imagesRef.putString(
      prodData.image.split(',')[1], 'base64', {
        contentType: 'image/jpg'
      }
    ).then(snapshot => {
      console.log(snapshot);
      console.log('Uploaded a base64 string!');
      dispatch(getImageUrl(storageRef, id, prodData, productIndex))
    })
  } else
      dispatch(storeProductData(id, prodData.image, prodData, productIndex))
}


//------------------------------------------------------------------------------

// Delete image
const deleteImage = id => dispatch => {
  const storageRef = storage.ref()
  // Create a reference to the file to delete
  const imagesRef = storageRef.child(id.toString());

  // Delete the file
  imagesRef.delete().then(() => {
      console.log('File deleted successfully')
      dispatch(removeProduct(id))
  }).catch(error => {
    // Uh-oh, an error occurred!
  });
}

// Delete product
export const deleteProduct = id => dispatch => {
  db.collection("products").doc(id.toString()).delete().then(() => {
    console.log("Document successfully deleted!");
    dispatch(deleteImage(id))
  }).catch(error => {
      console.error("Error removing document: ", error);
  });
}
