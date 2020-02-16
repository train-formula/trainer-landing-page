import React from 'react'
import AppProvider from 'store/provider'
import wrapPageElementWithTransition from 'helpers/wrapPageElement'

import { ModalProvider } from 'components/modal'

// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return (
    <AppProvider>
      <ModalProvider>{element}</ModalProvider>
    </AppProvider>
  )
}

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition
