import React from 'react'
import './Experience.css'

export default function Experience() {

  return (
    <div className='e-container'>
      <h2>Experience</h2>
      <div  className='companies-contanier'>
        <div className='ex-1'>
          <img src='https://media.licdn.com/dms/image/v2/C510BAQF4FdaNM1rtRQ/company-logo_100_100/company-logo_100_100/0/1630616078161/unifo_solutions_private_limited_logo?e=1733961600&v=beta&t=FwrPB1H5I7SMMZl1wuvSq_fV_kTGsY80KP4qVG_Zl5E' alt='unifo'/>
          <div className='designation'>
            <h3 >SDE 1</h3>
            <p>Unifo Solutions Pvt.Ltd</p>
            <p>Apr 2023 - Jan 2024</p>
            <p>Chennai (On-site)</p>
          </div>
        </div>
        <div className='ex-1'>
        <img src='https://media.licdn.com/dms/image/v2/C560BAQGRiRjglutASA/company-logo_100_100/company-logo_100_100/0/1630659149151?e=1733961600&v=beta&t=0AcwycSwp426LOqFvfdnHLFwKv8fsJlyTA-v_bS6hXk' alt='sgrs'/>
          <div className='designation'>
            <h3 >Frontend Engineer Intern</h3>
            <p>SGRS Acadamic Pvt.Ltd</p>
            <p>Mar 2024 - Ongoing</p>
            <p>Banglore (Work from home)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
