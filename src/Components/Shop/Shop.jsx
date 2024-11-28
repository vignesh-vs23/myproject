import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Shop.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import baticon from './icons/cricket-bat.png'
import ballicon from './icons/cricket-ball.png'
import helmeticon from './icons/cricket-helmet.png'
import batglovesicon from './icons/batsman-glove.png'
import keeperglovesicon from './icons/keeper-glove.png'
import shoesicon from './icons/shoes.png'
import kneepadsicon from './icons/kneepads.png'
import kitbagicon from './icons/kitbag.png'
import fullstar from './icons/star.png'
import halfstar from './icons/halfstar.png'
import emptystar from './icons/emptystar.png'
import bat1 from '../Shop/Bat/Images/ss1.png'
import ball1 from '../Shop/Ball/Images/boxco1-removebg-preview.png'
import bg1 from '../Shop/Batsman_Gloves/Images/white1-removebg-preview.png'
import helmet1 from '../Shop/Helmet/Images/dsc1-removebg-preview.png'
import shoe1 from '../Shop/Shoes/Images/dsc1-removebg-preview.png'
import wkg1 from '../Shop/WicketKeeperGloves/Images/white1-removebg-preview.png'
import kp1 from '../Shop/Kneepads/Images/moon1-removebg-preview-removebg-preview.png'


const Shop =()=> {
  // const [shop,setShop]=useState('null');
  
  // const renderComponent=(product)=>{
  //   setShop(shop === product ? shop : product);
  //   console.log(shop)
  //   console.log(product)
  // };
  return (
    <>
    <Header/>
    <section className='shop'>
      <div className='shop_container'>
        <div className='shop_sidebar'>
          <div className='category_container'>
            <h2>Categories</h2>
            {/* <div className='category'>
                <img src={baticon} alt=""  className='icon'/>
                <label htmlFor="" onClick={()=>renderComponent('Bat')} className='category_link'><Link to="/Shop/Bat">Bat</Link></label>
            </div> */}
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
        <div className="shop_main">
            <input type="search" id="search" placeholder="Search for Products"/>
            <button type="submit">Search</button><br /><br />
            <div className='products_container'>
              <div className="product">
                        <div className='productimg_container'>
                            <img src={bat1} alt="" />
                        </div>
                        <div className="product_details_container">
                            <p className='product_detail'>SS TON Revolution Kashmir Willow Cricket Bat Rohit Sharma SPL Edition,for Leather Ball</p>
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
              <div className="product">
                        <div className='productimg_container'>
                            <img src={ball1} alt="" />
                        </div>
                        <div className="product_details_container">
                            <p className='product_detail'>BOXCO Hand Made Two Piece Cricket Leather Ball for Club(Pack of 6),Professional Cricket Ball</p>
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
              <div className="product">
                <div className='productimg_container'>
                    <img src={bg1} alt="" />
                </div>
                <div className="product_details_container">
                    <p className='product_detail'>WHITEDOT SPORTS Whitedot Dot 1.0 Cricket Batting Gloves, Mens, Rh (Leather, White)</p>
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
            <div className="product">
                <div className='productimg_container'>
                    <img src={helmet1} alt="" />
                </div>
                <div className="product_details_container">
                    <p className='product_detail'>DSC 1500212 Guard Cricket Helmet Small (Navy)| Adjustable Back Support Strap | Removable and Washable Sweatband |</p>
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
            <div className="product">
                        <div className='productimg_container'>
                            <img src={shoe1} alt="" />
                        </div>
                        <div className="product_details_container">
                            <p className='product_detail'>DSC Jaffa 22 Cricket Shoes for Mens Cricket Practice/Professional, Water-Resistant Footwear for Outdoor and Field Sports</p>
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
            <div className="product">
                <div className='productimg_container'>
                    <img src={wkg1} alt="" />
                </div>
                <div className="product_details_container">
                    <p className='product_detail'>WHITEDOT SPORTS Whitedot Dot 1.0 Cricket Batting Gloves, Mens, Rh (Leather, White)</p>
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
            <div className="product">
                <div className='productimg_container'>
                    <img src={kp1} alt="" />
                </div>
                <div className="product_details_container">
                    <p className='product_detail'>moonwalkr Cricket Leg Guard 2.0 Protective Gear for Batter’s Height (4’5” - 4’8”) Cricket Pads Batting Pads Leg Pads</p>
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
            <div className="product">
                        <div className='productimg_container'>
                            <img src={bat1} alt="" />
                        </div>
                        <div className="product_details_container">
                            <p className='product_detail'>SS TON Revolution Kashmir Willow Cricket Bat Rohit Sharma SPL Edition,for Leather Ball</p>
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
              <div className="product">
                        <div className='productimg_container'>
                            <img src={ball1} alt="" />
                        </div>
                        <div className="product_details_container">
                            <p className='product_detail'>BOXCO Hand Made Two Piece Cricket Leather Ball for Club(Pack of 6),Professional Cricket Ball</p>
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
              <div className="product">
                <div className='productimg_container'>
                    <img src={bg1} alt="" />
                </div>
                <div className="product_details_container">
                    <p className='product_detail'>WHITEDOT SPORTS Whitedot Dot 1.0 Cricket Batting Gloves, Mens, Rh (Leather, White)</p>
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
            <div className="product">
                <div className='productimg_container'>
                    <img src={helmet1} alt="" />
                </div>
                <div className="product_details_container">
                    <p className='product_detail'>DSC 1500212 Guard Cricket Helmet Small (Navy)| Adjustable Back Support Strap | Removable and Washable Sweatband |</p>
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
            <div className="product">
                        <div className='productimg_container'>
                            <img src={shoe1} alt="" />
                        </div>
                        <div className="product_details_container">
                            <p className='product_detail'>DSC Jaffa 22 Cricket Shoes for Mens Cricket Practice/Professional, Water-Resistant Footwear for Outdoor and Field Sports</p>
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
            <div className="product">
                <div className='productimg_container'>
                    <img src={wkg1} alt="" />
                </div>
                <div className="product_details_container">
                    <p className='product_detail'>WHITEDOT SPORTS Whitedot Dot 1.0 Cricket Batting Gloves, Mens, Rh (Leather, White)</p>
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
            <div className="product">
                <div className='productimg_container'>
                    <img src={kp1} alt="" />
                </div>
                <div className="product_details_container">
                    <p className='product_detail'>moonwalkr Cricket Leg Guard 2.0 Protective Gear for Batter’s Height (4’5” - 4’8”) Cricket Pads Batting Pads Leg Pads</p>
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
            </div>
            {/* {
              shop === 'Bat' && (
                <Bat/>
              )
            }
            {
              shop === 'Ball' && (
                <Ball/>
              )
            }
            {
              shop === 'shoes' && (
                <Shoes/>
              )
            }
            {
              shop === 'helmet' && (
                <Helmet/>  
              )
            } */}
            {/* {
              shop === 'batting_gloves' && (
                
              )
            } */}
            {/* {
              shop === 'keeper_gloves' && (
                
              )
            } */}
            {/* {
              shop === 'kneepads' && (
                
              )
            } */}
            {/* {
              shop === 'kitbag' && (
                
              ) 
            } */}
        </div>
      </div>
    </section>
      <Footer/>
      </>
  );
}
export default Shop;