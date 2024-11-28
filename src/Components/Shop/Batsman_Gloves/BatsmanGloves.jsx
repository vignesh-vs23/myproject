import React from 'react'
import { Link } from 'react-router-dom'
import './Batsman_Gloves.css'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import baticon from '../icons/cricket-bat.png'
import ballicon from '../icons/cricket-ball.png'
import helmeticon from '../icons/cricket-helmet.png'
import batglovesicon from '../icons/batsman-glove.png'
import keeperglovesicon from '../icons/keeper-glove.png'
import shoesicon from '../icons/shoes.png'
import kneepadsicon from '../icons/kneepads.png'
import kitbagicon from '../icons/kitbag.png'

import fullstar from '../icons/star.png'
import halfstar from '../icons/halfstar.png'
import emptystar from '../icons/emptystar.png'

import bg1 from './Images/white1-removebg-preview.png'
import bg2 from './Images/slugger1-removebg-preview.png'
import bg3 from './Images/ss1-removebg-preview.png'
import bg4 from './Images/white2-removebg-preview.png'
import bg5 from './Images/mrf1-removebg-preview.png'
import bg6 from './Images/snaga1-removebg-preview.png'
import bg7 from './Images/sg1-removebg-preview.png'
import bg8 from './Images/sg2-removebg-preview.png'
import bg9 from './Images/sg3-removebg-preview.png'
import bg10 from './Images/dsc1-removebg-preview.png'
import bg11 from './Images/dsc2-removebg-preview.png'
import bg12 from './Images/gm1-removebg-preview.png'
import bg13 from './Images/dsc3-removebg-preview.png'
import bg14 from './Images/arrowmax1-removebg-preview.png'
import bg15 from './Images/sg4-removebg-preview.png'
import bg16 from './Images/gm2-removebg-preview.png'
import bg17 from './Images/rmax1-removebg-preview.png'
import bg18 from './Images/neo1-removebg-preview.png'
import bg19 from './Images/slugger2-removebg-preview.png'
import bg20 from './Images/white3-removebg-preview.png'
import bg21 from './Images/rtc1-removebg-preview.png'
import bg22 from './Images/white4-removebg-preview.png'
import bg23 from './Images/white5-removebg-preview.png'
import bg24 from './Images/prokick-removebg-preview.png'
import bg25 from './Images/sg5-removebg-preview.png'
import bg26 from './Images/rmax2-removebg-preview.png'
function BatsmanGloves() {
  return (
    <>
    <Header/>
    <section className='Batsman_Gloves'>
        <div className="sidebar_container">
            <div className='sidebar'>
                <div className='category_container'>
                    <h2>Categories</h2>
                    <div className='category'>
                        <img src={baticon} alt=""  className='icon'/>
                        <Link to="/Shop/Bat" className='category_link'>Bat</Link>
                    </div>
                    <div className='category'>
                        <img src={ballicon} alt="" className='icon'/>
                        <Link to="/Shop/Ball" className='category_link'>Ball</Link>
                    </div>
                    <div className='category'>
                        <img src={shoesicon} alt="" className='icon' />
                        <Link to="/Shop/Shoes" className='category_link'>Shoes</Link>
                    </div>
                    <div className='category'>
                        <img src={helmeticon} alt="" className='icon' />
                        <Link to="/Shop/Helmet" className='category_link'>Helmet</Link>
                    </div>
                    <div className='category'>
                        <img src={batglovesicon} alt="" className='icon' />
                        <Link to="/Shop/Batsman_Gloves" className='category_link'>Batsman Gloves</Link>
                    </div>
                    <div className='category'>
                        <img src={keeperglovesicon} alt="" className='icon' />
                        <Link to="/Shop/WicketKeeper_Gloves" className='category_link'>Wicket-Keeper Gloves</Link>
                    </div>
                    <div className='category'>
                        <img src={kneepadsicon} alt="" className='icon'/>
                        <Link to="/Shop/Kneepads" className='category_link'>Kneepads</Link>
                    </div> 
                    <div className='category'>
                        <img src={kitbagicon} alt="" className='icon'/>
                        <Link to="/Shop/Kitbag" className='category_link'>Kitbag</Link>
                    </div>
                </div>
                {/* <div className='price'>
                    <h2>Price</h2>
                    <label htmlFor="">$0-$500</label>
                    <input type="range"/>
                </div> */}
            </div>
        </div>
        <div className="batsman_gloves_container">
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg1} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>WHITEDOT SPORTS Whitedot Dot 1.0 Cricket Batting Gloves, Mens, Rh (Leather, White)</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-44%</span>
                    <span className='price'> Rs.1127 </span>
                    <span className='ogprice'>M.R.P.: Rs.1999 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg2} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>SLUGGER Cricket GO Plus Men's Batting Gloves Right Handed - Lightweight PVC Material</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-39%</span>
                    <span className='price'> Rs.2049 </span>
                    <span className='ogprice'>M.R.P.: Rs.3349 </span>
                    <span className='deliverydate'>Get it by Sunday, December 1</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg3} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>SS Ton Gold Edition Cricket Batting Gloves Adult Size-Right Handed Suitable for Youth</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-13%</span>
                    <span className='price'> Rs.2599 </span>
                    <span className='ogprice'>M.R.P.: Rs.2999 </span>
                    <span className='deliverydate'>Get it by Tuesday, December 3</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg4} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>WHITEDOT SPORTS Dot 2.1 Cricket Batting Gloves|Suitable for Youth|Black, Leather</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-44%</span>
                    <span className='price'> Rs.1127 </span>
                    <span className='ogprice'>M.R.P.: Rs.1999 </span>
                    <span className='deliverydate'>Get it by Wednesday, November 27</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg5} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>MRF Leather Genius Grand Cricket Batting Gloves (Adult Rh), Large, Multicolor</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                           
                     <span className='offer'>-3%</span>
                    <span className='price'> Rs.3000 </span>
                    <span className='ogprice'>M.R.P.: Rs.3090 </span>
                    <span className='deliverydate'>Get it by Thursday, November 28</span>                       
                     <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg6} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>Snaga Cricket Batting Gloves Right Hand Gloves (Silver, Men) , White Leather - Enhanced Grip</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-66%</span>
                    <span className='price'> Rs.675 </span>
                    <span className='ogprice'>M.R.P.: Rs.1999 </span>
                    <span className='deliverydate'>Get it by Friday, December 6</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg7} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>SG Test White Cricket Batting Gloves Mens Size (Right) Attractive Design, Comfortable Grip </p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-9%</span>
                    <span className='price'> Rs.901 </span>
                    <span className='ogprice'>M.R.P.: Rs.999 </span>
                    <span className='deliverydate'>Get it by Thursday, November 21</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg8} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>SG Test White Cricket Batting Gloves Mens Size (Right) ,Superior Grip, Optimum Protection, Ventilated Palm,</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-6%</span>
                    <span className='price'> Rs.3399 </span>
                    <span className='ogprice'>M.R.P.: Rs.3599 </span>
                    <span className='deliverydate'>Get it by Thursday, November 28</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg9} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>SG Test RH Leather Batting Gloves, Adult - Cricket (Assorted) Attractive Design, Comfortable Grip </p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                    </div>                            
                    <span className='offer'>-12%</span>
                    <span className='price'> Rs.2820 </span>
                    <span className='ogprice'>M.R.P.: Rs.3199 </span>
                    <span className='deliverydate'>Get it by Thursday, November 21</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg10} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>DSC Motion Cricket Batting Gloves, Size - Mens, Right Hand,Superior Grip, Optimum Protection, Ventilated Palm,</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-13%</span>
                    <span className='price'> Rs.1126 </span>
                    <span className='ogprice'>M.R.P.: Rs.1299 </span>
                    <span className='deliverydate'>Get it by Wednesday, December 4</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg11} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>DSC Condor Glider Leather Cricket Batting Gloves for Mens, Size, Mens, Right Hand (Multicolor), Standard</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                           
                     <span className='offer'>-7%</span>
                    <span className='price'> Rs.1899 </span>
                    <span className='ogprice'>M.R.P.: Rs.2049 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg12} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>DSC Intense Force Leather Cricket Batting Gloves, Mens Right (Blue-Orange), Standard</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-8%</span>
                    <span className='price'> Rs.2159 </span>
                    <span className='ogprice'>M.R.P.: Rs.2349 </span>
                    <span className='deliverydate'>Get it by Sunday, December 1</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg13} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>DSC Intense Force Leather Cricket Batting Gloves, Mens Right (Blue-Orange), Standard</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-4%</span>
                    <span className='price'> Rs.938 </span>
                    <span className='ogprice'>M.R.P.: Rs.979 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg14} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>ArrowMax Cricket Batting Gloves for Men Boys Youth Right Handers Stylish & Attractive Design, Comfortable Grip</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-47%</span>
                    <span className='price'> Rs.370 </span>
                    <span className='ogprice'>M.R.P.: Rs.699 </span>
                    <span className='deliverydate'>Get it by Friday, November 29</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg15} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>SG Club Right Hand Batting Gloves, Men's (Color May Vary),Superior Grip, Optimum Protection, Ventilated Palm,</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-4%</span>
                    <span className='price'> Rs.1009 </span>
                    <span className='ogprice'>M.R.P.: Rs.1049 </span>
                    <span className='deliverydate'>Get it by Saturday, November 30</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg16} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>GM Prima Plus Cricket Batting Gloves for Mens, Superior Grip, Optimum Protection, Ventilated Palm,</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-16%</span>
                    <span className='price'> Rs.1266 </span>
                    <span className='ogprice'>M.R.P.: Rs.1549 </span>
                    <span className='deliverydate'>Get it by Sunday, December 1</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg17} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>RMAX Unisex Leather & PVC Cricket Batting Gloves (Senior, Right Hand, Green Blue)</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                           
                     <span className='offer'>-50%</span>
                    <span className='price'> Rs.619 </span>
                    <span className='ogprice'>M.R.P.: Rs.1239 </span>
                    <span className='deliverydate'>Get it by Friday, November 29</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg18} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>Neostrike Pro700 Cricket Batting Glove (Mens) |Suitable for Unisex|Professional Batting Gloves|</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                        <img src={emptystar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-55%</span>
                    <span className='price'> Rs.650 </span>
                    <span className='ogprice'>M.R.P.: Rs.1450 </span>
                    <span className='deliverydate'>Get it by Thursday, November 28</span>                       
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg19} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>SLUGGER Cricket GO Plus Men's Batting Gloves Right Handed - Lightweight PVC Material</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-33%</span>
                    <span className='price'> Rs.1599 </span>
                    <span className='ogprice'>M.R.P.: Rs.2370 </span>
                    <span className='deliverydate'>Get it by Monday, December 2</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg20} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>Whitedot Whiz Leather Cricket Batting Gloves, Multicolor, Suitable for Beginner and Intermediate Players</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-32%</span>
                    <span className='price'> Rs.751 </span>
                    <span className='ogprice'>M.R.P.: Rs.1099 </span>
                    <span className='deliverydate'>Get it by Saturday, November 30</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg21} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>RTC SSC BRAND COTTON Cricket Batting gloves (MENS(RIGHT HAND THROW))</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                        <img src={emptystar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-50%</span>
                    <span className='price'> Rs.499 </span>
                    <span className='ogprice'>M.R.P.: Rs.999 </span>
                    <span className='deliverydate'>Get it by Thursday, November 28</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg22} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>Whitedot PU Astral Cricket Batting Gloves, White, Suitalble for Boys Right Hand</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-47%</span>
                    <span className='price'> Rs.1315 </span>
                    <span className='ogprice'>M.R.P.: Rs.2499 </span>
                    <span className='deliverydate'>Get it by Friday, November 29</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg23} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>WHITEDOT SPORTS Spliit Cricket Batting Gloves|Suitable for Mens Right Hand|White|</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-52%</span>
                    <span className='price'> Rs.1691 </span>
                    <span className='ogprice'>M.R.P.: Rs.3499 </span>
                    <span className='deliverydate'>Get it by Thursday, November 28</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg24} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>Prokick Stealth Cricket Batting Gloves|High-Performance Batting Gloves|Suitable for Unisex|</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-33%</span>
                    <span className='price'> Rs.1699 </span>
                    <span className='ogprice'>M.R.P.: Rs.2549 </span>
                    <span className='deliverydate'>Get it by Wednesday, December 3</span>                       
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg25} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>SG Batting Gloves RP LITE Youth RH |Suitable for Unisex|Professional Batting Gloves|</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-19%</span>
                    <span className='price'> Rs.2360 </span>
                    <span className='ogprice'>M.R.P.: Rs.2899 </span>
                    <span className='deliverydate'>Get it by Tuesday, December 2</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="batsman_gloves">
                <div className='batsman_gloves_img_container'>
                    <img src={bg26} alt="" />
                </div>
                <div className="batsman_gloves_details_container">
                    <p className='batsman_gloves_detail'>RMAX Unisex Leather & PU Cricket Batting Gloves Superior Grip, Optimum Protection, Ventilated Palm,</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-26%</span>
                    <span className='price'> Rs.1839 </span>
                    <span className='ogprice'>M.R.P.: Rs.2499 </span>
                    <span className='deliverydate'>Get it by Saturday, November 30</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
        </div>

    </section>
    <Footer/>
    </>
  )
}

export default BatsmanGloves