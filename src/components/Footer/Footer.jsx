import React from 'react'
import style from '../Footer/Footer.module.css'
import {SiCss3} from 'react-icons/si';
import {ImHeart} from 'react-icons/im';

export default function Footer() {
  return (
    <div className={style.container}> © Lionel Orbe 2022 | Fast and Simple - Only <SiCss3 className={style.icon}/> and <ImHeart className={style.heart}/> </div>
  )
}
