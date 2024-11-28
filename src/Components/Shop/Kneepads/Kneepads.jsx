import React from 'react'
import { Link } from 'react-router-dom'
import './Kneepads.css'
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
import kp1 from './Images/moon1-removebg-preview-removebg-preview.png'
import kp2 from './Images/snaga-removebg-preview.png'
import kp3 from './Images/prokick-removebg-preview.png'
import kp4 from './Images/dsc-removebg-preview.png'
import kp5 from './Images/gmefer1-removebg-preview.png'
import kp6 from './Images/sg1-removebg-preview.png'
import kp7 from './Images/dsc2-removebg-preview.png'
import kp8 from './Images/airic1-removebg-preview.png'
import kp9 from './Images/rk1-removebg-preview.png'
import kp10 from './Images/dsc3-removebg-preview.png'
import kp11 from './Images/moon2-removebg-preview.png'
import kp12 from './Images/sg2-removebg-preview.png'
import kp13 from './Images/white1-removebg-preview.png'
import kp14 from './Images/rmax-removebg-preview.png'
import kp15 from './Images/sg3-removebg-preview.png'
function Kneepads() {
  return (
    <>
    <Header/>
    <section className='Kneepads'>
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
        <div className="kneepads_container">
            <div className="kneepads">
                <div className='kneepads_img_container'>
                    <img src={kp1} alt="" />
                </div>
                <div className="kneepads_details_container">
                    <p className='kneepads_detail'>moonwalkr Cricket Leg Guard 2.0 Protective Gear for Batter’s Height (4’5” - 4’8”) Cricket Pads Batting Pads Leg Pads</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-2%</span>
                    <span className='price'> Rs.2350 </span>
                    <span className='ogprice'>M.R.P.: Rs.2399 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="kneepads">
                <div className='kneepads_img_container'>
                    <img src={kp2} alt="" />
                </div>
                <div className="kneepads_details_container">
                    <p className='kneepads_detail'>Snaga Cricket Batting Legguard Men (Boy)Batting Pads Leg Pads for Cricket & Cricket Accessories Blue Large</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-53%</span>
                    <span className='price'> Rs.1127 </span>
                    <span className='ogprice'>M.R.P.: Rs.1699 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="kneepads">
                <div className='kneepads_img_container'>
                    <img src={kp3} alt="" />
                </div>
                <div className="kneepads_details_container">
                    <p className='kneepads_detail'>Prokick Pioneer Cricket Batting Legguard, Small Boys| Material: PVC Facing | High Density Foam |</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-37%</span>
                    <span className='price'> Rs.925 </span>
                    <span className='ogprice'>M.R.P.: Rs.1459 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="kneepads">
                <div className='kneepads_img_container'>
                    <img src={kp4} alt="" />
                </div>
                <div className="kneepads_details_container">
                    <p className='kneepads_detail'>DSC Intense Force Cricket Batting Legguard, Size - Mens, Right Hand ,Cotton Filled Knee Rolls</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-10%</span>
                    <span className='price'> Rs.2384 </span>
                    <span className='ogprice'>M.R.P.: Rs.2649 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="kneepads">
                <div className='kneepads_img_container'>
                    <img src={kp5} alt="" />
                </div>
                <div className="kneepads_details_container">
                    <p className='kneepads_detail'>Gmefvr Leg Guard Pad for Cricket White (Youth) Material: PVC Facing | High Density Foam | Cotton Filled Knee Rolls</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-44%</span>
                    <span className='price'> Rs.499 </span>
                    <span className='ogprice'>M.R.P.: Rs.899 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="kneepads">
                <div className='kneepads_img_container'>
                    <img src={kp6} alt="" />
                </div>
                <div className="kneepads_details_container">
                    <p className='kneepads_detail'>SG Shield Cricket Batting Legguard (Batting Pad) YouthMaterial: PVC Facing | High Density Foam | Cotton Filled Rolls</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-10%</span>
                    <span className='price'> Rs.1349 </span>
                    <span className='ogprice'>M.R.P.: Rs.1499 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="kneepads">
                <div className='kneepads_img_container'>
                    <img src={kp7} alt="" />
                </div>
                <div className="kneepads_details_container">
                    <p className='kneepads_detail'>DSC Intense Attitude Leather Cricket Batting Legguard for Mens, Size - Mens, Right Hand</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-9%</span>
                    <span className='price'> Rs.1540 </span>
                    <span className='ogprice'>M.R.P.: Rs.1699 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="kneepads">
                <div className='kneepads_img_container'>
                    <img src={kp8} alt="" />
                </div>
                <div className="kneepads_details_container">
                    <p className='kneepads_detail'>Airic Pro Youth Cricket Batting Pads/ Leg Guards (Age 12 to 15yrs)and Advanced Features for Cricketers ( Full Size,)</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-47%</span>
                    <span className='price'> Rs.749 </span>
                    <span className='ogprice'>M.R.P.: Rs.1400 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="kneepads">
                <div className='kneepads_img_container'>
                    <img src={kp9} alt="" />
                </div>
                <div className="kneepads_details_container">
                    <p className='kneepads_detail'>RK KAIME SPORTS Cricket Batting Pad Leg Guard|Test|Pad for Men (27 inch)( Full Size,)</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-40%</span>
                    <span className='price'> Rs.1799 </span>
                    <span className='ogprice'>M.R.P.: Rs.2999 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="kneepads">
                <div className='kneepads_img_container'>
                    <img src={kp9} alt="" />
                </div>
                <div className="kneepads_details_container">
                    <p className='kneepads_detail'>WHITEDOT SPORTS Whitedot Dot 1.0 Cricket Batting Gloves, Mens, Rh (Leather, White)</p>
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
            <div className="kneepads">
                <div className='kneepads_img_container'>
                    <img src={kp10} alt="" />
                </div>
                <div className="kneepads_details_container">
                    <p className='kneepads_detail'>DSC Condor Atmos Cricket Batting Legguard | Color: White | Size: Mens, Right Hand | for Men & Boys </p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-6%</span>
                    <span className='price'> Rs.1504 </span>
                    <span className='ogprice'>M.R.P.: Rs.1599 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="kneepads">
                <div className='kneepads_img_container'>
                    <img src={kp11} alt="" />
                </div>
                <div className="kneepads_details_container">
                    <p className='kneepads_detail'>moonwalkr Leg Guard 2.0 Protective Gear for Batter’s Height (5’9” - 6’2”) Cricket Pads</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-4%</span>
                    <span className='price'> Rs.3850 </span>
                    <span className='ogprice'>M.R.P.: Rs.3999 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="kneepads">
                <div className='kneepads_img_container'>
                    <img src={kp12} alt="" />
                </div>
                <div className="kneepads_details_container">
                    <p className='kneepads_detail'>SG PVC Nexus Batting Leg Guard for Youth, Multicolour| Material: PVC Facing | High Density Foam | Cotton Filled Knee Rolls</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-44%</span>
                    <span className='price'> Rs.1504 </span>
                    <span className='ogprice'>M.R.P.: Rs.2299 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="kneepads">
                <div className='kneepads_img_container'>
                    <img src={kp13} alt="" />
                </div>
                <div className="kneepads_details_container">
                    <p className='kneepads_detail'>Whitedot Dot 2.1 Pu New Cricket Batting Pad (Youth / Medium, Black for Right Hand)</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-48%</span>
                    <span className='price'> Rs.2067 </span>
                    <span className='ogprice'>M.R.P.: Rs.3999 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="kneepads">
                <div className='kneepads_img_container'>
                    <img src={kp14} alt="" />
                </div>
                <div className="kneepads_details_container">
                    <p className='kneepads_detail'>RMAX EVA Cotton Cricket Batting Leg Guard Pad High-Impact Protection, Comfort</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-30%</span>
                    <span className='price'> Rs.1889 </span>
                    <span className='ogprice'>M.R.P.: Rs.2699 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="kneepads">
                <div className='kneepads_img_container'>
                    <img src={kp15} alt="" />
                </div>
                <div className="kneepads_details_container">
                    <p className='kneepads_detail'>SG Ecolite Batting Leg Guard| Material: PVC Facing | High Density Foam | Cotton Filled Knee Rolls</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-2%</span>
                    <span className='price'> Rs.2249 </span>
                    <span className='ogprice'>M.R.P.: Rs.2299 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
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

export default Kneepads