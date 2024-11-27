import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './about.css'
import aboutbanner from './images/cricket-bat-ball-foreground-pitch (1).jpg'
import values from './images/values.png'
import mission from './images/mission.png'
import vision from './images/vision.png'
import story1 from './images/3rd-t20-between-india-and-england_18be282c-e908-11e6-a2d8-09470c086dd7.jpg'
import story2 from './images/ghj.jpeg'
import mstaff1 from './images/mstaff1.jpg'
import mstaff2 from './images/mstaff2.jpg'
import mstaff3 from './images/mstaff3.jpg'
import mstaff4 from './images/mstaff4.jpg'
import awardimg1 from './images/award-img1.png'
import awardimg2 from './images/award-img2.png'
import awardimg3 from './images/award-img3.png'
import awardimg4 from './images/award-img4.png'
import awardimg5 from './images/award-img5.png'
import awardimg6 from './images/award-img6.png'
import awardimg7 from './images/award-img7.png'
import awardimg8 from './images/award-img8.png'
import awardimg9 from './images/award-img9.png'
const About = () => {
  return (
    <>
    <Header/>
    <section className='about'>
        <div className='about_container'>
            <img src={aboutbanner} alt="" />
            <div className='about_story_container'>
              <div className="about_story_image">
                  <img src={story1} alt=""  className='abt_mainimg'/>
                  <img src={story2} alt="" className='abt_smallimg' />
              </div>
              <div className='about_story_details'>
                <h1>Our Story</h1>
                <h2>About Phoenix Cricket Club</h2>
                <p>Phoenix Cricket Club was founded in 1887, taking as its home a cricket ground set up by the ambitious entrepreneur Mr Jack Sparrow staged his first match – between Middle-east and south-east – on a ground on Dorset Fields in Marylebone.
                    The following year, PCC laid down a Code of Laws, requiring the wickets to be pitched 22 yards apart and detailing how players could be given out. Its Laws were adopted throughout the game – and the Club today remains the custodian and arbiter of Laws relating to cricket around the world.
                    In 1914 MCC moved up the road to a new rural ground in St John's Wood - which remains their home to this day. A decade later, when Jack Sparrow was 70, he sold the ground to a Bank of India director, William Ward, for £5,400. Having provided the Phoenix Cricket Club with a ground for 38 years, Lord retired before passing away seven years later - but his name lives on.
                    In the 1970s, PCC decided it wanted to get involved in county cricket, which was growing in popularity, and, in 1977, it invited Middle-east to adopt Lord's as its county ground - an arrangement which continues over 140 years later.
                    In 1977 PCC sent James Faulkner and an Mumbai side to India in what would become the first official Test match - although it was not until 26 years later, in 2003, that PCC undertook responsibility for Mumbai's tours in an official capacity.
                </p>
              </div>
            </div>

            <div className='about_goals_container'>
              <h1>OUR GOALS</h1>
              <div className='about_goals_box'>
                <div className='goals'>
                    <img src={values} alt="" />
                    <h1>Our Values</h1>
                    <p>We make sure that they have top-notch coaching facilities and tools to meet their technical, mental, and physical needs. They will gain the necessary experience in state championships and beyond thanks to world-class facilities and numerous opportunities to play in games.</p>
                </div>
                <div className="goals">
                    <img src={mission} alt="" />
                    <h1>Our Mission</h1>
                    <p>We make sure that they have top-notch coaching facilities and tools to meet their technical, mental, and physical needs. They will gain the necessary experience in state championships and beyond thanks to world-class facilities and numerous opportunities to play in games.</p>
                </div>
                <div className='goals'>
                    <img src={vision} alt="" />
                    <h1>Our Vision</h1>
                    <p>Our Vision is to give students a variety of professional opportunities by creating the best environment for their continuous development in cricket while giving their education appropriate respect..</p>
                </div>
              </div>
            </div>
            <div className='about_management_staff_container'>
              <h1>OUR MANAGEMENT STAFF</h1>
              <div className='management_staff_box'>
                <div className='management_staff'>
                  <img src={mstaff1} alt="" className='mstaffimg'/>
                  <h1 className='mstaff_name'>Steve Rogers</h1>
                  <h3 className='mstaff_position'>President</h3>                  
                </div>
                <div className='management_staff'>
                  <img src={mstaff2} alt="" className='mstaffimg'/>
                  <h1 className='mstaff_name'>Johny Depp</h1>
                  <h3 className='mstaff_position'>Vice_President</h3>                  
                </div>
                <div className='management_staff'>
                  <img src={mstaff3} alt="" className='mstaffimg'/>
                  <h1 className='mstaff_name'>Tony Stark</h1>
                  <h3 className='mstaff_position'>Hony Treasure and Sponser</h3>                  
                </div>
                <div className='management_staff'>
                  <img src={mstaff4} alt="" className='mstaffimg'/>
                  <h1 className='mstaff_name'>Logan Paul</h1>
                  <h3 className='mstaff_position'>Member-Entertainment</h3>                  
                </div>
              </div>
            </div>
            <div className='about_achievement_container'>
              <h1>ACHIEVEMENTS</h1>
              <div className='achievement_container'>
                <div className='achievement_box1'>
                    <div className='achievement'>
                      <img src={awardimg1} alt="" />
                      <p>2020 Fc Cup Champion</p>
                    </div>
                    <div className='achievement'>
                      <img src={awardimg2} alt="" />
                      <p>2014 senior State CPL Champion</p>
                    </div>
                    <div className='achievement'>
                      <img src={awardimg3} alt="" />
                      <p>2018 Bujji Babu Champion</p>
                    </div>
                </div>
                <div className='achievement_box2'>
                    <div className='achievement'>
                      <img src={awardimg5} alt="" />
                      <p>2008 Junior State Champion</p>
                    </div>
                    <div className='achievement'>
                      <img src={awardimg4} alt="" />
                      <p>U16 World Cup Champion</p>
                    </div>
                    <div className='achievement'>
                      <img src={awardimg6} alt="" />
                      <p>2011 T20 Trophy Champion</p>
                    </div>
                </div>
                <div className='achievement_box3'>
                    <div className='achievement'>
                      <img src={awardimg8} alt="" />
                      <p>2021 World Cup Champion</p>
                    </div>
                    <div className='achievement'>
                      <img src={awardimg7} alt="" />
                      <p>2004 BBL Champion</p>
                    </div>
                    <div className='achievement'>
                      <img src={awardimg9} alt="" />
                      <p>2016 Ranji Trophy Champion</p>
                    </div>
                </div>
              </div>  
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default About