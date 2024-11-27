import React from 'react'
import { Link } from 'react-router-dom'
import './WicketKeeper_Gloves.css'
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
import wkg1 from './Images/white1-removebg-preview.png'
import wkg2 from './Images/white2-removebg-preview.png'
import wkg3 from './Images/white3-removebg-preview.png'
import wkg4 from './Images/sg1-removebg-preview.png'
import wkg5 from './Images/jetfire1-removebg-preview.png'
import wkg6 from './Images/sg2-removebg-preview.png'
import wkg7 from './Images/stc1-removebg-preview.png'
import wkg8 from './Images/jetfire2-removebg-preview.png'
import wkg9 from './Images/jetfire3-removebg-preview.png'
import wkg10 from './Images/rmax1-removebg-preview.png'
import wkg11 from './Images/sg3-removebg-preview.png'
import wkg12 from './Images/dsc1-removebg-preview.png'
import wkg13 from './Images/snaga-removebg-preview.png'
import wkg14 from './Images/gm1-removebg-preview.png'
import wkg15 from './Images/kookaburra1-removebg-preview.png'
import wkg16 from './Images/heega1-removebg-preview.png'
import wkg17 from './Images/sg4-removebg-preview.png'
import wkg18 from './Images/sg1-removebg-preview.png'
import wkg19 from './Images/dsc2-removebg-preview.png'
import wkg20 from './Images/dsc3-removebg-preview.png'
import wkg21 from './Images/sg6-removebg-preview.png'
import wkg22 from './Images/heega2-removebg-preview.png'
import wkg23 from './Images/gm2-removebg-preview.png'
import wkg24 from './Images/shabeena-removebg-preview.png'
function WicketKeeperGloves() {
  return (
    <>
    <Header/>
    <section className='WicketKeeper_Gloves'>
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
        <div className="wicketkeeper_gloves_container">
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg1} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>WHITEDOT SPORTS Whitedot Dot 1.0 Cricket Batting Gloves, Mens, Rh (Leather, White)</p>
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
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg2} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>Whitedot Albatross Wicket Keeping Gloves Regular Club Inner Gloves Suitable for Mens Large</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-47%</span>
                    <span className='price'> Rs.1597 </span>
                    <span className='ogprice'>M.R.P.: Rs.2999 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg3} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>Whitedot Summer Leather Cricket Wicket Keeping Gloves Suitable for Professional Players (Griffin, Youth)</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-47%</span>
                    <span className='price'> Rs.2631 </span>
                    <span className='ogprice'>M.R.P.: Rs.4999 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg4} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>SG RSD Xtreme Wicket Keeping Gloves, Adult (Colour May Vary), Polyvinyl Chloride & Rubber, Cricket</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-10%</span>
                    <span className='price'> Rs.1399 </span>
                    <span className='ogprice'>M.R.P.: Rs.1599 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg5} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>JetFire Ibex College Cricket Wicket Keeping Gloves Combo with Inner Cotton Gloves (Men, Green)</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-60%</span>
                    <span className='price'> Rs.799 </span>
                    <span className='ogprice'>M.R.P.: Rs.1999 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg6} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>SG Club Cricket Keeping Gloves Combo - Men's Club Wicket Keeping Gloves + Club Inner Cotton Gloves (White)</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-1%</span>
                    <span className='price'> Rs.1999 </span>
                    <span className='ogprice'>M.R.P.: Rs.2018 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg7} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>STC SPORTS Viper Wicket Keeping Gloves, Adult (Colour May Vary), Polyvinyl Chloride & Rubber, Cricket</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-50%</span>
                    <span className='price'> Rs.499 </span>
                    <span className='ogprice'>M.R.P.: Rs.999 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg8} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>JetFire Cricket Men's Ibex Regular Wicket Keeping Gloves Combo With Cotton Inner Gloves (Black), Standard</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-65%</span>
                    <span className='price'> Rs.699 </span>
                    <span className='ogprice'>M.R.P.: Rs.1999 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg9} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>JetFire Ibex Practice Wicket Keeping Gloves Wicket Keeping Gloves (Men, Blue)</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-73%</span>
                    <span className='price'> Rs.589 </span>
                    <span className='ogprice'>M.R.P.: Rs.2199 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg10} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>RMAX Rubber & PVC Cricket Wicket Keeping Gloves - Durable Construction, Superior Grip</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-46%</span>
                    <span className='price'> Rs.649 </span>
                    <span className='ogprice'>M.R.P.: Rs.1199 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg11} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>SG Club Wicket Keeping Gloves (Color May Vary),Superior Grip, High-Density Finger Protection,</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-9%</span>
                    <span className='price'> Rs.1632 </span>
                    <span className='ogprice'>M.R.P.: Rs.1799 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg12} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>DSC Intense Attitude Cricket Wicket Keeping Gloves,Ergonomic Design for Enhanced Flexibility and Comfort</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-9%</span>
                    <span className='price'> Rs.1304 </span>
                    <span className='ogprice'>M.R.P.: Rs.1471 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg13} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>Snaga Leather Cricket Wicket Keeping Gloves Suitable for Professional Players (Orange)</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-55%</span>
                    <span className='price'> Rs.849 </span>
                    <span className='ogprice'>M.R.P.: Rs.1899 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg14} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>GM Prima Leather Cricket Wicket Keeping Gloves for Mens, Size - Boys,Ergonomic Design</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-10%</span>
                    <span className='price'> Rs.2029 </span>
                    <span className='ogprice'>M.R.P.: Rs.2299 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg15} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>KOOKABURRA Pro 3.0 Wicket Keeping Gloves -Adult (Green/Gold), Enhanced Flexibility and Comfort, (Senior)</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-3%</span>
                    <span className='price'> Rs.2895 </span>
                    <span className='ogprice'>M.R.P.: Rs.2999 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg16} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>Heega Intense PU Leather Cricket Wicket Keeping Gloves (Men's), Enhanced Flexibility and Comfort</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-11%</span>
                    <span className='price'> Rs.1499 </span>
                    <span className='ogprice'>M.R.P.: Rs.1679 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg17} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>SG RSD Xtreme Wicket Keeping Gloves (Multi-Color) W.K. Gloves-YOUTH Enhanced Flexibility and Comfort,</p>                 
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-1%</span>
                    <span className='price'> Rs.1340 </span>
                    <span className='ogprice'>M.R.P.: Rs.1349 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg18} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>SG RSD Xtreme XS.Junior Cricket PVC Wicket Keeping Gloves, XS Junior (Multicolor)</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-6%</span>
                    <span className='price'> Rs.1269 </span>
                    <span className='ogprice'>M.R.P.: Rs.1349 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg19} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>DSC Intense Speed Leather Cricket Wicket Keeping Gloves for Mens, Size - Boys</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-7%</span>
                    <span className='price'> Rs.3949 </span>
                    <span className='ogprice'>M.R.P.: Rs.4249 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg20} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>DSC Condor Ruffle Leather Cricket Wicket Keeping Gloves for Mens, Size - Mens (White Black), Standard</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-5%</span>
                    <span className='price'> Rs.1590 </span>
                    <span className='ogprice'>M.R.P.: Rs.1679 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg21} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>SG Super Club Wicket Keeping Gloves (Multi-Color) W.K. Gloves -Mens, Enhanced Flexibility and Comfort</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-4%</span>
                    <span className='price'> Rs.2599 </span>
                    <span className='ogprice'>M.R.P.: Rs.2699 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg22} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>Heega Choice of Champion Heega Pride Men'S Synthetic Leather, Rubber College Cricket Wicket Keeping Gloves</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-13%</span>
                    <span className='price'> Rs.699 </span>
                    <span className='ogprice'>M.R.P.: Rs.799 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg23} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>GM 606 Leather Cricket Wicket Keeping Gloves for Mens, Size - Youth, Enhanced Flexibility and Comfort</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-12%</span>
                    <span className='price'> Rs.2495 </span>
                    <span className='ogprice'>M.R.P.: Rs.2829 </span>
                    <span className='deliverydate'>Get it by Thursday, December 5</span>                        
                    <span className='freedelivery'>FREE Delivery</span>
                    <button type='submit' className='addtocart_btn'>Add to Cart</button>
                </div>
            </div>
            <div className="wicketkeeper_gloves">
                <div className='wicketkeeper_gloves_img_container'>
                    <img src={wkg24} alt="" />
                </div>
                <div className="wicketkeeper_gloves_details_container">
                    <p className='wicketkeeper_gloves_detail'>Shabeena Rango Wicket Keeping Gloves Dot Net Leather, Enhanced Flexibility and Comfort, (Senior)</p>
                    <div className="ratings">
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={fullstar} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={emptystar} alt="" />
                    </div>                            
                    <span className='offer'>-34%</span>
                    <span className='price'> Rs.1650 </span>
                    <span className='ogprice'>M.R.P.: Rs.2500 </span>
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

export default WicketKeeperGloves