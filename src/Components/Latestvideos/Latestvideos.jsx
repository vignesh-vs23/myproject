import React from 'react'
import './Latestvideos.css'
function Latestvideos() {
  return (
    <div>
        <h1> Latest videos</h1>
        <div className="videocontainer">
            <div className="latest-videos1">
                <div className='video'>
                    <iframe src="https://www.youtube.com/embed/Fil9jJI3wYs?si=nKVOl6SWL5aVlFpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className='video'>
                    <iframe src="https://www.youtube.com/embed/2TikWKtQ7no?si=FFUO6Tr9FAs5SGkr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className='video'>
                    <iframe src="https://www.youtube.com/embed/RJcAz3rU2Zc?si=tui8azU9GrUDBBeo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Latestvideos