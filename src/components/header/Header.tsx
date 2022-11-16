import React from 'react';
import './Header.css';
import Logo from './images/Logo.png';
import UserIcon from './images/icons8-user-96.png';
import Button from '../extra/Button';



export default function Header() {
  return (
    <header>
      <div className='SideLeft'>
        <img className='Logo' src={Logo} alt='logo'></img>
      </div>
      <div className='SideRight'>
        <Button content='Login' color='#D9D9D9' iconLink={UserIcon}/>
      </div>
      
    </header>
  )
}
