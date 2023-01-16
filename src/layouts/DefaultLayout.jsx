import React from 'react'
import { Header } from "../design-system/Header"
import { Footer  } from "../design-system/Footer"

export const DefaultLayout = ( {children} ) => {
  return (
    <>
      <Header />
        <main>{children}</main>  
      <Footer />  
    </>
  )
}
