import React, {useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import style from '../Home/Home.module.css'
import Contact from '../Contact/Contact'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Work from '../Work/Work'
import { FaHome } from 'react-icons/fa';



export default function Home() {
  const [tab, setTab] = useState(1);

  function handleClick(e) {
    setTab(e.target.id)
    
  }
  


  return (
    <div className={style.container}>
        <NavBar/>
        <div>

        <div className={style.tabcontainer}>
          <div id={1} onClick={e=>handleClick(e)} className={tab==1?style.selected : style.tab}>About</div>
          <div id={2} onClick={e=>handleClick(e)} className={tab==2?style.selected : style.tab}>Skills</div>
          <div id={3} onClick={e=>handleClick(e)} className={tab==3?style.selected : style.tab}>Work</div>
          <div id={4} onClick={e=>handleClick(e)} className={tab==4?style.selected : style.tab}>Contact</div>
        </div>
          <div className={style.content}>
            {tab==1? <About/> : null}
            {tab==2? <Skills/> : null}
            {tab==3? <Work/> : null}
            {tab==4? <Contact/> : null}
          </div>
        </div>
        
        <Footer/>
    </div>
  )
}
