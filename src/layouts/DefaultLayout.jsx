import React from 'react'

import { Header } from "../design-system/header"
import { Footer  } from "../design-system/footer"

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
        <div className="header-radius"></div>
        <main>{ children }</main>  
      <Footer />  
    </>
  )
}
