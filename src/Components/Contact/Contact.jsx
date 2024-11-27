import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {Link} from 'react-router-dom'
import './Contact.css'
function Contact() {
  return (
    <>
        <Header />
        <div className="contact-container">
            <div className='box1'>
                <h1>Keepin Touch With Phoenix Cricket Club</h1>
                <p>Feel free to connect with us for any of your needs regarding our services. Our support team is ready to solve any of your issues. Just push a text to us and we will get back to you immediately.</p>
                <h2>India</h2><br />
                <a href="Mailto:k.vignesh2304@gmail.com">k.vignesh2304@gmail.com</a><br /><br /><br />
                <a href="tel:+9514869586">+91 9514869586</a>
            </div>
            
            <div className="box2">
                <h1>Drop us a Message</h1>
                <input type="text" placeholder="Name*"required/>
                <input type="tel" placeholder="Phone No*"required/>
                <input type="email" placeholder="Email*" required/>
                <input type="text" placeholder="Location*" required/>
                <textarea name="" id="" cols="30" rows="7" placeholder="Message*"></textarea>
                <button type="submit">Submit</button>
            </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact