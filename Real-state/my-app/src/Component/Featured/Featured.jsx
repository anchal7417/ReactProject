import React from 'react'
import './feature.css';
import FeaturedCard from './FeaturedCard';
export default function Featured() {
  return (
  <>
  <section className='featured background mt-3'>
    <div className=' text'>
     <h1>Featured Property Types'</h1>
      <p>Find All Type of Property.'</p>
    </div>
    <FeaturedCard/>
  
  </section>
  </>
  )
}
