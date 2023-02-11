import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'

export const Cookies = () => {
  return (
    <>
      <div className='flex flex-col pt-2 sm:pt-10 px-4 w-full justify-center place-items-center'>
        <div className='container space-y-5'>
          <Link to="/" className='font-bold flex items-center space-x-2 text-white bg-palatte-2 bg-opacity-90 w-fit px-2 py-0.5 rounded-xl hover:shadow-[0_0px_15px_0px_rgba(131,144,250,0.35)] hover:bg-opacity-100 duration-200 ease-in'><span><BiArrowBack/></span><span>Geri</span></Link>
          <div className='font-bold flex flex-row space-x-2 items-center text-palatte-1'><span>Çerez Aydınlatma Metni</span></div>
          <div className='w-full flex flex-col space-y-4 py-3 px-2 rounded-xl shadow-[0_0px_15px_0px_rgba(131,144,250,0.35)]'>
            <p>İnternet sitemizin işletimi sırasında zorunlu çerezler ve internet sitesi kullanımının analiz edilmesini, sosyal medya özellikleri sunulmasını ve site deneyiminiz bakımından reklam ve içeriklerin kişiselleştirilmesinini sağlayan çerezler kullanılmaktadır.</p>
          </div>
        </div>
      </div>  
      <Outlet/>
    </>
  )
}