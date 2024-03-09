import React from 'react'
import Navbar from './navbar/page'

const layout = ({children}) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  )
}

export default layout
