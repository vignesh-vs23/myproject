import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './bat.css'
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
import bat1 from './Images/ton1.png'
import bat2 from './Images/ss1.png'
import bat3 from './Images/ceat-removebg-preview.png'
import bat4 from './Images/dsc1-removebg-preview.png'
import bat5 from './Images/mrf1-removebg-preview.png'
import bat6 from './Images/sg1-removebg-preview.png'
import bat7 from './Images/mrf2-removebg-preview.png'
import bat8 from './Images/strau-removebg-preview.png'
import bat9 from './Images/gm1-removebg-preview.png'
import bat10 from './Images/gm2-removebg-preview.png'
import bat11 from './Images/ton2-removebg-preview.png'
import bat12 from './Images/ss2-removebg-preview.png'
import bat13 from './Images/ton3-removebg-preview.png'
import bat14 from './Images/gm3-removebg-preview.png'
import bat15 from './Images/ceat2-removebg-preview.png'
import bat16 from './Images/sg2-removebg-preview.png'
import bat17 from './Images/dsc2-removebg-preview.png'
import bat18 from './Images/starus2-removebg-preview.png'
import bat19 from './Images/heega1-removebg-preview.png'
import bat20 from './Images/dsc3-removebg-preview.png'

function Bat() {
  return (
    <>
        <Header/>
        <section className='Bat'>
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
                <div className='price'>
                    <h2>Price</h2>
                    <label htmlFor="">$0-$500</label>
                    <input type="range"/>
                </div>
            </div>
        </div>
            <div className='bat_container'>
                <div className="bat">
                        <div className='batimg_container'>
                            <img src={bat1} alt="" />
                        </div>
                        <div className="bat_details_container">
                            <p className='bat_detail'>SS TON Revolution Kashmir Willow Cricket Bat Rohit Sharma SPL Edition,for Leather Ball</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-33%</span>
                            <span className='price'> Rs.2531 </span>
                            <span className='ogprice'>M.R.P.: Rs.3800 </span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="bat">
                        <div className='batimg_container'>
                            <img src={bat2} alt="" />
                        </div>
                        <div className="bat_details_container">
                            <p className='bat_detail'>SS Skyhigh special limited edition SH-Stunner Kashmir Willow Cricket Bat  for Leather Ball</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-13%</span>
                            <span className='price'> Rs.1885 </span>
                            <span className='ogprice'>M.R.P.: Rs.2160 </span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="bat">
                        <div className='batimg_container'>
                            <img src={bat3} alt="" />
                        </div>
                        <div className="bat_details_container">
                            <p className='bat_detail'>CEAT English Willow Cricket Bat with Full Cane Handle with Bat Cover Play for Leather Ball/Teniss Ball</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-63%</span>
                            <span className='price'> Rs.2970 </span>
                            <span className='ogprice'>M.R.P.: Rs.7990 </span>
                            <span className='deliverydate'>Get it by Saturday, November 23</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="bat">
                        <div className='batimg_container'>
                            <img src={bat4} alt="" />
                        </div>
                        <div className="bat_details_container">
                            <p className='bat_detail'>IVAAR Sports Limited Edition English Willow Cricket Bat with Bat Cover Play for Leather Ball</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-60%</span>
                            <span className='price'> Rs.2970 </span>
                            <span className='ogprice'>M.R.P.: Rs.7490 </span>
                            <span className='deliverydate'>Get it by Monday, November 25</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="bat">
                        <div className='batimg_container'>
                            <img src={bat5} alt="" />
                        </div>
                        <div className="bat_details_container">
                            <p className='bat_detail'>AARAV mrf Cricket Bat Kashmir Willow with Red Leather Ball, Bat Cover| Professional Cricket bat | Leather bat | mrf Cricket bat</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-56%</span>
                            <span className='price'> Rs.1999 </span>
                            <span className='ogprice'>M.R.P.: Rs.4499 </span>
                            <span className='deliverydate'>Get it by Tuesday, November 26</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="bat">
                        <div className='batimg_container'>
                            <img src={bat6} alt="" />
                        </div>
                        <div className="bat_details_container">
                            <p className='bat_detail'>SG Scorer Classic Kashmir Willow Cricket Bat (Size: Full Size,SH Ball: Leather Ball)| Professional Cricket bat |</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-7%</span>
                            <span className='price'> Rs.2229 </span>
                            <span className='ogprice'>M.R.P.: Rs.2399 </span>
                            <span className='deliverydate'>Get it by Sunday, November 24</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="bat">
                        <div className='batimg_container'>
                            <img src={bat7} alt="" />
                        </div>
                        <div className="bat_details_container">
                            <p className='bat_detail'>AEM Kashmir Willow Cricket Bat with Cover for All Types of Leather Ball Size - 5| Professional Cricket bat |</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-50%</span>
                            <span className='price'> Rs.1499 </span>
                            <span className='ogprice'>M.R.P.: Rs.2999 </span>
                            <span className='deliverydate'>Get it by Monday, November 25</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="bat">
                        <div className='batimg_container'>
                            <img src={bat8} alt="" />
                        </div>
                        <div className="bat_details_container">
                            <p className='bat_detail'>STRAUSS Pro Kashmir Willow Cricket Bat | Size: Short Handle (SH) | Suitable for Leather/Tennis Ball |(1050-1200 Grams)|</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-53%</span>
                            <span className='price'> Rs.1659 </span>
                            <span className='ogprice'>M.R.P.: Rs.3499 </span>
                            <span className='deliverydate'>Get it by Wednesday, November 27</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="bat">
                        <div className='batimg_container'>
                            <img src={bat9} alt="" />
                        </div>
                        <div className="bat_details_container">
                            <p className='bat_detail'>GM Neon Apex Kashmir Willow Cricket Bat with Cloth Cover on Face| Suitable for Leather/Tennis Ball |</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={emptystar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-1%</span>
                            <span className='price'> Rs.2488 </span>
                            <span className='ogprice'>M.R.P.: Rs.2519 </span>
                            <span className='deliverydate'>Get it by Saturday, November 23</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="bat">
                        <div className='batimg_container'>
                            <img src={bat10} alt="" />
                        </div>
                        <div className="bat_details_container">
                            <p className='bat_detail'>GM AK Diamond Black Kashmir Willow Cricket Bat, Full Size SH, with Cover| Suitable for Leather/Tennis Ball |</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={emptystar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-31%</span>
                            <span className='price'> Rs.1999 </span>
                            <span className='ogprice'>M.R.P.: Rs.2899 </span>
                            <span className='deliverydate'>Get it by Sunday, November 24</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="bat">
                        <div className='batimg_container'>
                            <img src={bat11} alt="" />
                        </div>
                        <div className="bat_details_container">
                            <p className='bat_detail'>Ss Ton Super Kw Bat Grade 4 Kashmir Willow Cricket Bat ( Size: Short Handle,Leather Ball ), Wood, Multicolour|</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-2%</span>
                            <span className='price'> Rs.2121 </span>
                            <span className='ogprice'>M.R.P.: Rs.2170 </span>
                            <span className='deliverydate'>Get it by Tuesday, November 26</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="bat">
                        <div className='batimg_container'>
                            <img src={bat12} alt="" />
                        </div>
                        <div className="bat_details_container">
                            <p className='bat_detail'>SS master 100 kw bat Kashmir Willow Professional Cricket Bat ( Size: Short Handle,Leather Ball )|</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-1%</span>
                            <span className='price'> Rs.2356 </span>
                            <span className='ogprice'>M.R.P.: Rs.2370 </span>
                            <span className='deliverydate'>Get it by Wednesday, November 27</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="bat">
                        <div className='batimg_container'>
                            <img src={bat13} alt="" />
                        </div>
                        <div className="bat_details_container">
                            <p className='bat_detail'> TON Cricket Bat Maker Max Power Kw Bat Grade 3 Kashmir Willow Cricket Bat (Size: Short Handle, Leather Ball)|</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-9%</span>
                            <span className='price'> Rs.2490 </span>
                            <span className='ogprice'>M.R.P.: Rs.2740 </span>
                            <span className='deliverydate'>Get it by Friday, November 22</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="bat">
                        <div className='batimg_container'>
                            <img src={bat14} alt="" />
                        </div>
                        <div className="bat_details_container">
                            <p className='bat_detail'>GM Noir 333 English Willow Cricket Bat for Men and Boys | Short Handle | Ready to Play | Lightweight | Free Cover |</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-10%</span>
                            <span className='price'> Rs.12549 </span>
                            <span className='ogprice'>M.R.P.:Rs.13803</span>
                            <span className='deliverydate'>Get it by Saturday, November 23</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="bat">
                        <div className='batimg_container'>
                            <img src={bat15} alt="" />
                        </div>
                        <div className="bat_details_container">
                            <p className='bat_detail'>AARAV Kashmir Willow Cricket Bat Full Cane and Bat Cover for Leather Ball | Professional Cricket bat | Leather bat |</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-53%</span>
                            <span className='price'> Rs.1899 </span>
                            <span className='ogprice'>M.R.P.:Rs.3999</span>
                            <span className='deliverydate'>Get it by Thursday, November 28</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="bat">
                        <div className='batimg_container'>
                            <img src={bat16} alt="" />
                        </div>
                        <div className="bat_details_container">
                            <p className='bat_detail'>SG Sierra Plus Kashmir Willow Cricket Bat ( Size: Short Handle,Leather Ball )| Professional Cricket bat | Leather bat |</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-9%</span>
                            <span className='price'> Rs.2468 </span>
                            <span className='ogprice'>M.R.P.:Rs.2699</span>
                            <span className='deliverydate'>Get it by Monday, November 25</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="bat">
                        <div className='batimg_container'>
                            <img src={bat17} alt="" />
                        </div>
                        <div className="bat_details_container">
                            <p className='bat_detail'>DSC Intense Zing Kashmir Willow Cricket Bat ( Size: Short Handle, Ball_ type : Leather Ball, Playing Style : All-Round )</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={emptystar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-17%</span>
                            <span className='price'> Rs.2863 </span>
                            <span className='ogprice'>M.R.P.: Rs.3439 </span>
                            <span className='deliverydate'>Get it by Friday, November 22</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="bat">
                        <div className='batimg_container'>
                            <img src={bat18} alt="" />
                        </div>
                        <div className="bat_details_container">
                            <p className='bat_detail'>STRAUSS Launcher Kashmir Willow Cricket Bat | Size: Short Handle (SH)| Anti Scuff Sheet & Bat Cover | Blue | (1050-1200 Grams</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-59%</span>
                            <span className='price'> Rs.1029 </span>
                            <span className='ogprice'>M.R.P.: Rs.2499 </span>
                            <span className='deliverydate'>Get it by Monday, November 25</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="bat">
                        <div className='batimg_container'>
                            <img src={bat19} alt="" />
                        </div>
                        <div className="bat_details_container">
                            <p className='bat_detail'>Heega ™ Pre-Knocked Big Sweet Spot Bigbully Kashmir Willow Cricket Bat | Well Balanced | Long Handle (34.25)</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-10%</span>
                            <span className='price'> Rs.3229 </span>
                            <span className='ogprice'>M.R.P.: Rs.3579 </span>
                            <span className='deliverydate'>Get it by Friday, November 29</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="bat">
                        <div className='batimg_container'>
                            <img src={bat20} alt="" />
                        </div>
                        <div className="bat_details_container">
                            <p className='bat_detail'>DSC Intense Force Kashmir Willow Cricket Bat | Color: Beige | Size: Short Handle | Crosswave Tape on Edge for Protection |</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-7%</span>
                            <span className='price'> Rs.2739 </span>
                            <span className='ogprice'>M.R.P.: Rs.2959 </span>
                            <span className='deliverydate'>Get it by Monday, November 25</span>
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

export default Bat