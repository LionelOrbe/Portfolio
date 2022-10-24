import React from 'react'
import { BsLinkedin ,BsGithub,BsFileEarmarkPerson} from "react-icons/bs";
import style from '../NavBar/NavBar.module.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import pdf from '../../assets/Lionel Orbe FullStack EN.pdf'

export default function NavBar() {
  return (
    <div className={style.container}>
      <Tippy content="LinkedIn">
        <div>
        <a href="https://www.linkedin.com/in/lionel-orbe/" target="_blank" rel="noreferrer">
          <BsLinkedin className={style.icon}/>
        </a>
        </div>
      </Tippy>
      <Tippy content="GitHub">
        <div>
        <a href="https://github.com/LionelOrbe" target="_blank" rel="noreferrer">
          <BsGithub className={style.icon}/>
        </a>
        </div>
      </Tippy>
      <Tippy content="Download my CV">
        <div>
        <a href={pdf} target="_blank" rel="noreferrer" download='Lionel Orbe - Full Stack - EN.pdf'>
          <BsFileEarmarkPerson className={style.icon}/>
        </a>
        </div>
      </Tippy>
      
      

    </div>
  )
}
