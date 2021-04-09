import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__info">

            <Link className="footer__link" >  <h6>About us</h6></Link>
            <Link className="footer__link"><h6>Cancellation and return policy</h6></Link>
            <Link className="footer__link"><h6>Privacy policy</h6></Link>
            <Link className="footer__link"><h6>Terms and conditions</h6></Link>
               
            </div>

            <div className="footer__icons">
                <Link><i className = "icon"><FacebookIcon /></i></Link>
                <Link><i className = "icon"><InstagramIcon /></i></Link>
                <Link><i className = "icon"><TwitterIcon /></i></Link>
                <Link><i className = "icon"><LinkedInIcon /></i></Link>
            </div>

            <div className="footer__copyright">
                <p>copyright 2021</p>
            </div>
        </div>
    )
}

export default Footer
