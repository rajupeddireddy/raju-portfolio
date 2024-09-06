import React from 'react'
import './Footer.css'
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import { IconButton } from '@mui/material';

export default function Footer(props) {
    const {scrollToTop} = props
  return (
    <div className='footer'>
          <IconButton sx={{marginBottom:'20px', mt:3}}onClick={() =>  scrollToTop()}>
            <NavigationOutlinedIcon fontSize='large' sx={{color:'#f58d42'}}/>
        </IconButton>
        <div className="copyright">
            <p>&copy;All rights reserved - <span>Raju Peddireddy</span> | Email: rajupeddireddy9493@gmail.com</p>
        </div>
    </div>
  )
}
