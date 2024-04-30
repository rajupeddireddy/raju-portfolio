import React , {useRef} from 'react'
import './Home.css'

import Discuss from '../Discuss/Discuss'
import Footer from '../Footer/Footer'
import About from '../About/About'
import Experience from '../Experience/Experience'
import Education from '../Education/Education'
import Navbar from '../Navbar/Navbar'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'

export default function Home() {
  const aboutRef = useRef(null)

  // const scrollDownToAbout = () => {
  //   aboutRef.current.scrollIntoView({behavior:'smooth'})
  // }

  const scrollToTop = () => {
    window.scrollTo({top:0, behavior:'smooth'})
  }

  return (
    <div className='home-container'>
        <Navbar/>
        <hr className='divider'/>
        <div className='my-intro-card'>
            <div>
                <h1>Hi There, I'm <span className='name'>Raju</span></h1>
                <p>iam into <span>Web Develpment</span></p>
            </div>
                <img src='https://ik.imagekit.io/e5kg8mysj/IMG_6017.jpg?updatedAt=1712942903634' className='myphoto' alt='myImage'/>
        </div>
         <Skills/>
        
        <Education/>
        <Experience/>
        <Projects/>
        <div ref={aboutRef} style={{width:'80%'}}>
          <About />
        </div>
        <Discuss/>
        <Footer scrollToTop={scrollToTop}/>
    </div>
  )
}
