import React from 'react'
import './Footer.css'

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='footer-data'>
                    <div className="contact-details">
                        <h1>Contact Us</h1>
                        <p>Librarian</p>
                        <p>Symbiosis Institute of Technology</p>
                        <p>Tal: Mulshi, Pune 412 115</p>
                        <p>Maharashtra</p>
                        <p>India</p>
                        <p><b>Email:</b>example@gmail.com</p>
                    </div>
                    <div className='usefull-links'>
                        <h1>Github Profile</h1>
                        <a href='#home'>https://github.com/aryabhirud</a>
                        <a href='#home'>https://github.com/Arya-A-shah</a>
                        <a href='#home'>https://github.com/Tanishka1110</a>
                        <a href='#home'>https://github.com/ayanshaikh2905</a>
                    </div>
                    <div className='librarian-details'>
                        <h1>Librarian</h1>
                        <p>Binary Brain</p>
                        <p>Education</p>
                        <p>Contact: +91 9022622071</p>
                    </div>
                </div>
                <div className="contact-social" >
                    <a href='#home' className='social-icon'><TwitterIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='#home' className='social-icon'><LinkedInIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='#home' className='social-icon'><TelegramIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='#home' className='social-icon'><InstagramIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                </div>
            </div>
            <div className='copyright-details'>
                <p className='footer-copyright'>&#169; 2024 copyright all right reserved<br />Designed with ❤️ by Arya bhirud,Arya Shah, Tanishka Mane, Ayan Shaikh.</p>
                
            </div>
        </div>
    )
}

export default Footer