import React from 'react'
import './Style.css'
import { location } from '../Data'
const Location=()=>{
  return (
   <>
   <section className='location padding'>
    <div className='container div2'>
    <h3> Explore By Location</h3>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
    <p>sed do eiusmod tempor incididunt ut labore incididunt ut labore</p>
    <p>et dolore magna aliqua. Ut enim ad minim veniam.</p>
<div className='content grid3 mtop'>
    {location.map((item, index) => (
  <div className='box' key={index}>
  <img src={item.cover} alt='' />
  <div className='overlay'>
<h5>{item.name}</h5>
  <p>
  <label>{item.Villas}</label>
<label>{item.Offices}</label>
<label>{item.Apartments}</label>
  </p>
  </div>
  </div>
    ))}
  </div>
  </div>
</section>
    </>
  )
}
 export default Location