import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'

export default function Input() {
  const {t} = useTranslation();
  return (
    <div>
       <div className='relative  flex  bg-slate-200 gap-1 rounded-full px-2 py-[4px] min-[404px]:hidden'>
        
          <input className="input bg-slate-200 w-[300px] px-2 " placeholder={t("input")}></input>
          <div className='bg-sky-400 rounded-full w-8 h-8 '>
          <FaSearch  color='white' className='size-3 ml-[10px]  mt-[10px]' />
          </div>
       
         </div>
    </div>
  )
}
