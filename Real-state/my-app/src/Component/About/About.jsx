import React from 'react'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import './About.css'
export default function About() {
  return (
    <>
    <section className='about'>
    <div className='container'>
    <div className='left row'>
    <Header title='Our Agency Story' 
    subtitle='Check out our company story and work process' />
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
     
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          <button className='btn2'>More About Us</button>
    </div>
    <div className='right row'>
    <img src='https://funny-daffodil-350bc9.netlify.app/immio.jpg' alt='' />
        </div>
    </div>
    </section>
    <Footer/>
    </>
  )
}
