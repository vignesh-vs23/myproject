import React from 'react'
import bumrah from './Images/bumrah.png'
import pollard from './Images/pollard.png'
import head from './Images/head.png'
import ben from './Images/ben duckett.png'
import nzw from './Images/nz women.png'
import babar from './Images/babar.png'
import './Latestnews.css'
function Latestnews() {
  return (
    <div className='latestnews'>
        <h1>Latest News</h1>
        <div className='news_container'>
          <div className='news_container1'>
            <img src={bumrah} alt="" />
            <p>Jasprit Bumrah's bail-trimmer sent ShadmanIslam back in the first over</p>
            <span>4 hours ago Jack Sparrow</span>
          </div>
          <div className='news_container2'>
            <div className='news_imagecontainer'>
              <img src={pollard} alt="" />
              <p>Kieron Pollard has a word with umpires Christopher Taylor and Patrick Gustard after confusion regarding Imad Wasim's Potential dismissal </p>
              <span>4 hours ago Jack Sparrow</span>
            </div>
            <div className='news_imagecontainer'>
              <img src={head} alt="" />
              <p>Travis Head celebrate his century in Aus Vs Eng Odi match</p>
              <span>4 hours ago Jack Sparrow</span>
            </div>
            <div className='news_imagecontainer'>
              <img src={ben} alt="" />
              <p>Ben Duckett can't believe what he's done after falling for 95</p>
              <span>4 hours ago Jack Sparrow</span>
            </div>
            <div className='news_imagecontainer'>
              <img src={nzw} alt="" />
              <p>Amelia kerr and Suzie bates celebrates Alyssa Healy's Wicket</p>
              <span>4 hours ago Jack Sparrow</span>
            </div>
            <div className='news_imagecontainer'>
              <img src={babar} alt="" />
              <p>Babar Azam keep Stallions stady in the Middle overs</p>
              <span>4 hours ago Jack Sparrow</span>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Latestnews