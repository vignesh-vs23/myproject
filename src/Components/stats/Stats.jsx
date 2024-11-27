import React from 'react'
import { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './stats.css'
import hom from './Images/home.jpg'
import indmen from './Images/mens team/ind men.png' 
import ausmen from './Images/mens team/aus men.png'
import nzmen from './Images/mens team/nz men.png'
import engmen from './Images/mens team/eng men.png'
import samen from './Images/mens team/sa men.png'
import pakmen from './Images/mens team/pak men.png'
import wimen from './Images/mens team/wi men.png'
import slmen from './Images/mens team/srilanka men.png'
import banmen from './Images/mens team/ban men.png'
import afgmen from'./Images/mens team/afg men.png'
import zimmen from './Images/mens team/zim men.png'
import iremen from './Images/mens team/ire men.png'
import nedmen from './Images/mens team/netherland men.png'
import scotmen from './Images/mens team/scotland men.png'
import nepmen from './Images/mens team/nepal men.png'
import usamen from './Images/mens team/usa men.png'
import nammen from './Images/mens team/namibia men.png'
import omanmen from './Images/mens team/oman men.png'
import ausw from './Images/womens team/aus women.png'
import engw from './Images/womens team/eng women.png'
import indw from './Images/womens team/ind women.png'
import slw from './Images/womens team/sl women.png'
import saw from './Images/womens team/sa women.png'
import nzw from './Images/womens team/nz women.png'
import wiw from './Images/womens team/wi women.png'
import banw from './Images/womens team/ban women.png'
import pakw from './Images/womens team/pak women.png'
import irew from './Images/womens team/ireland women.png'
import zimw from './Images/womens team/zim women.png'
import nedw from './Images/womens team/nedherland women.png'
import banner from './Images/banner.jpg'
import csk from './Images/ipl team/csk.png'
import mi from './Images/ipl team/mi.png'
import kkr from './Images/ipl team/kkr.png'
import rcb from './Images/ipl team/rcb.png'
import srh from './Images/ipl team/srh.png'
import rr from './Images/ipl team/rr.png'
import gt from './Images/ipl team/gt.png'
import dc from './Images/ipl team/dc.png'
import lsg from './Images/ipl team/lsg.png'
import punjab from './Images/ipl team/punjab.png'
function Stats() {
    const [toggle,setToggle]=useState(false)
  return (
    <>
    <section className='team'>
    <Header/>
            <div className='banner_container'>
                <img src={banner} alt="" id='banner'/>
            </div>
            <div className='homebox'>
                <img src={hom} alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsum iste consequuntur, quaerat beatae illum fugit quisquam dolor facilis praesentium porro non molestias quia, cum reprehenderit. Assumenda vitae ratione aut!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ex debitis repellendus deserunt quasi aspernatur, repellat a accusantium cupiditate voluptas possimus laudantium praesentium non, et, id ipsam eligendi corporis nulla.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsum iste consequuntur, quaerat beatae illum fugit quisquam dolor facilis praesentium porro non molestias quia, cum reprehenderit. Assumenda vitae ratione aut!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ex debitis repellendus deserunt quasi aspernatur, repellat a accusantium cupiditate voluptas possimus laudantium praesentium non, et, id ipsam eligendi corporis nulla.
                </p>
            </div>
            <div className='ranking'>
                    <h1>Teams</h1>
                <div className='btn_container'>
                    <button className='mensteambtn' onClick={()=>(!toggle)}>Mens Team</button>
                    <button className='womensteambtn'>Womens Team</button>
                </div>
                <div className='team_container'>
                    <div className='mens_team_container'>
                        <div className='mens_team'>
                            <img src={indmen} alt="" />
                            <div className='text'>
                                <h1>India</h1>
                                <span>Rating 1</span>
                            </div>
                        </div>
                        <div className='mens_team'>
                            <img src={ausmen} alt="" />
                            <div className='text'>
                                <h1>Australia</h1>
                                <span>Rating 2</span>
                            </div>
                        </div>
                        <div className='mens_team'>
                            <img src={nzmen} alt="" />
                            <div className='text'>
                                <h1>Newzeland</h1>
                                <span>Rating 3</span>
                            </div>
                        </div>
                        <div className='mens_team'>
                            <img src={engmen} alt="" />
                            <div className='text'>
                                <h1>England</h1>
                                <span>Rating 4</span>
                            </div>
                        </div>
                        <div className='mens_team'>
                            <img src={samen} alt="" />
                            <div className='text'>
                                <h1>South Africa</h1>
                                <span>Rating 5</span>
                            </div>
                        </div>
                        <div className='mens_team'>
                            <img src={pakmen} alt="" />
                            <div className='text'>
                                <h1>Pakistan</h1>
                                <span>Rating 6</span>
                            </div>
                        </div>
                        <div className='mens_team'>
                            <img src={wimen} alt="" />
                            <div className='text'>
                                <h1>West Indies</h1>
                                <span>Rating 7</span>
                            </div>
                        </div>
                        <div className='mens_team'>
                            <img src={slmen} alt="" />
                            <div className='text'>
                                <h1>Srilanka</h1>
                                <span>Rating 8</span>
                            </div>
                        </div>
                        <div className='mens_team'>
                            <img src={banmen} alt="" />
                            <div className='text'>
                                <h1>Bengaladesh</h1>
                                <span>Rating 9</span>
                            </div>
                        </div>
                        <div className='mens_team'>
                            <img src={afgmen} alt="" />
                            <div className='text'>
                                <h1>Afghanisthan</h1>
                                <span>Rating 10</span>
                            </div>
                        </div>
                        <div className='mens_team'>
                            <img src={zimmen} alt="" />
                            <div className='text'>
                                <h1>Zimbabwe</h1>
                                <span>Rating 11</span>
                            </div>
                        </div>
                        <div className='mens_team'>
                            <img src={iremen} alt="" />
                            <div className='text'>
                                <h1>Ireland</h1>
                                <span>Rating 12</span>
                            </div>
                        </div>
                        <div className='mens_team'>
                            <img src={nedmen} alt="" />
                            <div className='text'>
                                <h1>Nedherland</h1>
                                <span>Rating 13</span>
                            </div>
                        </div>
                        <div className='mens_team'>
                            <img src={scotmen} alt="" />
                            <div className='text'>
                                <h1>Scotland</h1>
                                <span>Rating 14</span>
                            </div>
                        </div>
                        <div className='mens_team'>
                            <img src={nepmen} alt="" />
                            <div className='text'>
                                <h1>Nepal</h1>
                                <span>Rating 15</span>
                            </div>
                        </div>
                        <div className='mens_team'>
                            <img src={usamen} alt="" />
                            <div className='text'>
                                <h1>United States of America</h1>
                                <span>Rating 16</span>
                            </div>
                        </div>
                        <div className='mens_team'>
                            <img src={nammen} alt="" />
                            <div className='text'>
                                <h1>Namibia</h1>
                                <span>Rating 17</span>
                            </div>
                        </div>
                        <div className='mens_team'>
                            <img src={omanmen} alt="" />
                            <div className='text'>
                                <h1>Oman</h1>
                                <span>Rating 18</span>
                            </div>
                        </div>
                    </div>
                    <div className='womens_team_container'>
                        <div className='womens_team'>
                            <img src={ausw} alt="" />
                            <div className='text'>
                                <h1>Australia</h1>
                                <span>Rating 1</span>
                            </div>
                        </div>
                        <div className='womens_team'>
                            <img src={engw} alt="" />
                            <div className='text'>
                                <h1>England</h1>
                                <span>Rating 2 </span>
                            </div>
                        </div>
                        <div className='womens_team'>
                            <img src={indw} alt="" />
                            <div className='text'>
                                <h1>India</h1>
                                <span>Rating 3</span>
                            </div>
                        </div>
                        <div className='womens_team'>
                            <img src={slw} alt="" />
                            <div className='text'>
                                <h1>SriLanka</h1>
                                <span>Rating 4</span>
                            </div>
                        </div>
                        <div className='womens_team'>
                            <img src={saw} alt="" />
                            <div className='text'>
                                <h1>South Africa</h1>
                                <span>Rating 5</span>
                            </div>
                        </div>
                        <div className='womens_team'>
                            <img src={nzw} alt="" />
                            <div className='text'>
                                <h1>Newzeland</h1>
                                <span>Rating 6</span>
                            </div>
                        </div>
                        <div className='womens_team'>
                            <img src={wiw} alt="" />
                            <div className='text'>
                                <h1>West Indies</h1>
                                <span>Rating 7</span>
                            </div>
                        </div>
                        <div className='womens_team'>
                            <img src={banw} alt="" />
                            <div className='text'>
                                <h1>Bangaladesh</h1>
                                <span>Rating 8</span>
                            </div>
                        </div>
                        <div className='womens_team'>
                            <img src={pakw} alt="" />
                            <div className='text'>
                                <h1>Pakistan</h1>
                                <span>Rating 9</span>
                            </div>
                        </div>
                        <div className='womens_team'>
                            <img src={irew} alt="" />
                            <div className='text'>
                                <h1>Ireland</h1>
                                <span>Rating 10</span>
                            </div>
                        </div>
                        <div className='womens_team'>
                            <img src={zimw} alt="" />
                            <div className='text'>
                                <h1>Zimbabe</h1>
                                <span>Rating 11</span>
                            </div>
                        </div>
                        <div className='womens_team'>
                            <img src={nedw} alt="" />
                            <div className='text'>
                                <h1>Nedherland</h1>
                                <span>Rating 12</span>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            <div className='ipl'>
                <h1>IPL TEAMS</h1>
                <div className='iplteam_container'>
                    <a href="https://www.chennaisuperkings.com/" target='_blank'>

                        <div className='ipl_team'>
                                <img src={csk} alt="" />
                                <div className='text'>
                                    <h1>Chennai Super Kings</h1>
                                    <span>Rating 1</span>
                                </div>
                        </div>
                    </a>
                    <a href="https://www.mumbaiindians.com/" target='blank'>
                        <div className='ipl_team'>
                                <img src={mi} alt="" />
                                <div className='text'>
                                    <h1>Mumbai Indians</h1>
                                    <span>Rating 2</span>
                                </div>
                        </div>
                    </a>
                   <a href="https://www.kkr.in/" target='blank'>
                        <div className='ipl_team'>
                                <img src={kkr} alt="" />
                                 <div className='text'>
                                    <h1>Kolkata Kinght Riders</h1>
                                    <span>Rating 3</span>
                                </div>
                        </div>
                   </a> 
                    <a href="https://www.gujarattitansipl.com/" target='blank'>
                        <div className='ipl_team'>
                                <img src={gt} alt="" />
                                <div className='text'>
                                    <h1>Gujarat Titans</h1>
                                    <span>Rating 4</span>
                                </div>
                        </div>
                    </a>
                    <a href="https://www.sunrisershyderabad.in/" target='blank'>
                        <div className='ipl_team'>
                                <img src={srh} alt="" />
                                <div className='text'>
                                    <h1>Sun Risers Hyderabad</h1>
                                    <span>Rating 5</span>
                                </div>
                        </div>
                    </a>
                    <a href="https://www.rajasthanroyals.com/" target='blank'>
                        <div className='ipl_team' >
                                <img src={rr} alt="" />
                                <div className='text'>
                                    <h1>Rajasthan Royals</h1>
                                    <span>Rating 6</span>
                                </div>
                        </div>
                    </a>
                    <a href="https://www.delhicapitals.in/" target='blank'>
                        <div className='ipl_team'>
                                <img src={dc} alt="" />
                                <div className='text'>
                                    <h1>Delhi Capitals</h1>
                                    <span>Rating 7</span>
                                </div>
                        </div>
                    </a>
                    <a href="https://www.punjabkingsipl.in/" target='blank'>
                        <div className='ipl_team'>
                                <img src={punjab} alt="" />
                                <div className='text'>
                                    <h1>Kings XI Punjab</h1>
                                    <span>Rating 8</span>
                                </div>
                        </div>
                    </a>
                    <a href="https://www.lucknowsupergiants.in/" target='blank'>
                        <div className='ipl_team'>
                                <img src={lsg} alt="" />
                                <div className='text'>
                                    <h1>Lucknow Super Giants</h1>
                                    <span>Rating 9</span>
                                </div>
                        </div>
                    </a>
                    <a href="https://www.royalchallengers.com/" target='blank'>
                        <div className='ipl_team' id='rcb'>
                                <img src={rcb} alt="" />
                                <div className='text' >
                                    <h1>Royal Challengers Bengalore</h1>
                                    <span>Rating 10</span>
                                </div>
                        </div>
                    </a>
                    
                </div>

            </div>
            
    <Footer/>
    </section>
    </>
  )
}

export default Stats