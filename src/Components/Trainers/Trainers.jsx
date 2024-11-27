import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Trainers.css'
import headcoach from './Images/headcoach.jpg'
import battingcoach from './Images/batting coach.jpg'
import bowlcoach1 from './Images/profile-IMG_2903.jpg'
import bowlcoach2 from './Images/profile-IMG_7585.jpg'
const Trainers = () => {
  return (
    <section className='trainers'>
        <Header/>
        <div className='trainers_container'>
        
            <section className="head_coach">
              <div className='head_coach_name'>
                  <h1>Carl Hopinkson</h1>
                  <h3>Head Coach</h3>
              </div>
              <div className='head_coach_container'>
              
                  <div className='head_coach_image'>
                      <img src={headcoach} alt="" />
                  </div>

                  <div className='head_coach_details'>
                      <div>
                          <p>Name</p><span>Carl Hopinkson</span>
                      </div>
                      <div>
                          <p>Age</p><span>51</span>  
                      </div> 
                      <div>
                          <p>Position </p><span>Head coach</span>
                      </div>
                      <div>
                          <p>DOB:</p><span>18/09/1973</span>
                      </div>
                      <div>
                          <p>Native </p><span>Mumbai</span>
                      </div>
                      <div>
                          <p>Carrier   </p><span>1991-20003 </span>
                      </div>
                      <div>
                          <p>Matches</p><span>200</span>
                      </div>
                      <div>
                          <p>Innings</p><span>180</span>
                      </div>
                      <div>
                          <p>Runs</p><span>8500</span>
                      </div>
                  </div>
              </div>
          </section>
          <div className='bowling_coach'>
            <img src={bowlcoach1} alt="" />
            <img src={bowlcoach2} alt="" />
          </div>

        </div>
        <Footer/>
    </section>
  )
}

export default Trainers