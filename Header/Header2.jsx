import { useTranslation } from 'react-i18next'
import React from 'react'
import Input from './Input'
import Logo from '../Body/Logo.jpg'
import Icon from "./Icon";
import DropDown from '../Products/dropDown';


export default function Header2() {
  const {t} = useTranslation();
 
  return (
    <div className=' flex justify-evenly py-3 '>
      
      <div className='header-logo' >
        <a href='/'>
       <img src={Logo} alt='Logo AK yol' className='left-[50px] right-0 bottom-0 top-[43px]  h-[105px] absolute z-[20]'/>
      </a>
      </div>
      
          <p className="ml-[60px] mt-2">{t("address")}</p>
          <strong className='mt-2'>+993-61-53-20-99</strong>

       <div className='mt-2'>
         <Icon/>
       </div>
      
        <div>
        <Input/>
        </div>
        

        <div className='flex'>
             <DropDown/>
        </div>
      </div>
  )
}
