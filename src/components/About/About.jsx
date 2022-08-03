import React from 'react'
import style from './About.module.css'

export default function About() {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <div>Hello I'am</div>
        <div className={style.name}>
        <div className={style.letter}>L</div>
        <div className={style.letter}>i</div>
        <div className={style.letter}>o</div>
        <div className={style.letter}>n</div>
        <div className={style.letter}>e</div>
        <div className={style.letter}>l</div>
        </div>
        <div>Full Stack Web Developer, based in Argentina, passionate frontend oriented developer,
great capacity for teamwork and attention to details.</div>
      </div>
      <div className={style.photo}></div>

      
    </div>
  )
}
