import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Footer.module.css'


const Footer = () => {
  return (
    <div className={style.container}>
         <div className={style.title}>
         <h1>Dont't miss What happing</h1>
            <p>People on Twitter are the first to know.</p>
         </div>
        <div className={style.userField}>
            <NavLink to='/login'className={style.login}>Sig In</NavLink>
            <NavLink to='/signup'className={style.register}>Sign Up</NavLink>
        </div>
    </div>
  )
}

export default Footer