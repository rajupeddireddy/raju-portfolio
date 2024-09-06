import React from 'react'
import './Education.css'

export default function Education() {
  return (
    <div className='edu-container'>
    <h2>Education</h2>
    <div  className='college-contanier'>
    <div className='edu-1'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFDKcWIhUtBGaaNIRal9FJi-BTV_4q5MowMw&s' alt='NxtWave'/>
        <div className='designation'>
          <h3 >NxtWave</h3>
          <p>MERN stack web Develpment</p>
          <p>Jun 2022- Jan2023</p>
        </div>
      </div>
      <div className='edu-1'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-R0ou1y74MAIUcxYi9FnKwSrOcOTN4grxw&s' alt='rgukt'/>
        <div className='designation'>
          <h3 >Rajiv Gandhi University of Knowledge Technologies, Nuzvid</h3>
          <p>B-TECH</p>
          <p>2018-2022</p>
        </div>
      </div>
      <div className='edu-1'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-R0ou1y74MAIUcxYi9FnKwSrOcOTN4grxw&s' alt='rgukt' />
        <div className='designation'>
          <h3 >Rajiv Gandhi University of Knowledge Technologies, Nuzvid</h3>
          <p>Intermediate</p>
          <p>2016-2018</p>
        </div>
      </div>
      <div className='edu-1'>
        <img src='https://ik.imagekit.io/e5kg8mysj/apboard.jpg?updatedAt=1713025548624' alt='rgukt' />
        <div className='designation'>
          <h3 >Zilla Parishad High School, Vella</h3>
          <p>10th</p>
          <p>2015-2016</p>
        </div>
      </div>
    </div>
  </div>
  )
}
