import { db, storage } from '../firebase'

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

export const deleteProduct = id => ({
  type: 'DELETE_PROD',
  id,
})


// Get products
const getProduct = () => dispatch => {
  const prodData = []

  db.collection("products").orderBy("id", "desc").get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      prodData.push(doc.data())
    })

    dispatch(receiveProducts(prodData))
  })
}

const shouldGetProducts = (state) => {
  const products = state.products

  if (!products || products.length === 0)
    return true
  else
    return false
}

export const getProductsIfNeeded = () => (dispatch, getState) => {
  if ( shouldGetProducts(getState()) )
    dispatch(getProduct())
}

const storeProductData = (id, url, prodData) => dispatch => {
  prodData.image = url
  console.log(prodData)
  delete prodData.imageInfo
  delete prodData.isDiscount

  db.collection("products").add({
    id: id,
    prodData: prodData
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      dispatch(addProduct(id, prodData))
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
}

const getImageUrl = (storageRef, id, prodData) => dispatch => {
  storageRef.child(id.toString()).getDownloadURL().then(function(url) {
    console.log(url)
    dispatch(storeProductData(id, url, prodData))
  }).catch(function(error) {
    // Handle any errors
  })
}

export const sendProduct = (id, prodData) => dispatch => {
  const storageRef = storage.ref()
  const imagesRef = storageRef.child(id.toString())

  imagesRef.putString(
    prodData.image.split(',')[1], 'base64', {
      contentType: 'image/jpg'
    }
  ).then(snapshot => {
    console.log(snapshot);
    console.log('Uploaded a base64 string!');
    dispatch(getImageUrl(storageRef, id, prodData))
  })
}
