import React from 'react'
// import { Box, Button } from '@mui/material'
import './Skills.css'
// import { makeStyles } from '@mui/styles'

// const useStyles = makeStyles({
//   btnContainer:{
//     gap:'12px',
//     display:'flex',
//     justifyContent:'space-evenly',
//     flexWrap:'wrap',
//     flexgrow:1,
//     marginBottom:'25px'
    
//   },
//   button:{
//       textTransform:'none !important' ,
//       color:'#000 !important'
//   },
    
// })

export default function Skills() {
    // const classes = useStyles()
  return (
    <div className='skill-container'>
      <h2 className='s-heading'>Skills</h2>
      <div className='btn-container'>
        <button >React</button>
        <button >Redux</button>
        <button >Javascript</button>
        <button >Typescript</button>
        <button >Python</button>
        <button >HTML</button>
        <button >CSS</button>
        <button >Material Ui</button>
        <button >React Storybook</button>
        <button >Gatsby</button>
        <button >Bootstrap</button>
        <button >SQLite</button>
        <button >Node js</button>
        <button >Express</button>
        <button >Axios</button>
        <button >Git</button>
        <button >VS Code</button>
        <button >Wix</button>
        <button >Responsive Design</button>
      </div>
    </div>
  )
}
