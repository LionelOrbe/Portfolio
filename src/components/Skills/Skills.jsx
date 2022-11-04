import React from 'react'
import style from './Skills.module.css'
import { SiBootstrap,SiMaterialui, SiJavascript,SiCss3,SiHtml5,SiReact,SiRedux,SiNodedotjs,SiExpress,SiSqlite,SiSequelize,SiPostgresql,SiVisualstudiocode,SiGit,SiGithub,SiFigma,SiTrello } from 'react-icons/si';
import efset from '../../assets/efset.png'
import henry from '../../assets/henry.png'
import {TbBrandReactNative} from 'react-icons/tb';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default function Skills() {
  return (
    <div className={style.container}>
      <div className={style.div}>
      <div className={style.title}>FrontEnd</div>
        <Tippy content="JavaScript">
          <a href="https://www.javascript.com/" target="_blank" rel="noreferrer">
            <SiJavascript className={style.icon}/>
          </a>
        </Tippy>
        <Tippy content="CSS3">
          <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noreferrer"> 
            <SiCss3 className={style.icon}/>
          </a>
        </Tippy>
        <Tippy content="HTML5">
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer">  
            <SiHtml5 className={style.icon}/>
          </a>
        </Tippy>
        <Tippy content="React">
          <a href="https://es.reactjs.org/" target="_blank" rel="noreferrer">
            <SiReact className={style.icon}/>
          </a>  
        </Tippy>
        <Tippy content="React Native">
          <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
            <TbBrandReactNative className={style.icon}/>
          </a>
        </Tippy>
        <Tippy content="Redux">
          <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
            <SiRedux className={style.icon}/>
          </a>
        </Tippy> 
        <Tippy content="Material UI">
          <a href="https://mui.com/" target="_blank" rel="noreferrer">
            <SiMaterialui className={style.icon}/>
          </a>
        </Tippy>  
        <Tippy content="Bootstrap">
          <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
            <SiBootstrap className={style.icon}/>
          </a>
        </Tippy>  
      </div>
      <div className={style.div}>
      <div className={style.title}>BackEnd</div>
        <Tippy content="Node JS">
          <a href="https://nodejs.org/es/" target="_blank" rel="noreferrer">
            <SiNodedotjs className={style.icon}/>
          </a> 
        </Tippy>
        <Tippy content="Express JS">
          <a href="https://expressjs.com/es/" target="_blank" rel="noreferrer">
            <SiExpress className={style.icon}/>
          </a>
        </Tippy>
        <Tippy content="SQLite">
          <a href="https://www.sqlite.org/" target="_blank" rel="noreferrer">
            <SiSqlite className={style.icon}/> 
          </a>
        </Tippy>
        <Tippy content="Sequelize">
          <a href="https://sequelize.org/" target="_blank" rel="noreferrer">
            <SiSequelize className={style.icon}/>
          </a> 
        </Tippy>
        <Tippy content="PostgreSQL">
          <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
            <SiPostgresql className={style.icon}/> 
          </a>
        </Tippy>
      </div>
      <div className={style.div}>
      <div className={style.title}>Tools</div>
        <Tippy content="VSCode">
          <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
            <SiVisualstudiocode className={style.icon}/>
          </a>
        </Tippy>
        <Tippy content="Git">
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <SiGit className={style.icon}/>
          </a>
        </Tippy>
        <Tippy content="GitHub">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <SiGithub className={style.icon}/> 
          </a>
        </Tippy>
        <Tippy content="Figma">
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
            <SiFigma className={style.icon}/> 
          </a>
        </Tippy>
        <Tippy content="Trello">
          <a href="https://trello.com/" target="_blank" rel="noreferrer">
            <SiTrello className={style.icon}/>
          </a>
        </Tippy>
      </div>
      <div className={style.div}>
      <div className={style.title}>Certificates</div>
      <Tippy content="EFSET C1 Advanced">
        <a href="https://www.efset.org/cert/4aDtEB" target="_blank" rel="noreferrer">
          <img src={efset} alt='EFSET'/>
        </a>
      </Tippy>
      <Tippy content="Henry Full Stack">
        <a href="https://certificates.soyhenry.com/cert?id=6180a404-15b7-45b1-8de4-64fc05d26718" target="_blank" rel="noreferrer">
        <img src={henry} alt='HENRY'/>
        </a> 
      </Tippy>
      </div>
    </div>
  )
}
