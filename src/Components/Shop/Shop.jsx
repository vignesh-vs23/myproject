import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Shop.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Bat from './Bat/Bat'
import Ball from './Ball/Ball'
import Shoes from './Shoes/Shoes'
import Helmet from './Helmet/Helmet'
import bat1 from './Bat/Images/ss1.png'

import bg1 from './Images/batting gloves/480-4808897_cricket-batting-gloves-png-high-quality-image-kookaburra.png'
import bg2 from './Images/batting gloves/788-7886661_black-cricket-batting-gloves-hd-png-download.jpg'
import bg3 from './Images/batting gloves/788-7886740_sg-excelite-batting-gloves-left-hand-cricket-gloves.jpg'
import bg4 from './Images/batting gloves/dsc-condor-flite-cricket-batting-gloves-black-orange-black-cricket-batting-gloves-clothing-apparel-people-person-transparent-png-794201.png'
import bg5 from './Images/batting gloves/gunn-moore-batting-glove-cricket-bats-cricket.jpg'
import bg6 from './Images/batting gloves/image_720x_520eaad2-fd9d-4126-be01-01a397e8ea94.jpg'
import bg7 from './Images/batting gloves/images.jpg'
import bg8 from './Images/batting gloves/png-transparent-batting-glove-cricket-bats-kookaburra-sport-cricket-sport-orange-sports-equipment.png'
import bg9 from './Images/batting gloves/ss_super_test_white_gold_cricket_batting_gloves_mens_size_ethlits.com_1_.jpg'
import bg10 from './Images/batting gloves/triumph-cricket-batting-gloves-sf-triumph-batting-glove-115634031342y21kqpvr9.png'
import kg1 from './Images/keeper gloves/1671017644320.jpeg'
import kg2 from './Images/keeper gloves/2.png'
import kg3 from './Images/keeper gloves/41+m7s-GicL._AC_UF894,1000_QL80_.jpg'
import kg4 from './Images/keeper gloves/45.jpg'
import kg5 from './Images/keeper gloves/5.jpg'
import kg6 from './Images/keeper gloves/63523c2d03847065ed0b8fae-gm-wicket-keeping-gloves-gunn-and.jpg'
import kg7 from './Images/keeper gloves/71NIHLqwWUL._AC_UF894,1000_QL80_.jpg'
import kg8 from './Images/keeper gloves/AnyConv.com__8666294.jpg'
import kg9 from './Images/keeper gloves/png-clipart-lacrosse-glove-england-cricket-team-wicket-keeper-s-gloves-cricket-sport-sporting-goods.png'
import kg10 from './Images/keeper gloves/png-transparent-australia-national-cricket-team-lacrosse-glove-wicket-keeper-s-gloves-sheep-material-white-sports-equipment-shoe-thumbnail.png'
import kg11 from './Images/keeper gloves/png-transparent-bats-new-zealand-national-cricket-team-wicketkeepers-gloves-graynicolls-batting-glove-pads-cricket-clothing-and-equipment-cricket-bats.png'
import kg12 from './Images/keeper gloves/png-transparent-wicket-keeper-s-gloves-cricket-batting-glove-cricket-thumbnail.png'
import kb1 from './Images/kit bag/152631.png'
import kb2 from './Images/kit bag/218-2189611_sg-team-pak-cricket-kit-bag-with-wheels.png'
import kb3 from './Images/kit bag/218-2189788_stanford-glitz-player-edition-cricket-kit-bag-hd.png'
import kb4 from './Images/kit bag/524.png'
import kb5 from './Images/kit bag/539-5394866_cricket-kit-bag-transparent-images-duffel-bag-hd.png'
import kb6 from './Images/kit bag/547.png'
import kb7 from './Images/kit bag/58658.jpg'
import kb8 from './Images/kit bag/ExternalLink_71EEksC56DL._SX569_.jpg'
import kb9 from './Images/kit bag/comdlpng6948272.jpg'
import kb10 from './Images/kit bag/comdlpng6951414.jpg'
import kb11 from './Images/kit bag/cricket-bats-kookaburra-sport-bag-cricket-clothing-and-equipment-png-favpng-3Dfsc7JUJFdgGw6HEuuknaeM9.jpg'
import kb12 from './Images/kit bag/imgbin-gunn-moore-cricket-clothing-and-equipment-duffel-bags-cricket-R4fQWYXVbFtLSrNkGvRzifQHw.jpg'
import kp1 from './Images/kneepads/11.jpg'
import kp2 from './Images/kneepads/256-2569726_classic-range-2018-gray-nicolls-pro-performance-l.jpg'
import kp3 from './Images/kneepads/366-3662358_101-pad-and-glove-cricket-set-worlds-best.png'
import kp4 from './Images/kneepads/452.png'
import kp5 from './Images/kneepads/584-5849560_sg-hilite-batting-pads-hd-png-download.png'
import kp6 from './Images/kneepads/68.jpg'
import kp7 from './Images/kneepads/7.jpg'
import kp8 from './Images/kneepads/790-7902354_kookaburra-blaze-pro-700-batting-pads-cricket.jpg'
import kp9 from './Images/kneepads/8.jpg'
import kp10 from './Images/kneepads/836.jpg'
import kp11 from './Images/kneepads/right-left-batting-cricket-pads-for-boy-s-boys-7-12-year-batting-original-imagnx79hjrs5an5.webp'
import kp12 from './Images/kneepads/stanford-sf-platinum-cricket-batting-pads-500x500.webp'
import kp13 from './Images/kneepads/test-gold.jpg'
import baticon from './icons/cricket-bat.png'
import ballicon from './icons/cricket-ball.png'
import helmeticon from './icons/cricket-helmet.png'
import batglovesicon from './icons/batsman-glove.png'
import keeperglovesicon from './icons/keeper-glove.png'
import shoesicon from './icons/shoes.png'
import kneepadsicon from './icons/kneepads.png'
import kitbagicon from './icons/kitbag.png'
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
          <div className='price'>
            <h2>Price</h2>
            <label htmlFor="">$0-$500</label>
            <input type="range"/>
          </div>
        </div>
        <div className="shop_main">
            <input type="search" id="search" placeholder="Search for Products"/>
            <button type="submit">Search</button><br /><br />
            <div className='products'>
                <img src={bat1} alt=""/>
                <img src={bat1} alt=""/>
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