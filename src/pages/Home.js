import React from 'react'
import { Outlet } from 'react-router-dom'
import { FirstSection, SecondSection } from '../components'

export const Home = () => {
  return (
    <>
      <div className='w-full flex flex-col -z-10 justify-center place-items-center'>
        <FirstSection/>
        <hr className='border-black border-opacity-10 w-full' />
        <SecondSection />
      </div>
      <Outlet />
    </>
  )
}
