import {  Person } from '@mui/icons-material'
import React from 'react'
import Lang from './Lang'
import { useTranslation } from 'react-i18next';
import { IoMenuSharp } from "react-icons/io5";


export default function Header1() {
  const {t} = useTranslation();
  return (
    <div className='justify-between flex text-white bg-sky-500 items-center relative '>
  
        <ul className='flex gap-10 h-full max-[1184px]:hidden'>
             <li className='hover:bg-sky-600 py-3 px-2'>{t("About")}</li>
             <li className='hover:bg-sky-600 py-3 px-2'>{t("transport")}</li>
             <li className='hover:bg-sky-600  py-3 px-2'>{t("warranty")}</li>
             <li className="text-yellow-500  py-3 px-2 hover:bg-sky-600">{t("auksion")}</li>
             <li className='hover:bg-sky-600  py-3 px-2'>{t("service")}</li>
        </ul>

        <div className='min-[1183px]:hidden ml-10'><IoMenuSharp /></div>
      

     
     <div className='flex mr-8 gap-10'>
      <div className='flex '>
        <Person/>
        <p>{t("profile")}</p>
      </div>
     <div className='flex '>
  
     <Lang/>
     </div>

     </div>

    </div>
  )
}
