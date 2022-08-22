import React from 'react';
import { StyledHeaderMiddle } from './styles';
import { Wrapper } from './../../wrapper/wrapper';
import { GoSearch } from 'react-icons/go'
import { Link } from 'react-router-dom';
import  Logo  from '../../../images/logo/dark-logo.png'
import LoginIcon from '../../../images/icon/login.svg'
import CartIcon from '../../../images/icon/cart.svg'
import WishListIcon from '../../../images/icon/wishlist.svg'

const HeaderMiddle = () => {
  return (
    <StyledHeaderMiddle>
        <Wrapper>
            <div className="headerWrap">
                <div className="headerLeft">
                    <div className="headerInner">
                        <div className="headerSearchForm">
                            <form role="search" method="get"  action="/">
                                <input type="text" className='searchInput' placeholder='Search Product' />
                                <button>
                                    <span>
                                        <GoSearch size='20px' />
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="headerCenter">
                    <div className="headerCenterInner">
                        <div className="branding">
                            <Link to="/">
                                <img src={Logo} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="headerRight">
                    <div className="headerRightInner">
                        <div className="SearchIcon">
                            <GoSearch size="20"/>
                        </div>
                        <Link to="/" className='loginIcon headerRightLink'>
                            <img src={LoginIcon} alt="log in icon" className='headerRightImg loginIcon'/>
                            <span className='subMenu'>Log In</span>
                        </Link>

                        <Link to="/" className='wishlistIcon headerRightLink'>
                            <div className="headerRightIcon">
                                <img src={WishListIcon} alt="wishlist icon" className='headerRightImg wishlistIcon'/>
                                <span className='iconBadge'>1</span>
                                <span className='subMenu'>Wishlist</span>
                            </div>
                        </Link>

                        <Link to="/" className='cartIcon headerRightLink'>
                            <div className="headerRightIcon">
                                <img src={CartIcon} alt="cart icon" className='headerRightImg cartIcon'/>
                                <span className='iconBadge'>0</span>
                                <span className='subMenu'>Cart</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    </StyledHeaderMiddle>
  );
}

export default HeaderMiddle;
