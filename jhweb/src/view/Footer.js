import {FaLinkedin} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import "./Footer.css";

export function Footer() {
    return (
        <div className="footer_container">
            <h1 className = "footer_title">JoeyHelps 2023</h1>
            <div className="social_icons">
                
                <a className ="linkedin" href='/'>
                    <FaLinkedin size='25px' color='#c8b4e1' />
                </a>
                <a className ="twitter" href='https://twitter.com/joey_helps_' target="_blank">
                    <FaTwitter size='25px' color='#c8b4e1'/>
                </a>
                <a className ="facebook" href='/'>
                    <FaFacebookF size='25px' color='#c8b4e1'/>
                </a>
                <a className ="instagram" href='https://www.instagram.com/joey.helps/' target="_blank"> 
                    <FaInstagram size='25px' color='#c8b4e1'/>
                </a>

            </div>
        </div>
    );
}