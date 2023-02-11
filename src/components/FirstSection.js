import React, {useEffect, useState} from 'react'
import cities from '../data/cities.json';
import Selection from "react-select";
import makeAnimated from 'react-select/animated';
import { Checkbox } from '@material-tailwind/react/components/Checkbox'
import { BsPeople } from 'react-icons/bs'
import {MdOutlineLocationOn} from 'react-icons/md'
import {RiPsychotherapyLine} from 'react-icons/ri'
import { useFilterContext } from '../context/filterContext';
import {AiOutlineInfoCircle} from 'react-icons/ai'
const tGroups = [
  { value: 1, label: "Çocuk" },
  { value: 2, label: "Ergen" },
  { value: 3, label: "Yetişkin" },
  { value: 4, label: "Yaşlı" },
];
export const FirstSection = () => {
      const { handleChange } = useFilterContext()
      const [selectedOptions, setSelectedOptions] = useState(null);
      const setHandle = (e) => {
      setSelectedOptions(Array.isArray(e) ? e.map((tGroup) => tGroup.label) : []);
      };
      const animatedComponents = makeAnimated();
      useEffect(()=>{
            handleChange(selectedOptions)
      },[selectedOptions])
      return (
            <div className='flex flex-col w-full items-center justify-center space-y-10 sm:space-y-16 py-10 px-2'>
                  <div className='text-center flex flex-row space-x-2 items-center rounded-lg bg-palatte-3 bg-opacity-40 px-3 py-1'>
                        <span className='hidden sm:block'><AiOutlineInfoCircle className=' h-6 w-6'/></span>
                        <span className=' text-day sm:text-lg'>Depremzedelere yönelik <strong>ücretsiz</strong> psikososyal destek veren kişi ve kurumların yer aldığı gönüllü bir platformdur.</span>
                  </div>
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-20 place-items-center'>
                        <div className='col-span-1 rounded-lg p-5 shadow-[0_0px_15px_0px_rgba(131,144,250,0.35)] h-fit w-56 sm:w-auto'>
                              <span className='justify-center flex pb-3 font-bold text-sm items-center space-x-2'><span className=' text-palatte-8'><BsPeople className='h-5 w-5'/></span><span className=' text-palatte-1'>Görüşme tercihiniz</span></span>
                              <Checkbox id="yuz-yuze" label="Yüz yüze" name='yuzyuze' ripple={true} color="green" onChange={(e)=>{handleChange(e.target.name)}}/>
                              <Checkbox id="cevrimici" label="Çevrim içi" name='cevrimici' ripple={true} color="green" onChange={(e)=>{handleChange(e.target.name)}}/>
                        </div>
                        <div className='col-span-1 rounded-lg p-5 shadow-[0_0px_15px_0px_rgba(131,144,250,0.35)] h-fit'>
                              <span className='justify-center flex pb-3 font-bold text-sm items-center space-x-2'><span className=' text-palatte-5'><MdOutlineLocationOn className='h-5 w-5'/></span><span className=' text-palatte-1'>Şehir seçiniz</span></span>
                              <Selection className='w-48 capitalize' options={cities} placeholder="Şehir" onChange={handleChange}></Selection>
                        </div>
                        <div className='col-span-1 rounded-lg p-5 shadow-[0_0px_15px_0px_rgba(131,144,250,0.35)] h-fit'>
                              <span className='justify-center flex pb-3 font-bold text-sm items-center space-x-2'><span className=' text-palatte-6'><RiPsychotherapyLine className='h-5 w-5'/></span><span className=' text-palatte-1'>Kim için</span></span>
                              <Selection className='w-48' options={tGroups} onChange={setHandle} closeMenuOnSelect={false} components={animatedComponents}  isMulti placeholder="Seçiniz" />
                        </div>
                  </div>
            </div>
      )
}