import React from 'react'
import {RiPsychotherapyLine} from 'react-icons/ri'
import {AiOutlineContacts} from 'react-icons/ai'
import { useFilterContext } from '../context/filterContext'

export const SecondSection = () => {
      const {selectedData} = useFilterContext()
  return (
      <div className='w-full container grid grid-cols-1 gap-10 items-center justify-center pt-8 px-3 sm:px-4'>
      {
            selectedData.map((item)=> {
            return (
                  <div key={item.id} className='py-3 px-5 sm:px-10 rounded-xl shadow-[0_0px_15px_0px_rgba(131,144,250,0.35)]'>
                        <div className='flex flex-row items-center space-x-3 sm:space-x-5 pb-4'>
                              <span className='text-sm sm:text-md shadow rounded font-semibold bg-palatte-2 bg-opacity-30 px-2 py-1'>
                              {item.unvan}
                              </span>
                              {
                              item.tercihler.yuzyuze ? <span className='text-sm sm:text-md shadow rounded font-semibold bg-palatte-6 bg-opacity-30 px-2 py-1'>
                              Yüz yüze
                              </span> : ""
                              }
                              {
                              item.tercihler.cevrimici ? <span className='text-sm sm:text-md shadow rounded font-semibold bg-palatte-7 bg-opacity-30 px-2 py-1'>
                              Çevrim içi
                              </span> : ""
                              }
                              <span className='font-bold text-xl sm:text-2xl'>{item.name}</span>
                        </div>
                        <div className='flex flex-col pt-1 space-y-4 sm:space-y-6'>
                        <div className='flex flex-col space-y-2'>
                              <span className='font-bold text-lg sm:text-xl flex space-x-2 items-center'><span><RiPsychotherapyLine className=' text-palatte-6'/></span><span>Grup</span></span>
                              <div className='space-x-3 flex pl-1 sm:pl-0'>
                                    {
                                          item.title.map((item2,index)=> {
                                          return (
                                                <span key={index} className='shadow py-1 px-2 rounded-lg cursor-default text-sm sm:text-base'>{item2}</span>
                                          )})
                                    }
                              </div>
                        </div>
                        <div className='flex flex-col space-y-2'>
                              <span className='font-bold text-lg sm:text-xl flex space-x-2 items-center'><span><AiOutlineContacts className=' text-palatte-7'/></span><span>İletişim Bilgileri</span></span>
                              <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 xl:gap-1 pl-1 sm:pl-0'>
                                    {
                                          item.name !== null 
                                          ? <div className='col-span-1'><span className='font-bold text-sm sm:text-base'>İsim-Soyisim:</span> {item?.name}
                                            </div>
                                          : ""
                                    }
                                    {
                                          item.sehir !== null ? <div className='col-span-1'>
                                          <span className='font-bold text-sm sm:text-base'>Şehir:</span> {item.sehir}
                                          </div>
                                          : ""
                                    }
                                    {
                                          item['e-posta'] !== null ? <div className='col-span-1'>
                                          <span className='font-bold text-sm sm:text-base'>E-posta:</span> <a href='mailto:haticeseymaakara@gmail.com'>{item['e-posta']}</a>
                                          </div>
                                          : ""
                                    }
                                    {
                                          item.telefon !== null ? <div className='col-span-1'>
                                          <span className='font-bold text-sm sm:text-base'>Telefon:</span> <a href='tel:+905347980409'>{item.telefon}</a>
                                          </div>
                                          : ""
                                    }
                                    {
                                          item.instagram !== null ? <div className='col-span-1'>
                                          <span className='font-bold text-sm sm:text-base'>Sosyal Medya: </span>{item.instagram !== null ? <span><a href={item.instagram} target="_blank" rel='noreferrer' className="font-bold underline">Instagram</a></span> : ""}
                                          </div>
                                          : ""
                                    }
                              </div>
                              {
                                    item.bilgi !== null ? <div className='py-3 pl-1 sm:pl-0'>
                                    <span className='font-bold text-sm sm:text-base'>Bilgi: </span> <span>{item.bilgi} </span> {item.form !== null ? <span><a href={item.form} target="_blank" rel='noreferrer' className="font-bold underline">Form</a></span> : ""}
                              </div> : ""
                              }
                        </div>  
                        </div>
                  </div>
            )})      
      }
      </div>
    
  )
}
