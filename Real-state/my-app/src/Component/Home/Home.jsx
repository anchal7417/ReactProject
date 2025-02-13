import React from 'react'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import Featured from '../Featured/Featured'
import Recent from '../Recent/Recent'
import Awards from '../Award/Award'
import Location from '../Location/Location'
import Price from '../Price/Price'

export default function Home() {
  return (
      <>
      <Header/>
      <Hero/>
      <Featured/>
      <Recent/>
      <Awards/>
      <Location/>
      <Price/>
      <Footer/>
      </>
  )
}
