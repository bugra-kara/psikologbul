import React, {useState, useEffect} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FirstSection, SecondSection } from '../components'
import {AiOutlineArrowUp} from 'react-icons/ai'

if(localStorage.getItem("cookie")=== null || localStorage.getItem("cookie") === true) {
  localStorage.setItem("cookie", true)
}
export const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [modal,setModal] = useState(localStorage.getItem("cookie"))
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  const handleModal = () => {
    setModal(false)
    localStorage.setItem("cookie", false)
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
       {modal === "true" ? 
        <div className='fixed bottom-3 z-20 left-4 bg-palatte-1 text-white text-small bg-opacity-100 px-2 py-1.5 rounded-lg w-60'>
          Çerez Aydınlatma Metni hakkında bilgi almak için <Link to="/cerez-politikasi" className='font-bold'>tıklayınız. </Link><button onClick={handleModal} className='px-2 py-0.5 bg-palatte-2'>Tamam</button>
        </div> 
        : ""}
        <FirstSection/>
        <hr className='border-black border-opacity-10 w-full' />
        <SecondSection />
      </div>
      <Outlet />
    </>
  )
}
