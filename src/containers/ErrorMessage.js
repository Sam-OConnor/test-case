import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { removeError } from '../actions/index'

const ErrorMessage = ({isError, errorCode, errorMessage, removeError}) => {
  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        removeError()
        document.getElementsByClassName('error-wrapper')[0].classList.remove('has-error')
      }, 3000)
    }
  })
  
  return (
    <div className={isError ? 'error-wrapper has-error' : 'error-wrapper'}>
      <span className="error-code">{errorCode}</span>
      <span className="error-message">{errorMessage}</span>
    </div>
  )
}

const mapStateToProps = state => ({
  isError: state.errors.isError,
  errorCode: state.errors.errorCode,
  errorMessage: state.errors.errorMessage
})

const mapDispatchToProps = dispatch => ({
  removeError: () => dispatch(removeError())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorMessage)