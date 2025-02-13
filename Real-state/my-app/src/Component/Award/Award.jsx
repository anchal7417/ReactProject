
import React from "react"
import "./Award.css"
import { awards } from "../Data"

const Awards = () => {
  return (
    <>
<section className='awards padding'>
<div className='base'>
<p style={{color:"green" ,fontSize:"20px",marginTop:"10px"}}>Our Awards</p>
<h2>'Over 1,24,000+ Happy User Bieng With Us Still</h2>
<h3>They Love Our Services' 
subtitle='Our Awards'</h3>
<div className='content grid4 mtop base'>
 {awards.map((val, index) => (
<div className='box' key={index}>
<div className='icon'>
<span>{val.icon}</span>
</div>
<h1>{val.num}</h1>
<p>{val.name}</p>
</div>
))}</div>
</div>
</section>
</>
  )
}

export default Awards