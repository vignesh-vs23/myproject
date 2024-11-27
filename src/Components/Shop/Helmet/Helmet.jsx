import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import './Helmet.css'
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
import helmet1 from './Images/dsc1-removebg-preview.png'
import helmet2 from './Images/dsc2-removebg-preview.png'
import helmet3 from './Images/dsc3-removebg-preview.png'
import helmet4 from './Images/dsc4-removebg-preview.png'
import helmet5 from './Images/sg1-removebg-preview.png'
import helmet6 from './Images/sg2-removebg-preview.png'
import helmet7 from './Images/shrey1-removebg-preview.png'
import helmet8 from './Images/ss1-removebg-preview.png'
import helmet9 from './Images/sg3-removebg-preview.png'
import helmet10 from './Images/ultimate1-removebg-preview.png'
import helmet11 from './Images/shrey2-removebg-preview.png'
import helmet12 from './Images/shrey3-removebg-preview.png'
import helmet13 from './Images/dsc5-removebg-preview.png'
import helmet14 from './Images/sg4-removebg-preview.png'
import helmet15 from './Images/pro1-removebg-preview.png'
import helmet16 from './Images/moon1-removebg-preview.png'
import helmet17 from './Images/grs1-removebg-preview.png'
import helmet18 from './Images/shrey4-removebg-preview.png'
import helmet19 from './Images/ss1-removebg-preview.png'
import helmet20 from './Images/staurs1-removebg-preview.png'
import helmet21 from './Images/kookabuar1-removebg-preview.png'
import helmet22 from './Images/sg5-removebg-preview.png'
import helmet23 from './Images/pro2-removebg-preview.png'
function Helmet() {
  return (
    <>
    <Header/>
    <section className='Helmet'>
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
        <div className="helmet_container">
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet1} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>DSC 1500212 Guard Cricket Helmet Small (Navy)| Adjustable Back Support Strap | Removable and Washable Sweatband |</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-16%</span>
                    <span className='price'> Rs.1229 </span>
                    <span className='ogprice'>M.R.P.: Rs.1449 </span>
                    <span className='deliverydate'>Get it by Thursday, November 21</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet2} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>DSC Edge PRO Cricket Helmet for Mens (Adjustable Steel Grill | Head Fit Adjuster), Color: Navy, Large</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-1%</span>
                    <span className='price'> Rs.1899 </span>
                    <span className='ogprice'>M.R.P.: Rs.2199 </span>
                    <span className='deliverydate'>Get it by Friday, November 29</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet3} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>DSC Bouncer Cricket Helmet | Navy Blue | Size: Medium | for Men & Boys | Steel Grill | Adjustable Back Support Strap |</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-17%</span>
                    <span className='price'> Rs.1429 </span>
                    <span className='ogprice'>M.R.P.: Rs.1649 </span>
                    <span className='deliverydate'>Get it by Wednesday, November 27</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet4} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>DSC 1500213 Guard Cricket Helmet Medium (Navy)| Adjustable Back Support Strap | Removable and Washable Sweatband |</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-16%</span>
                    <span className='price'> Rs.1299 </span>
                    <span className='ogprice'>M.R.P.: Rs.1499 </span>
                    <span className='deliverydate'>Get it by Tuesday, November 26</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet5} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>Cricket Helmet SG Acetech (Yellow, Medium)| Adjustable Back Support Strap | Removable and Washable Sweatband |</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-10%</span>
                    <span className='price'> Rs.2239 </span>
                    <span className='ogprice'>M.R.P.: Rs.2499 </span>
                    <span className='deliverydate'>Get it by Friday, November 29</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet6} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>SG Smart Cricket Helmet| Adjustable Back Support Strap | Removable and Washable Sweatband |</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-13%</span>
                    <span className='price'> Rs.1250 </span>
                    <span className='ogprice'>M.R.P.: Rs.1499 </span>
                    <span className='deliverydate'>Get it by Sunday, December 1</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet7} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>Shrey Classic - Steel Green X Large Cricket Helmet| Adjustable Back Support Strap | Removable and Washable Sweatband |</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-10%</span>
                    <span className='price'> Rs.3149 </span>
                    <span className='ogprice'>M.R.P.: Rs.3499 </span>
                    <span className='deliverydate'>Get it by Saturday, November 30</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet8} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>SS Gutsy Cricket Helmet | Navy Blue | Size: Medium | For Men & Boys | Mild Steel Grill | Eva Padding</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-10%</span>
                    <span className='price'> Rs.1180 </span>
                    <span className='ogprice'>M.R.P.: Rs.1339 </span>
                    <span className='deliverydate'>Get it by Wednesday, November 27</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet9} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>SG Blaze Tech Cricket Helmet | Adjustable Steel Visor| Comfortable Fit | Light Weight | Polypropylene Material |</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-12%</span>
                    <span className='price'> Rs.1032 </span>
                    <span className='ogprice'>M.R.P.: Rs.1499 </span>
                    <span className='deliverydate'>Get it by Monday, November 25</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet10} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>Ultimate Goal Sports Steel Cricket Helmet | Adjustable Steel Visor | Better Protection and Cushioning | Comfortable Fit |</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-40%</span>
                    <span className='price'> Rs.779 </span>
                    <span className='ogprice'>M.R.P.: Rs.1299 </span>
                    <span className='deliverydate'>Get it by Thursday, November 21</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet11} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>Shrey Classic - Steel Navy Medium Cricket Helmet | Adjustable Steel Visor | Better Protection and Cushioning </p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-11%</span>
                    <span className='price'> Rs.3125 </span>
                    <span className='ogprice'>M.R.P.: Rs.3499 </span>
                    <span className='deliverydate'>Get it by Tuesday, November 26</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet12} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>Shrey Star Steel Cricket Helmet with 4 Round Velcro set | Adjustable Steel Visor | Better Protection and Cushioning |</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-15%</span>
                    <span className='price'> Rs.1214 </span>
                    <span className='ogprice'>M.R.P.: Rs.1419 </span>
                    <span className='deliverydate'>Get it by Friday, November 29</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet13} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>DSC Punch Cricket Helmet for Mens, Colour - Black, Size - Medium | Adjustable Steel Visor | Better Protection and Cushioning | Comfortable Fit |</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-2%</span>
                    <span className='price'> Rs.2145 </span>
                    <span className='ogprice'>M.R.P.: Rs.2199 </span>
                    <span className='deliverydate'>Get it by Sunday, December 1</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet14} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>SG OPTIPRO Cricket Helmet | Navy Blue | Size: Medium | for Men & Boys | Adjustable Steel Grill | Breathable Inner Padding |</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-16%</span>
                    <span className='price'> Rs.1449 </span>
                    <span className='ogprice'>M.R.P.: Rs.1699 </span>
                    <span className='deliverydate'>Get it by Thursday, November 21</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet15} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>Prokick Guardian Cricket Helmet with Steel Grill | Ultra-Protection Padding: Shock Proof, Lightweight | Comfortable Fit </p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-25%</span>
                    <span className='price'> Rs.1275 </span>
                    <span className='ogprice'>M.R.P.: Rs.1699 </span>
                    <span className='deliverydate'>Get it by Thursday, November 21</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet16} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>moonwalkr Mind 2.0 Cricket Helmet Head Guard for (62-65)CM Head Size Protective Gear Kids Helmet with 30 air vents </p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-1%</span>
                    <span className='price'> Rs.6939 </span>
                    <span className='ogprice'>M.R.P.: Rs.6999 </span>
                    <span className='deliverydate'>Get it by Thursday, November 21</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet17} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>GRS Cricket Helmet for Men, Boys, Girls,Unisex (Adjustable Steel Grill | Color: Navy Blue | Light Weight (Youth)</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-50%</span>
                    <span className='price'> Rs.399 </span>
                    <span className='ogprice'>M.R.P.: Rs.799 </span>
                    <span className='deliverydate'>Get it by Thursday, November 21</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet18} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>Shrey Prime Steel Cricket Helmet with Mild Steel Visor|Rotary Adjustment System|EVA Foam Padding| Better Visibility|</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-14%</span>
                    <span className='price'> Rs.1986 </span>
                    <span className='ogprice'>M.R.P.: Rs.2299 </span>
                    <span className='deliverydate'>Get it by Saturday, November 30</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet19} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>SS Elite Cricket Helmet | Navy Blue | Size: Medium | For Men & Boys | Mild Steel Grill | Eva Padding</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-9%</span>
                    <span className='price'> Rs.1409 </span>
                    <span className='ogprice'>M.R.P.: Rs.1550 </span>
                    <span className='deliverydate'>Get it by Friday, November 29</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet20} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>Strauss Cricket Helmet | Steel Grill | Edition: Club | Size: Large | Age: 15+yrs | Color: Blue | for Men, Women | Lightweight |</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-47%</span>
                    <span className='price'> Rs.899 </span>
                    <span className='ogprice'>M.R.P.: Rs.1699 </span>
                    <span className='deliverydate'>Get it by Wednesday, November 27</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet21} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>Kookaburra Adult Cricket Helmet KB Pro 250 S | Ultra-Protection Padding: Shock Proof, Lightweight | Comfortable Fit</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-40%</span>
                    <span className='price'> Rs.2349 </span>
                    <span className='ogprice'>M.R.P.: Rs.4449 </span>
                    <span className='deliverydate'>Get it by Thursday, November 21</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet22} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>SG Cricket Helmet SG Savage TECH (M) Polypropylene Cricket Helmet, M (Dark Blue)</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-29%</span>
                    <span className='price'> Rs.1275 </span>
                    <span className='ogprice'>M.R.P.: Rs.1799 </span>
                    <span className='deliverydate'>Get it by Thursday, November 28</span>
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="helmet">
                <div className='helmetimg_container'>
                    <img src={helmet23} alt="" />
                </div>
                <div className="helmet_details_container">
                    <p className='helmet_detail'>Prokick Guardian Cricket Helmet with Steel Grill | Ultra-Protection Padding: Shock Proof, Lightweight | Comfortable Fit</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>
                    <span className='offer'>-25%</span>
                    <span className='price'> Rs.1275 </span>
                    <span className='ogprice'>M.R.P.: Rs.1699 </span>
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

export default Helmet