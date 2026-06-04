import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className='about-container'>
      <h2>About Me</h2>
      <p>
        I am <span>Raju Peddireddy</span>, a results-driven React Developer with 2+ years of experience building web and mobile fintech products.
        I currently lead React Native development for MoneyMonk, delivering polished loan journeys, clean UI, and fast performance.
      </p>
      <ul>
        <li>Location: East Godavari, Andhra Pradesh, India</li>
        <li>Specialized in React, React Native, Redux, Material UI, and responsive design</li>
        <li>Experience integrating NestJS, Swagger, MongoDB, MySQL, Axios, and AWS services</li>
        <li>Enjoys travelling, bikes, movies, and creating meaningful digital products</li>
        <li>Passionate about building scalable fintech applications and great user experiences</li>
      </ul>
    </div>
  )
}
