import React from 'react'
import { Consumer } from 'store/createContext'
import Modal from 'components/modal'

const ModalContainer = componentProps => {
  return (
    <Consumer>
      {props => (
        <Modal {...props} center={componentProps.center}>
          {componentProps.children}
        </Modal>
      )}
    </Consumer>
  )
}

export default ModalContainer
