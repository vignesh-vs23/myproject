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
                <div className='price'>
                    <h2>Price</h2>
                    <label htmlFor="">$0-$500</label>
                    <input type="range"/>
                </div>
            </div>
        </div>

    </section>
    <Footer/>
    </>
  )
}

export default Kneepads