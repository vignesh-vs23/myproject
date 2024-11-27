import React from 'react'
import img1 from './Images/ind.jpg'
import img2 from './Images/dhoni.jpg'
import img3 from './Images/3.jpg'
import img4 from './Images/4.jpg'
import img5 from './Images/5.jpg'
import img6 from './Images/6.jpg'
import img7 from './Images/7.jpg'
import img8 from './Images/sl.jpg'
import './Imageslider.css'
function Imageslider() {
  return (
        <div className="slidercontainer">
            <div className="container">
                <div className="slide">
                    <img src={img2} alt="Oops!Image is Not Available" />
                    <span className="caption">Mahendra Singh Dhoni deliveres one hand style six against DC in IPL 2024 </span>
                </div>
                <div className="slide">
                    <img src={img1} alt="Oops!Image is Not Available" />
                    <span className="caption">India Won thier 2nd T20 Worldcup After 17 years at USA in 2024</span>
                </div>
                <div className="slide">
                    <img src={img3} alt="Oops!Image is Not Available" />
                    <span className="caption">Devon convay smashes boundries against Gt bowlers in IPL 2023</span>
                </div>
                <div className="slide">
                    <img src={img4} alt="Oops!Image is Not Available" />
                    <span className="caption">Kohli goes 1 run against Newzealand in semifinal</span>
                </div>  
                <div className="slide">
                    <img src={img5} alt="Oops!Image is Not Available" />
                    <span className="caption"> South Africa Qualifies for the Semi final of 2015 ODI Worldcup</span>
                </div> 
                <div className="slide">
                    <img src={img6} alt="Oops!Image is Not Available" />
                    <span className="caption">Bengaladesh bowlers dominated against Srilanka in Asia cup 2016 </span>
                </div> 
                <div className="slide">
                    <img src={img7} alt="Oops!Image is Not Available" />
                    <span className="caption">Brendon Mecculam and his team walking into the Final against australia in 2015 worldcup</span>
                </div>
                <div className="slide">
                    <img src={img8} alt="Oops!Image is Not Available" />
                    <span className="caption">Srilankan Bowlers Dominated against England in Worldcup 2023</span>
                </div>
            </div>  
        </div>
  )
}

export default Imageslider