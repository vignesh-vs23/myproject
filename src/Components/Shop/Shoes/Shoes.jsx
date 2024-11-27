import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import './shoes.css'
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
import shoe1 from './Images/dsc1-removebg-preview.png'
import shoe2 from './Images/dsc2-removebg-preview.png'
import shoe3 from './Images/vector1-removebg-preview.png'
import shoe4 from './Images/dsc3-removebg-preview.png'
import shoe5 from './Images/sg1-removebg-preview.png'
import shoe6 from './Images/sg2-removebg-preview.png'
import shoe7 from './Images/boldfit1-removebg-preview.png'
import shoe8 from './Images/nivia1-removebg-preview.png'
import shoe9 from './Images/hundred-removebg-preview.png'
import shoe10 from './Images/sg3-removebg-preview.png'
import shoe11 from './Images/adidas-removebg-preview.png'
import shoe12 from './Images/ase1-removebg-preview.png'
import shoe13 from './Images/vector2-removebg-preview.png'
import shoe14 from './Images/avant1-removebg-preview.png'
import shoe15 from './Images/puma1-removebg-preview.png'
import shoe16 from './Images/feroc1-removebg-preview.png'
import shoe17 from './Images/sg4-removebg-preview.png'
import shoe18 from './Images/ase2-removebg-preview.png'
import shoe19 from './Images/vector3-removebg-preview.png'
import shoe20 from './Images/nivia2-removebg-preview.png'
import shoe21 from './Images/pro1-removebg-preview.png'
import shoe22 from './Images/bas1-removebg-preview.png'
import shoe23 from './Images/ase3-removebg-preview.png'
function Shoes() {
  return (
    <>
        <Header/>
        <section className='Shoes'>
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
            <div className="shoes_container">
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe1} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>DSC Jaffa 22 Cricket Shoes for Mens Cricket Practice/Professional, Water-Resistant Footwear for Outdoor and Field Sports</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-18%</span>
                            <span className='price'> Rs.1722 </span>
                            <span className='ogprice'>M.R.P.: Rs.2099 </span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe2} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>DSC Zooter Cricket Shoes | for Boys and Men | Polyvinyl Chloride | All-Round Performance Footwear</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-10%</span>
                            <span className='price'> Rs.879 </span>
                            <span className='ogprice'>M.R.P.: Rs.999 </span>
                            <span className='deliverydate'>Get it by Monday, November 24</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe3} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>Vector X Swing 2.0 Cricket Shoes for Men and Lightweight Upper with TPU Fusing Water-Resistant | </p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-44%</span>
                            <span className='price'> Rs.1930 </span>
                            <span className='ogprice'>M.R.P.: Rs.3450 </span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe4} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>DSC Beamer Cricket Shoes for Mens (Light Weight | Economical | Durable) Footwear for Outdoor and Field Sports</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-16%</span>
                            <span className='price'> Rs.749 </span>
                            <span className='ogprice'>M.R.P.: Rs.890 </span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe5} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>SG Fusion Cricket Shoe (Color: Grey & White)|for Mens| Material: Mesh & PVC Footwear for Outdoor and Field Sports</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-18%</span>
                            <span className='price'> Rs.1099 </span>
                            <span className='ogprice'>M.R.P.: Rs.1299 </span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe6} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>SG Savage Stud Cricket shoes, Designed to Elevate Your Game to New Power &Comfort Water-Resistant |</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-12%</span>
                            <span className='price'> Rs.854 </span>
                            <span className='ogprice'>M.R.P.: Rs.999 </span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe7} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>Boldfit Cricket Shoes for Men & Boys Sports Shoes for Man Lightweight Cricket Shoes  | All-Round Performance Footwear</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-43%</span>
                            <span className='price'> Rs.1699 </span>
                            <span className='ogprice'>M.R.P.: Rs.2999 </span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe8} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>Nivia Cricket Shoes| Mesh & TPU Upper| Cushioned EVA Insole | PVC Outsole | Footwear for Outdoor and Field Sports</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-28%</span>
                            <span className='price'> Rs.791 </span>
                            <span className='ogprice'>M.R.P.: Rs.1099 </span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe9} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>HUNDRED Pitch Force Cricket Shoes | Terraspike Studs | Lightweight & Durable |Water-Resistant |</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-20%</span>
                            <span className='price'> Rs.890 </span>
                            <span className='ogprice'>M.R.P.: Rs.1170 </span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe10} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>SG Fusion Cricket Shoe | for Mens & Boys |Mesh & PVC | Enhanced Performance | Water-Resistant |</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-18%</span>
                            <span className='price'> Rs.1044 </span>
                            <span className='ogprice'>M.R.P.: Rs.1295 </span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe11} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>adidas Mens CRI Rise V2 M Cricket Shoe Cricket Practice/Professional All-Round Performance Footwear </p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-38%</span>
                            <span className='price'> Rs.2851 </span>
                            <span className='ogprice'>M.R.P.: Rs.4599 </span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe12} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>ASE Men's Professional Cricket Shoes 5 UK/IND Water-Resistant | Footwear for Outdoor and Field Sports</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-66%</span>
                            <span className='price'> Rs.769 </span>
                            <span className='ogprice'>M.R.P.: Rs.2250 </span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe13} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>Vector X Men's Blast Cricket Shoes Breathable Mesh & good Comfort and Grip  Water-Resistant |</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-73%</span>
                            <span className='price'> Rs.681 </span>
                            <span className='ogprice'>M.R.P.: Rs.2549 </span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe14} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>AVANT Men's Impact Cricket Shoes - Anti Skid Shoes with Rubber Outsole Footwear for Outdoor and Field Sports</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-22%</span>
                            <span className='price'> Rs.1749 </span>
                            <span className='ogprice'>M.R.P.: Rs.2249 </span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe15} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>Puma Unisex Cricket Alrounder Cricket Shoe Water-Resistant | All-Round Performance Footwear for Outdoor </p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-50%</span>
                            <span className='price'> Rs.2749 </span>
                            <span className='ogprice'>M.R.P.: Rs.5499 </span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe16} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>FEROC Active Cricket Shoes for Men Boys Unisex Kids Footwear for Outdoor and Field Sports</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-47%</span>
                            <span className='price'> Rs.799 </span>
                            <span className='ogprice'>M.R.P.: Rs.1499 </span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe17} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>SG Century 6.0 Cricket shoes, Designed to Elevate Your Game to New Heights Power Water-Resistant | All-Round Performance </p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-10%</span>
                            <span className='price'> Rs.1799 </span>
                            <span className='ogprice'>M.R.P.: Rs.1999 </span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe18} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>ASE Men's Professional Cricket Shoes Cricket Practice/Professional Footwear for Outdoor and Field Sports</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-73%</span>
                            <span className='price'> Rs.643 </span>
                            <span className='ogprice'>M.R.P.: Rs.2099 </span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe19} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>Vector X Men's Blast Cricket Shoes Breathable Mesh for Exceptional Comfort Water-Resistant | </p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-74%</span>
                            <span className='price'> Rs.659 </span>
                            <span className='ogprice'>M.R.P.: Rs.2549 </span>
                            <span className='deliverydate'>Get it by Monday, November 25</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe20} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>Nivia Crick-1000 2.0 Cricket Shoes for Men |Superior Grip, Peak Performance |Water-Resistant | All-Round Performance</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-7%</span>
                            <span className='price'> Rs.1974 </span>
                            <span className='ogprice'>M.R.P.: Rs.2949</span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe21} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>PRO KVH Lightweight Cricket Shoes for Men | Water-Resistant | All-Round Performance Footwear for Outdoor Sports</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-71%</span>
                            <span className='price'> Rs.1017 </span>
                            <span className='ogprice'>M.R.P.: Rs.3499 </span>
                            <span className='deliverydate'>Get it by Sunday, December 1</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe22} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>BAS Vampire Cricket Shoes Water-Resistant | All-Round Performance Footwear for Outdoor and Field Sports</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-11%</span>
                            <span className='price'> Rs.1549 </span>
                            <span className='ogprice'>M.R.P.: Rs.1749 </span>
                            <span className='deliverydate'>Get it by Friday, November 29</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="shoe">
                        <div className='shoeimg_container'>
                            <img src={shoe23} alt="" />
                        </div>
                        <div className="shoe_details_container">
                            <p className='shoe_detail'>ASE Men's Professional Cricket Shoes Water-Resistant | All-Round Performance Footwear for Outdoor and Field Sports</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-10%</span>
                            <span className='price'> Rs.849 </span>
                            <span className='ogprice'>M.R.P.: Rs.949 </span>
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

export default Shoes