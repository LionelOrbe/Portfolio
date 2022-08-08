import React from 'react'
import style from './Work.module.css'
import concer from '../../assets/concertek.jpg'
import count from '../../assets/countries.png'

export default function Work() {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.title}>ConcerTeck</div>
        <a href="https://concer-teck-front-end.vercel.app/" target="_blank" rel="noreferrer">
          <img className={style.img} src={concer} alt='concertek'/>
        </a>
        <div className={style.info}>E-commerce dedicated to event ticket sales</div>
      </div>
      <div className={style.card}>
        <div className={style.title}>Countries App</div>
        <a href="https://www.youtube.com/watch?v=rtmtSnT4Np4&t=6s" target="_blank" rel="noreferrer">
         <img className={style.img} src={count} alt='concertek'/>
        </a>
        <div className={style.info}>Countries information App</div>
      </div>
    </div>
  )
}
