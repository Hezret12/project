import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const {t} = useTranslation();
  return (
    <div className=' h-[150px]  w-full bg-[#5E83DE] text-white text-wrap'>
      <div>
        <ul className='flex justify-evenly p-3 mr-[70px] flex-wrap'>
            <li>+993-61-53-20-99</li>
            <li>+993-12-28-04-01</li>
            <li>+993-12-28-10-24</li>
            <li>{t("address")}</li>
            <li className='underline'>akyolwebsite@gmail.com</li>
            <li>{t("time")}</li>
        </ul>
        <hr className='mx-[78px]'/>
      </div>
       <div className='ml-[78px] mt-3'>
       AK YOL COMPUTERS
       <span className="ml-[15px]">© {new Date().getFullYear()}</span>

             

       </div>
    </div>
  )
}
