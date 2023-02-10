import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {BsPencilSquare} from 'react-icons/bs'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {BiArrowBack} from 'react-icons/bi'
export const Contact = () => {
  return (
    <>
      <div className='flex flex-col pt-2 sm:pt-10 px-4 w-full justify-center place-items-center'>
        <div className='container space-y-5'>
          <Link to="/" className='font-bold flex items-center space-x-2 text-white bg-palatte-2 bg-opacity-90 w-fit px-2 py-0.5 rounded-xl hover:shadow-[0_0px_15px_0px_rgba(131,144,250,0.35)] hover:bg-opacity-100 duration-200 ease-in'><span><BiArrowBack/></span><span>Geri</span></Link>
          <div className='font-bold flex flex-row space-x-2 items-center text-palatte-1'><span><BsPencilSquare className='h-5 w-5'/></span><span>Başvuru Yap</span></div>
          <div className='w-full flex py-3 px-2 rounded-xl shadow-[0_0px_15px_0px_rgba(131,144,250,0.35)]'>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, aliquam non. Libero ut ullam quod, voluptas modi molestiae vitae, labore, quibusdam rem unde cum earum animi est alias dolorum autem.</span>
          </div>
          <div className='pt-5 font-bold flex flex-row space-x-2 items-center text-palatte-6'><span><AiOutlineQuestionCircle className='h-5 w-5'/></span><span>Soru, görüş ve öneri için</span></div>
          <div className='w-full flex py-3 px-2 rounded-xl shadow-[0_0px_15px_0px_rgba(131,144,250,0.35)]'>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, aliquam non. Libero ut ullam quod, voluptas modi molestiae vitae, labore, quibusdam rem unde cum earum animi est alias dolorum autem.</span>
          </div>
        </div>
      </div>
      <Outlet/>
    </>
  )
}
