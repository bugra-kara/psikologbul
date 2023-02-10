import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from './index'
export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
