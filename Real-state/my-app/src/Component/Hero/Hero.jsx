import React from 'react';
import './hero.css';
export default function Hero() {
  return (
    <>
  <section className='hero'>
  <div className='container conH'>
   <h1>Search Your Next Home</h1>
   <p>Find new & featured property located in your local city.</p>
  </div>
  <form className='flex'>
  <div className='box'>
<span>city</span>
<input type="" placeholder='location'></input>
  </div>
  <div className='box'>
  <span>Property</span>
  <input type="" placeholder='Property Name'></input>
  </div>
  <div className='box'>
    <span>Price Range</span>
    <input type=" " placeholder='Price range'></input>
  </div>
<div className='box'>
 <input type="" placeholder='Advance filter'></input>
</div>
<button className="btn1">
<i className='fa  fa-search'></i>
</button>
  </form>
  </section>
    </>
  );
}
