import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'
export const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center px-4 sm:px-4 pt-20 pb-5'>
      <div className='container space-y-2'>
        <div className='flex w-full justify-center items-center'>
          <Link to={"/"} className="py-1 px-1.5"><img src={Logo} className="h-20" alt="" /></Link>
        </div>
        <div className='text-gray-700 text-xs flex flex-col space-y-6'>
          <p className='w-full text-center'>Bu platform, 6 Şubat 2023 tarihinde Kahramanmaraş/Türkiye’de meydana gelen iki büyük deprem sonucu oluşan psikolojik destek ihtiyacına ulaşımı kolaylaştırmak amacıyla gönüllü oluşturulmuştur.</p>
          <p className='w-full text-center'>© 2023</p>
        </div>
      </div>
    </div>
  )
}
