import React, { createContext, useContext, useReducer } from 'react'

import { SignUp, Checkout } from 'components/Forms'

const ModalContext = createContext()

function useModal() {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('useModal must be used within ModalProvider')
  }

  return context
}

function formReducer(state, action) {
  switch (action.type) {
    case 1: {
      return <SignUp />
    }
    case 2: {
      return <Checkout />
    }
  }
}

function ModalProvider(props) {
  // const [state, setState] = useState('default state')
  const [state, dispatch] = useReducer(formReducer, { step: 1, name: '' })

  return <ModalContext.Provider value={{}} {...props} />
}

export { useModal, ModalProvider }
