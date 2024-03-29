import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineCloseCircle, AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { BsTwitter, BsReddit } from 'react-icons/bs'
import { RiWhatsappFill } from 'react-icons/ri'
import Logo from '../assets/images/logo.svg'
const Navbar = () => {
  const [nav,setNav] = useState(false)

  const handleClick = () => {
    setNav(!nav)
  }
  return (
    <>
      {
        nav
        ?
        <div className='h-screen absolute w-full bg-black bg-opacity-30 flex flex-col py-10 space-y-7 place-items-center z-10'>
          <div className='flex flex-col bg-white rounded-lg w-5/6'>
            <div className='w-full flex justify-end pr-5 pt-2'>
              <button className=' text-black p-1 rounded-xl' onClick={()=> {handleClick()}}><AiOutlineCloseCircle className='h-5 w-5'/></button>
            </div>
              <ul className='text-xl flex items-center flex-row py-4 justify-center'>
                <Link to={"/iletisim"} onClick={()=> {handleClick()}} className='py-1 px-3 rounded-lg cursor-pointer bg-palatte-2 text-white font-semibold
                shadow-lg hover:shadow-xl ease-in duration-20'>Başvuru Yap</Link>
              </ul>
              <ul className='text-xl flex items-center flex-row space-x-5 py-4 justify-center'>
                <li className='font-bold py-1 flex items-center space-x-2 cursor-pointer'><span className='text-tw'>
                <a class="twitter-share-button"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fpsikologbul.io&text=Bu%20platformda%20depremzedelere%20yönelik%20ücretsiz%20psikososyal%20destek%20veren%20kişi%20ve%20kurumlar%20listelenmektedir." target="_blank" rel='noreferrer'>
                  <BsTwitter className='h-6 w-6'/>
                </a>
                </span></li>
                <li className='font-bold py-1 flex items-center space-x-2 cursor-pointer'><span className='text-wp'>
                <a href="https://wa.me/?text=Bu%20platformda%20depremzedelere%20yönelik%20ücretsiz%20psikososyal%20destek%20veren%20kişi%20ve%20kurumlar%20listelenmektedir%3A%20psikologbul.io" target="_blank" rel='noreferrer'>
                <RiWhatsappFill className='h-6 w-6'/>
                </a>
                </span></li>
                <li className='font-bold py-1 flex items-center space-x-2 cursor-pointer'><span className='text-fb'>
                <a href="https://www.facebook.com/sharer/sharer.php?u=psikologbul.io&quote=Depremzedelere%20yönelik%20ücretsiz%20psikososyal%20destek%20için%3A" target="_blank" rel='noreferrer'>
                  <AiFillFacebook className='h-6 w-6'/>
                </a>
                </span></li>
                {/* <li className='font-bold py-1 flex items-center space-x-2 cursor-pointer'><span className='text-ln'>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=psikologbul.io" target="_blank" rel='noreferrer'>
                <AiFillLinkedin className='h-6 w-6'/>
                </a>
                </span></li>*/}
                <li className='font-bold py-1 flex items-center space-x-2 cursor-pointer'><span className='text-reddit'>
                <a href="https://www.reddit.com/submit?url=https://psikologbul.io&title=Bu%20platformda%20depremzedelere%20yönelik%20ücretsiz%20psikososyal%20destek%20veren%20kişi%20ve%20kurumlar%20listelenmektedir." target="_blank" rel='noreferrer'>
                <BsReddit className='h-6 w-6'/>
                </a>
                </span></li>
              </ul>
            </div>
        </div>
        :
        <nav className='h-20 w-full flex justify-center place-items-center px-2 sm:px-3 md:px-4'>
          <div className='container grid grid-cols-2 sm:grid-cols-7 justify-items-center sm:justify-items-start gap-5'>
            <div className='col-span-1 flex w-full justify-start sm:w-auto sm:justify-center items-center py-1.5'>
              <Link to={"/"} className="py-1 px-1.5"><img src={Logo} alt="" /></Link>
            </div>
            <div className='hidden sm:flex col-span-4 py-1.5'>
              
            </div>
            <div className='col-span-2 hidden sm:flex flex-row justify-end w-full items-center space-x-3'>
              <ul className='flex flex-row space-x-3 items-center sm:text-sm lg:text-base font-bold border-r-2 pr-3'>
                <li className='font-bold py-1 flex items-center space-x-2 cursor-pointer'><span className='text-tw'>
                <a
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fpsikologbul.io&text=Bu%20platformda%20depremzedelere%20yönelik%20ücretsiz%20psikososyal%20destek%20veren%20kişi%20ve%20kurumlar%20listelenmektedir." target="_blank" rel='noreferrer'>
                  <BsTwitter className='h-5 w-5'/>
                </a>
                </span></li>
                <li className='font-bold py-1 flex items-center space-x-2 cursor-pointer'><span className='text-wp'>
                <a href="https://wa.me/?text=Bu%20platformda%20depremzedelere%20yönelik%20ücretsiz%20psikososyal%20destek%20veren%20kişi%20ve%20kurumlar%20listelenmektedir%3A%20psikologbul.io" target="_blank" rel='noreferrer'>
                <RiWhatsappFill className='h-5 w-5'/>
                </a>
                </span></li>
                <li className='font-bold py-1 flex items-center space-x-2 cursor-pointer'><span className='text-fb'>
                <a href="https://www.facebook.com/sharer/sharer.php?u=psikologbul.io&quote=Depremzedelere%20yönelik%20ücretsiz%20psikososyal%20destek%20için%3A" target="_blank" rel='noreferrer'>
                  <AiFillFacebook className='h-5 w-5'/>
                </a>
                </span></li>
                {/* <li className='font-bold py-1 flex items-center space-x-2 cursor-pointer'><span className='text-ln'>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=psikologbul.io" target="_blank" rel='noreferrer'>
                <AiFillLinkedin className='h-5 w-5'/>
                </a>
                </span></li>*/}
                <li className='font-bold py-1 flex items-center space-x-2 cursor-pointer'><span className='text-reddit'>
                <a href="https://www.reddit.com/submit?url=https://psikologbul.io&title=Bu%20platformda%20depremzedelere%20yönelik%20ücretsiz%20psikososyal%20destek%20veren%20kişi%20ve%20kurumlar%20listelenmektedir." target="_blank" rel='noreferrer'>
                <BsReddit className='h-5 w-5'/>
                </a>
                </span></li>
              </ul>
              <Link to={"/iletisim"} className='py-1 px-3 flex-none rounded-lg cursor-pointer bg-palatte-2 text-white font-semibold
               shadow-lg hover:shadow-xl ease-in duration-200'>Başvuru Yap</Link>
            </div>
            <div className='col-span-1 flex sm:hidden justify-end w-full pr-3 place-items-center text-palatte-2'>
              <button className='bg-palatte-1 bg-opacity-5 p-1 rounded-lg' onClick={()=> {handleClick()}}><GiHamburgerMenu className='h-6 w-6'/></button>
            </div>
          </div>  
        </nav>
      }
    </>
  )
}

export default Navbar