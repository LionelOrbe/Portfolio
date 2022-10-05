import React from 'react'
import style from './Work.module.css'
import concer from '../../assets/concertek.jpg'
import count from '../../assets/Countries.png'
import port from '../../assets/portfolio.jpg'
import marvel from '../../assets/marvel.png'
import test from '../../assets/Test.png'

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
      <div className={style.card}>
        <div className={style.title}>Portfolio</div>
        <a href="https://eugeniabartolome.vercel.app/home" target="_blank" rel="noreferrer">
         <img className={style.img} src={port} alt='portfolio'/>
        </a>
        <div className={style.info}>Translator portfolio App</div>
      </div>
      <div className={style.card}>
        <div className={style.title}>Marvel App</div>
        <a href="https://drive.google.com/file/d/1qVHwPV3_SeMgpz4IyTKlryMhVZSGmAmc/view?usp=sharing" target="_blank" rel="noreferrer">
         <img className={style.img} src={marvel} alt='marvel'/>
        </a>
        <div className={style.info}>React Native Mobile App</div>
      </div>
      <div className={style.card}>
        <div className={style.title}>Front End Test</div>
        <a href="https://lionelorbe.github.io/Test/" target="_blank" rel="noreferrer">
         <img className={style.img} src={test} alt='test'/>
        </a>
        <div className={style.info}>HTML & CSS only web page</div>
      </div>
    </div>
  )
}
