import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import style from '../Home/Home.module.css'
import Contact from '../Contact/Contact'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Work from '../Work/Work'


export default function Home() {
  return (
    <div className={style.container}>
        <NavBar/>
        <div className={style.homecontainer}>
          <div>
            <About/>
          </div>
          <div>
            <Skills/>
          </div>
          <div>
            <Work/>
          </div>
          <div>
            <Contact/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
