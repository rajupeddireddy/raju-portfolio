import React from 'react'


import './Skills.css'


export default function Skills() {
  return (
    <div className='skill-container'>
      <h2 className='s-heading'>Skills</h2>
      <div className='btn-container'>
        <button type='button'  class="btn btn-primary">React</button>
         <button >Python</button>
        <button >Javascript</button>
        <button >HTML</button>
        <button >CSS</button>
        <button >Redux</button>
        <button >Material Ui</button>
        <button >Bootstrap</button>
        <button >React Storybook</button>
        <button >Responsive Design</button>
        <br/>
        {/* <button >Typescript</button> */}
      
        <button >SQLite</button>
        <button >Node js</button>
        <button >Express js</button>
        <button >Axios</button>
        <br/>
         <button >Git</button>
        <button >VS Code</button>
        <br/>
        <button >Wix</button>
        <button >Gatsby</button>
        
      </div>
    </div>
  )
}
