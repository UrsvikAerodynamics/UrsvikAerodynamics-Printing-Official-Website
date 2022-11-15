import React from 'react'
import './Header.css';
import Logo from './images/Logo.png';



export default function Header() {
  return (
    <header>
        <img src={Logo} alt='logo'></img>
    </header>
  )
}
