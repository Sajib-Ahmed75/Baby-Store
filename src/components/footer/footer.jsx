import React from 'react';
import { Wrapper } from '../wrapper/wrapper';
import { StyledFooter } from './styles';
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaPinterestP } from 'react-icons/fa'
const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <div className="footer">
          <div className="firstColumn">
            <h2 className="h2">
              Keep In Touch
            </h2>
            <p className="description">
              Our conversation is just getting started
            </p>
            <div className="form">
              <input type="email" placeholder='your email' />
              <BiRightArrowAlt />
            </div>
          </div>
          <div className="secondColumn">
            <h4 className="h4">
              Company
            </h4>
            <div className="links">
              <p className="text">About Us</p>
              <p className="text">Contact</p>
              <p className="text">Shipping & Return</p>
              <p className="text">FAQ</p>
            </div>
          </div>
          <div className="thirdColumn">
            <h4 className="h4">
              Information
            </h4>
            <div className="links">
              <p className="text">My Account</p>
              <p className="text">Login</p>
              <p className="text">My Cart</p>
              <p className="text">Wishlist</p>
              <p className="text">Checkout</p>
            </div>
          </div>
          <div className="forthColumn">
            <h4 className="h4">
              Contact
            </h4>
            <div className="links">
              <p className="text">Customer Service</p>
              <p className="text">Store Locator</p>
              <p className="text">Wholesale</p>
              <p className="text">Career</p>
            </div>
          </div>
          <div className="fifthColumn">
            <h4 className="h4">
              Follow Us
            </h4>
            <div className="links">
              <div className="text">
                <Link to="/">
                  <FaFacebookF />
                  <span>Facebook</span>
                </Link>
              </div>
              <div className="text">
                <Link to="/">
                  <AiOutlineTwitter />
                  <span>Twitter</span>
                </Link>
              </div>
              <div className="text">
                <Link to="/">
                  <AiOutlineInstagram />
                  <span>Instagram</span>
                </Link>
              </div>
              <div className="text">
                <Link to="/">
                  <FaPinterestP />
                  <span>Pinterest</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </StyledFooter>
  );
}

export default Footer;
