import React,{useState} from 'react';
import { StyledHeaderMiddle } from './styles';
import { Wrapper } from './../../wrapper/wrapper';
import { FaBars } from 'react-icons/fa'
import { GoSearch } from 'react-icons/go'
import { Link } from 'react-router-dom';
import  Logo  from '../../../images/logo/dark-logo.png'
import LoginIcon from '../../../images/icon/login.svg'
import CartIcon from '../../../images/icon/cart.svg'
import WishListIcon from '../../../images/icon/wishlist.svg'
import { MobileMenu } from './../mobileMenu/mobileMenu';
import { AiOutlineClose } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import  emptyImg  from '../../../../public/image/cart/empty-cart.png'
import { HiOutlinePencil } from 'react-icons/hi'
import { FaShippingFast } from 'react-icons/fa'
import { RiCouponLine } from 'react-icons/ri'
const HeaderMiddle = () => {
    const [mobileMenu, setMobileMenu] = useState (false);
    const handleClick = () => {
        setMobileMenu (mobileMenu => !mobileMenu);
    }
    const [shoppingCart, setSoppingCart] = useState (false);
    const shoppingCartClick = () =>{
        setSoppingCart (shoppingCart => !shoppingCart)
    }
    const [searchBar, setSearchBar] = useState (false);
    const searchBarClick = () =>{
        setSearchBar (searchBar => !searchBar)
    }
  return (
    <StyledHeaderMiddle>
        <Wrapper>
            <div className="headerWrap">
                <div className="headerLeft">
                    <div className="headerInner">
                        <div className="mobileMenuBar">
                            <div className="menuBarIcon">
                                <FaBars size="20"onClick={handleClick} />
                            </div>
                        </div>
                        <div className="headerSearchForm" >
                            <form role="search" method="get"  action="/" onClick={searchBarClick}>
                                <input type="search" readOnly className='searchInput' placeholder="Search products" value="" name="s" title="Search for:"/>
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

                        <Link to="/" className='wishListIcon headerRightLink'>
                            <div className="headerRightIcon">
                                <img src={WishListIcon} alt="wishlist icon" className='headerRightImg wishlistIcon'/>
                                <span className='iconBadge'>1</span>
                                <span className='subMenu'>Wishlist</span>
                            </div>
                        </Link>

                        <Link to="/" className='cartIcon headerRightLink'>
                            <div className="headerRightIcon">
                                <img src={CartIcon} alt="cart icon" className='headerRightImg cartIcon' onClick={shoppingCartClick}/>
                                <span className='iconBadge'>0</span>
                                <span className='subMenu'>Cart</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Wrapper>
        
            <MobileMenu mobileMenu = {mobileMenu} handleClick ={handleClick}/>

        {/* popup cart start here  */}
        <div className={shoppingCart ? "openCartPopup cartPopup" : "closeCartPopup cartPopup"}>
            <div className="inner">
                <Link to="/" className='closeIcon' onClick={shoppingCartClick}>
                    <AiOutlineClose />
                </Link>
                <div className="cartPopupContent">
                    <div className="cartHeader">
                        <h3 className="h3">Shopping Cart</h3>
                        <div className="countDownMessage">
                            🔥 These products are limited, checkout within
                            <div className="timer">00m 00s </div>
                        </div>
                        <div className="cartGoalText">Buy <span className="amount"><bdi>
                            <span className="currencySymbol">$</span>200.00</bdi>
                            </span> more to enjoy <strong>FREE Shipping</strong>
                        </div>
                        <div className="progressBar">
                            <div className="progressBarWrap">
                                <div className="progressBarRol">
                                    <div className="progressBarIcon">
                                        <AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cartBody">
                        <div className="emptyCartMessage">
                             <div className="emptyCartImg">
                                <img src={emptyImg} alt="Empty Cart Img" />
                            </div>
                            <h2 className="h2">Your cart is currently empty.</h2>
                            <p className="description">You may check out all the available products and buy some in the shop.</p>
                        </div>
                       
                        <div className="cartBTN">
                            <Link to="/">
                                Return to shop
                            </Link>
                        </div>
                    </div>
                    <div className="cartFooter">
                        <div className="footerActions">
                            <Link to="/" >
                                <span>
                                    <HiOutlinePencil size={20}/>
                                </span>
                                <span>Note</span>
                            </Link>
                            <Link to="/" className='separator'>
                                <span>
                                    <FaShippingFast size={22}/>
                                </span>
                                <span>Shipping</span>
                            </Link>
                            <Link to="/" className='separator'>
                                <span>
                                    <RiCouponLine size={22}/>
                                </span>
                                <span>Coupon</span>
                            </Link>
                        </div>
                        <table className="cartTable">
	                        <tfoot>
	                            <tr>
		                            <th className='subTotal'>Subtotal</th>
		                            <td ><span className='subTotalAmount'>$0.00</span></td>
                                </tr>
                                <tr className='border'>
		                            <th className='total'>Total</th>
		                            <td><span className='totalAmount'>$0.00</span></td>
                                </tr>
		                    </tfoot>
                        </table>
                        <div className="cartFooterBtn">
                            <Link to="/" className='btn'>
                                Checkout
                            </Link>
                            <Link to="/" className='linkBtn'>
                                <div className="btnWrapper">
                                    <span className="button-text">View cart</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* popup cart end here  */}

        {/* popup search start here  */}

        <div className={searchBar ? "popupSearch openSearchBar" : "popupSearch closeSearchBar"}>
            <div className="searchInner">
                <div className="closeIcon" onClick={searchBarClick}>
                   <AiOutlineClose />
                </div>
                <div className="popupSearchContainer">
                    <div className="popupContent">
                        <div className="logo">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className="searchBar">
                            <form action="/">
                                <input type="search" className="searchField" placeholder="Search products" name="s"/>
                                <button>
                                    <GoSearch size={22}/>
                                </button>
                            </form>
                        </div>
                        <div className="headerRight">
                            <div className="headerRightInner">
                                <Link to="/" className='loginIcon headerRightLink'>
                                    <img src={LoginIcon} alt="log in icon" className='headerRightImg loginIcon'/>
                                    <span className='subMenu'>Log In</span>
                                </Link>

                                <Link to="/" className='wishListIcon headerRightLink'>
                                    <div className="headerRightIcon">
                                        <img src={WishListIcon} alt="wishlist icon" className='headerRightImg wishlistIcon'/>
                                        <span className='iconBadge'>1</span>
                                        <span className='subMenu'>Wishlist</span>
                                    </div>
                                </Link>

                                <Link to="/" className='cartIcon headerRightLink'>
                                    <div className="headerRightIcon">
                                        <img src={CartIcon} alt="cart icon" className='headerRightImg cartIcon' onClick={shoppingCartClick}/>
                                        <span className='iconBadge'>0</span>
                                        <span className='subMenu'>Cart</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="popularKye">
                        <span className='label'>Popular Searches: </span>
                        <Link to="/">T-Shirt</Link>
                        <Link to="/">Blue</Link>
                        <Link to="/">Jacket</Link>
                    </div>
                </div>
            </div>
        </div>

        {/* popup search end here  */}
    
    </StyledHeaderMiddle>
  );
}

export default HeaderMiddle;
