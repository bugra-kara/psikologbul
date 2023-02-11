import React, {useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import { FirstSection, SecondSection } from '../components'
import {AiOutlineArrowUp} from 'react-icons/ai'
export const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])
  return (
    <>
      <div className='w-full flex flex-col -z-10 justify-center place-items-center'>
      {isVisible === true ? <div onClick={()=>{scrollToTop()}} className='fixed bottom-3 right-4 bg-palatte-1 text-palatte-2 bg-opacity-5 p-1 rounded-lg cursor-pointer'>
        <AiOutlineArrowUp className='h-6 w-6'/>
      </div> : ""}
        <FirstSection/>
        <hr className='border-black border-opacity-10 w-full' />
        <SecondSection />
      </div>
      <Outlet />
    </>
  )
}
