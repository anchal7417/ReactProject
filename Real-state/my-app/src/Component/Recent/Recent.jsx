import React from 'react'
import './Recent.css'
import RecentCard from './RecentCard'
const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='base'>
          <h2>Recent Property Listed</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor</p>
        <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </section>
    <RecentCard/>
    </>
  )
}
export default Recent