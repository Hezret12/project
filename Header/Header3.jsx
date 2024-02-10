import React from 'react'
import Marquee from "react-fast-marquee";
import { useTranslation } from 'react-i18next'

export default function Header3() {
  const {t} = useTranslation();
  return (
    <div className='bg-sky-500 p-3 text-white'>
      <Marquee pauseOnHover>{t("info")}</Marquee>
    </div>
  )
}
