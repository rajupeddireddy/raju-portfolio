import React from 'react'
import './Home.css'

import Discuss from '../Discuss/Discuss'
import Footer from '../Footer/Footer'

export default function Home() {
  //const aboutRef = useRef(null)

  // const scrollDownToAbout = () => {
  //   aboutRef.current.scrollIntoView({behavior:'smooth'})
  // }

  const scrollToTop = () => {
    window.scrollTo({top:0, behavior:'smooth'})
  }

  return (
    <div className='home-container'>
        {/* <Navbar/> */}
        {/* <hr className='divider'/>
        <div className='my-intro-card'>
            <div>
                <h1>Hi There, I'm <span className='name'>Raju</span></h1>
                <p>iam into <span>Web Develpment</span></p>
                <div className='icons-card'>
                  <IconButton components='a' href='https://www.linkedin.com/in/raju-peddireddi/' target='_blank'>
                    <LinkedInIcon fontSize='large' color='primary'/>
                  </IconButton> 
                  <IconButton components='a' href='https://github.com/rajupeddireddy' target='_blank'>
                    <GitHubIcon fontSize='large' sx={{color:'#000'}}/>
                  </IconButton>
                  <IconButton components='a' href='https://wa.me/919493613197' target='_blank'>
                    <WhatsAppIcon fontSize='large' color='success'/>
                  </IconButton>
                  <Button variant='contained' color='secondary'sx={{ml:'20px', textTransform:'none', borderRadius:'30px'}} onClick={scrollDownToAbout}>About Me<KeyboardArrowDownIcon/></Button>
                </div>
            </div>
                <img src='https://ik.imagekit.io/e5kg8mysj/IMG_6017.jpg?updatedAt=1712942903634' alt='my photo' className='myphoto'/>
        </div>
        <Skills/>
        <Experience/>
        <Education/>
        <Projects/>
        <div ref={aboutRef} style={{width:'80%'}}>
          <About />
        </div> */}
        <Discuss/>
        <Footer scrollToTop={scrollToTop}/>
    </div>
  )
}
