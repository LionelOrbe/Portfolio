import React from 'react'
import style from './About.module.css'
import img from '../../assets/Lio.jpeg'
import video from '../../assets/video.mp4'
import poster from '../../assets/poster.png'




export default function About() {
  return (
    <div className={style.container}>
      <div className={style.video}>
      <video className={style.video} src={video} autoPlay muted loop poster={poster}></video>
      </div>
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
        <div className={style.full}>Frontend / Mobile Developer <br/>from Argentina to the World </div>
      </div>
      <img src={img} alt='Lionel' className={style.photo}/>

      
    </div>
  )
}
