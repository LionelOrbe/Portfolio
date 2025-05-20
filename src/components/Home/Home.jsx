import React, {useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import style from '../Home/Home.module.css'
import Contact from '../Contact/Contact'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Work from '../Work/Work'
import { AiOutlineFileProtect, AiOutlineHome} from 'react-icons/ai';
import { MdWorkOutline, MdOutlineContactPhone} from 'react-icons/md';
import { FaSun,FaMoon} from 'react-icons/fa';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';



export default function Home() {
  const [tab, setTab] = useState(1);
  const [darkmode, setDarkmode] = useState(false);

  function dark() {
    var element = document.body;
    element.classList.toggle("light-mode");
    if(darkmode){setDarkmode(false)}
    else {setDarkmode(true)}
    
  }

  return (
    <div className={style.container}>
        <div className={style.switch} onClick={()=>dark()}>{darkmode? <Tippy content="Dark Mode"><div><FaMoon/></div></Tippy> :
        <Tippy content="Light Mode"><div><FaSun/></div></Tippy>}
        </div>
        <NavBar/>
        <div>

        <div className={style.tabcontainer}>
        <Tippy content="Home">
          <div>
          <AiOutlineHome onClick={()=>setTab(1)} className={tab===1?style.selected : style.icon}/> 
          </div>
        </Tippy>
        <Tippy content="Skills">
          <div>
          <AiOutlineFileProtect onClick={()=>setTab(2)} className={tab===2?style.selected : style.icon}/> 
          </div>
        </Tippy>
        <Tippy content="Work">
          <div>
          <MdWorkOutline onClick={()=>setTab(3)} className={tab===3?style.selected : style.icon}/> 
          </div>
        </Tippy>
        <Tippy content="Contact">
          <div>
          <MdOutlineContactPhone onClick={()=>setTab(4)} className={tab===4?style.selected : style.icon}/> 
          </div>
        </Tippy>
        </div>
          <div className={style.content}>
            {tab===1? <About/> : null}
            {tab===2? <Skills/> : null}
            {tab===3? <Work/> : null}
            {tab===4? <Contact/> : null}
          </div>
        </div>
        
        <Footer/>
    </div>
  )
}
