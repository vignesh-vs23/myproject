import React from 'react'
import Header from './Header/Header'
import Imageslider from './ImageSlider/Imageslider'
import Latestvideos from './Latestvideos/Latestvideos'
import Latestnews from './Latestnews/Latestnews'
import Footer from './Footer/Footer'
function Main() {
  return (
    <div>
        <Header />
        <Imageslider/>   
        <Latestvideos /> 
        <Latestnews/>  
        <Footer />
    </div>
  )
}

export default Main