import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import phoneImage from '../../assets/images/phone.png'
import emailImage from '../../assets/images/email.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='nav-container'>
      <a href='tel:+919493613197' target='_blank'  rel="noreferrer">
        <CallIcon color='success' fontSize='small'/>
        <img src={phoneImage} alt='phone' className='phone-image' />
      </a>
      <a href='https://drive.google.com/file/d/1uo2F4-CPunjqeLKfgNRjNKu2X0RakhO0/view?usp=sharing' target='_blank'  rel="noreferrer">
        <ArticleIcon color='primary' fontSize='small'/>
        <p>resume</p>
      </a>
      <a href='mailto:rajupeddireddy9493@gmail.com' target='_blank' rel='noreferrer'>
        <EmailIcon fontSize='small'/>
        <img src={emailImage} alt='email' className='email-image' />

      </a>
    </div>
  )
}