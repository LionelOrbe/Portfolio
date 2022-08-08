import React from 'react'
import style from './About.module.css'




export default function About() {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <div className={style.name}>
        <div className={style.letter}>L</div>
        <div className={style.letter}>i</div>
        <div className={style.letter}>o</div>
        <div className={style.letter}>n</div>
        <div className={style.letter}>e</div>
        <div className={style.letter}>l</div>
        <div className={style.space}></div>
        <div className={style.letter}>O</div>
        <div className={style.letter}>r</div>
        <div className={style.letter}>b</div>
        <div className={style.letter}>e</div>
        </div>
        <div className={style.full}>Full Stack Web Developer <br/>from Argentina to the World </div>
      </div>
      <div className={style.photo}></div>

      
    </div>
  )
}
