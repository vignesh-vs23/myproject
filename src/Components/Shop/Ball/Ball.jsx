import React from 'react'
import { Link } from 'react-router-dom'
import './ball.css'
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
import ball1 from './Images/boxco1-removebg-preview.png'
import ball2 from './Images/redcherry1-removebg-preview.png'
import ball3 from './Images/aarav1-removebg-preview.png'
import ball4 from './Images/reindeer1-removebg-preview.png'
import ball5 from './Images/neptune1-removebg-preview.png'
import ball6 from './Images/prokick1-removebg-preview.png'
import ball7 from './Images/kabrd1-removebg-preview.png'
import ball8 from './Images/sg1-removebg-preview.png'
import ball9 from './Images/prokick2-removebg-preview.png'
import ball10 from './Images/apg1-removebg-preview.png'
import ball11 from './Images/neptune2-removebg-preview.png'
import ball12 from './Images/sg2-removebg-preview.png'
import ball13 from './Images/heega-removebg-preview.png'
import ball14 from './Images/pse1-removebg-preview.png'
import ball15 from './Images/t20-removebg-preview.png'
import ball16 from './Images/sg3-removebg-preview.png'
import ball17 from './Images/sgpink-removebg-preview.png'
import ball18 from './Images/sg4-removebg-preview.png'
import ball19 from './Images/sl1-removebg-preview.png'
import ball20 from './Images/reindeer2-removebg-preview.png'
import ball21 from './Images/aarav2-removebg-preview.png'

function Ball() {
  return (
    <>
    <Header/>
    <section className='Ball'>
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
        <div className='ball_container'>
                <div className="ball">
                        <div className='ballimg_container'>
                            <img src={ball1} alt="" />
                        </div>
                        <div className="ball_details_container">
                            <p className='ball_detail'>BOXCO Hand Made Two Piece Cricket Leather Ball for Club(Pack of 6)</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-36%</span>
                            <span className='price'> Rs.2399 </span>
                            <span className='ogprice'>M.R.P.: Rs.3743 </span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="ball">
                        <div className='ballimg_container'>
                            <img src={ball2} alt="" />
                        </div>
                        <div className="ball_details_container">
                            <p className='ball_detail'>Red Cherry Leather Cricket Ball for Club, T20, One Day, Practice Matches (Pack of 6)</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-42%</span>
                            <span className='price'> Rs.3499 </span>
                            <span className='ogprice'>M.R.P.: Rs.5994 </span>
                            <span className='deliverydate'>Get it by Thursday, November 21</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="ball">
                        <div className='ballimg_container'>
                            <img src={ball3} alt="" />
                        </div>
                        <div className="ball_details_container">
                            <p className='ball_detail'>Aarav Leather Ball 4 Piece White Cricket Ball for 50 Overs, Pack of 1,Hand Stitched Ball</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-50%</span>
                            <span className='price'> Rs.499 </span>
                            <span className='ogprice'>M.R.P.: Rs.999 </span>
                            <span className='deliverydate'>Get it by Saturday, November 23</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="ball">
                        <div className='ballimg_container'>
                            <img src={ball4} alt="" />
                        </div>
                        <div className="ball_details_container">
                            <p className='ball_detail'>REINDEER White Leather Heavy-Ball for| Pack of 12 (150Gm-170Gm Each)</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-6%</span>
                            <span className='price'> Rs.5640 </span>
                            <span className='ogprice'>M.R.P.: Rs.5999 </span>
                            <span className='deliverydate'>Get it by Monday, November 25</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="ball">
                        <div className='ballimg_container'>
                            <img src={ball5} alt="" />
                        </div>
                        <div className="ball_details_container">
                            <p className='ball_detail'>NE NEPTUNE Red Leather Club Cricket Ball (2 Piece) for Practice Session/Match</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-47%</span>
                            <span className='price'> Rs.212 </span>
                            <span className='ogprice'>M.R.P.: Rs.399 </span>
                            <span className='deliverydate'>Get it by Tuesday, November 26</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="ball">
                        <div className='ballimg_container'>
                            <img src={ball6} alt="" />
                        </div>
                        <div className="ball_details_container">
                            <p className='ball_detail'>Prokick Club Four Piece Leather Cricket Ball, White - 1 Piece Ball (30 Overs)</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-37%</span>
                            <span className='price'> Rs.459 </span>
                            <span className='ogprice'>M.R.P.: Rs.729 </span>
                            <span className='deliverydate'>Get it by Sunday, November 24</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="ball">
                        <div className='ballimg_container'>
                            <img src={ball7} alt="" />
                        </div>
                        <div className="ball_details_container">
                            <p className='ball_detail'>KARBD Cricket Ball Leather 4 Piece Professional Hand Stitching Waterproof Ball </p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-45%</span>
                            <span className='price'> Rs.899 </span>
                            <span className='ogprice'>M.R.P.: Rs.1648 </span>
                            <span className='deliverydate'>Get it by Monday, November 25</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="ball">
                        <div className='ballimg_container'>
                            <img src={ball8} alt="" />
                        </div>
                        <div className="ball_details_container">
                            <p className='ball_detail'>SG Shield 20 Two-Piece Water Proof Cricket Leather Ball, Regular Size (Red)</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-8%</span>
                            <span className='price'> Rs.485 </span>
                            <span className='ogprice'>M.R.P.: Rs.529 </span>
                            <span className='deliverydate'>Get it by Wednesday, November 27</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="ball">
                        <div className='ballimg_container'>
                            <img src={ball9} alt="" />
                        </div>
                        <div className="ball_details_container">
                            <p className='ball_detail'>Prokick Club Four Piece Leather Cricket Ball, Red - 1 Piece Ball (30 Overs)</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={emptystar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-35%</span>
                            <span className='price'> Rs.455 </span>
                            <span className='ogprice'>M.R.P.: Rs.699 </span>
                            <span className='deliverydate'>Get it by Saturday, November 23</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="ball">
                        <div className='ballimg_container'>
                            <img src={ball10} alt="" />
                        </div>
                        <div className="ball_details_container">
                            <p className='ball_detail'>APG Cricket Skill Coaching Red Leather Cricket Ball - Seam Training (Pack of 1), Men</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={emptystar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-60%</span>
                            <span className='price'> Rs.399 </span>
                            <span className='ogprice'>M.R.P.: Rs.999 </span>
                            <span className='deliverydate'>Get it by Sunday, November 24</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="ball">
                        <div className='ballimg_container'>
                            <img src={ball11} alt="" />
                        </div>
                        <div className="ball_details_container">
                            <p className='ball_detail'>NE NEPTUNE Cricket Leather Ball RED Standard Size Pack of 12</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-60%</span>
                            <span className='price'> Rs.1920 </span>
                            <span className='ogprice'>M.R.P.: Rs.4800 </span>
                            <span className='deliverydate'>Get it by Tuesday, November 26</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="ball">
                        <div className='ballimg_container'>
                            <img src={ball12} alt="" />
                        </div>
                        <div className="ball_details_container">
                            <p className='ball_detail'>SG Bouncer Leather Ball (Red) , Standard Size 1pc</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-16%</span>
                            <span className='price'> Rs.585 </span>
                            <span className='ogprice'>M.R.P.: Rs.699 </span>
                            <span className='deliverydate'>Get it by Wednesday, November 27</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="ball">
                        <div className='ballimg_container'>
                            <img src={ball13} alt="" />
                        </div>
                        <div className="ball_details_container">
                            <p className='ball_detail'> Heega Super Club Natural Red Cricket Leather Ball (Pack of 1)</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-15%</span>
                            <span className='price'> Rs.399 </span>
                            <span className='ogprice'>M.R.P.: Rs.470 </span>
                            <span className='deliverydate'>Get it by Friday, November 22</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="ball">
                        <div className='ballimg_container'>
                            <img src={ball14} alt="" />
                        </div>
                        <div className="ball_details_container">
                            <p className='ball_detail'>PSE Sports Leather Combo(D) Cricket Ball (Red,White)</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-36%</span>
                            <span className='price'> Rs.449 </span>
                            <span className='ogprice'>M.R.P.:Rs.699</span>
                            <span className='deliverydate'>Get it by Saturday, November 23</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="ball">
                        <div className='ballimg_container'>
                            <img src={ball15} alt="" />
                        </div>
                        <div className="ball_details_container">
                            <p className='ball_detail'>T-20 Cricket Leather Ball - Pack of 1 (White)</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-63%</span>
                            <span className='price'> Rs.185 </span>
                            <span className='ogprice'>M.R.P.:Rs.499</span>
                            <span className='deliverydate'>Get it by Thursday, November 28</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="ball">
                        <div className='ballimg_container'>
                            <img src={ball16} alt="" />
                        </div>
                        <div className="ball_details_container">
                            <p className='ball_detail'>SG Shield 30 Two-Piece Water Proof Cricket Leather Ball</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-10%</span>
                            <span className='price'> Rs.699 </span>
                            <span className='ogprice'>M.R.P.:Rs.774</span>
                            <span className='deliverydate'>Get it by Monday, November 25</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="ball">
                        <div className='ballimg_container'>
                            <img src={ball17} alt="" />
                        </div>
                        <div className="ball_details_container">
                            <p className='ball_detail'>SG Leather Cricket Ball, Size Club, (Pink), Standard</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-15%</span>
                            <span className='price'> Rs.1049 </span>
                            <span className='ogprice'>M.R.P.:Rs.1399</span>
                            <span className='deliverydate'>Get it by Thursday, November 28</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="ball">
                        <div className='ballimg_container'>
                            <img src={ball18} alt="" />
                        </div>
                        <div className="ball_details_container">
                            <p className='ball_detail'>SG Club Leather Ball, Four Pitch (White) Standard Size</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-12%</span>
                            <span className='price'> Rs.925 </span>
                            <span className='ogprice'>M.R.P.: Rs.1049 </span>
                            <span className='deliverydate'>Get it by Monday, November 25</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="ball">
                        <div className='ballimg_container'>
                            <img src={ball19} alt="" />
                        </div>
                        <div className="ball_details_container">
                            <p className='ball_detail'>SL(A Shri Laxmi Product) Club Pink 2 Part Leather Cricket Ball (Pack Of 1)</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                            </div>
                            <span className='offer'>-50%</span>
                            <span className='price'> Rs.249 </span>
                            <span className='ogprice'>M.R.P.: Rs.499 </span>
                            <span className='deliverydate'>Get it by Friday, November 29</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="ball">
                        <div className='ballimg_container'>
                            <img src={ball20} alt="" />
                        </div>
                        <div className="ball_details_container">
                            <p className='ball_detail'>REINDEER Flat Seam Training Cricket Red Leather Flat Ball (150Gm-170Gm Each)</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={halfstar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-34%</span>
                            <span className='price'> Rs.458 </span>
                            <span className='ogprice'>M.R.P.: Rs.699 </span>
                            <span className='deliverydate'>Get it by Monday, November 25</span>
                            <span className='freedelivery'>FREE Delivery</span>
                            <button type='submit' className='addtocart_btn'>Add to Cart</button>
                        </div>
                </div>
                <div className="ball">
                        <div className='ballimg_container'>
                            <img src={ball21} alt="" />
                        </div>
                        <div className="ball_details_container">
                            <p className='ball_detail'>Aarav Leather Ball 4 Piece White Cricket Ball for 50 Overs, Pack of 1,Hand Stitched Ball</p>
                            <div className="ratings">
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={fullstar} alt="" />
                                <img src={emptystar} alt="" />
                                <img src={emptystar} alt="" />
                            </div>
                            <span className='offer'>-50%</span>
                            <span className='price'> Rs.499 </span>
                            <span className='ogprice'>M.R.P.: Rs.999 </span>
                            <span className='deliverydate'>Get it by Friday, November 22</span>
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

export default Ball