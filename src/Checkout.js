import React from 'react';
import Subtotal from "./Subtotal";
import './Checkout.css';
import ChechoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import CurrencyFormate from "react-currency-format";

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__top">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Amazon Advertaisement"/>
                {basket?.length === 0 ? (
                    <div><h3 className="name">Hello, {user?.email}</h3>
                        <h2 className="checkout__title"> Your Amazon Basket is empty</h2>
                        <p>You have no items in your basket. To buy one or more items, click "Add to Cart" next to the item.</p>
                    </div>) : (<div>
                                    <h3 className="name">Hello, {user?.email}</h3>
                                    <h2 className="checkout__title"> Your Shopping Cart</h2>
                                    {basket?.map((item) => (
                                    <ChechoutProduct
                                    id = {item.id}
                                    title = {item.title}
                                    image = {item.image}
                                    price = {item.price}
                                    rating = {item.rating}
                                    />))}
                                        </div>
                )}
            </div>
                <div className="checkout__right">
                    <Subtotal />
                </div>
                </div>
                <div className="space"></div>
                <div className = "footer">
                <div className="backtoTop">
                    <h3>Back to top</h3>
                </div>
                <div className="merg">
                <div className="footer__details">
                    <div className="details1">
                        <h2>Get to Know Us</h2>
                        <h3>Carrers</h3>
                        <h3>Blog</h3>
                        <h3>About Amazon</h3>
                        <h3>Sustainability</h3>
                        <h3>Investor Relations</h3>
                        <h3>Amazon Devices</h3>
                        <h3>Amazon Tours</h3>
                        <span>hello</span>
                    </div>
                    <div className="details2">
                        <h2>Make Money with Us</h2>                    
                        <h3>Sell products on Amazon</h3>
                        <h3>Sell apps on Amazon</h3>
                        <h3>Become an Affiliate</h3>
                        <h3>Advertise Your Products</h3>
                        <h3>Self-Publish with Us</h3>
                        <h3>Host an Amazon Hub</h3>
                        <p>›See More Make Money</p>
                        <h3>with Us</h3>
                    </div>
                    <div className="details3">
                        <h2>Amazon Payment Products</h2>
                        <h3>Amazon Business Card</h3>
                        <h3>Shop with Points</h3>
                        <h3>Reload Your Balance</h3>
                        <h3>Amazon Currency Converter</h3>
                        <span>hello</span>
                        <span>hello</span>
                        <span>hello</span>
                        <p>hello</p>
                    </div>
                    <div className="details4">
                        <h2>Let Us Help You</h2>
                        <h3>COVID-19 and Amazon</h3>
                        <h3>Your Account</h3>
                        <h3>Returns Centre</h3>
                        <h3>100% Purchase Protection</h3>
                        <h3>Amazon App Download</h3>
                        <h3>Amazon Assistand Download</h3>
                        <span>help</span>
                        <p>hello</p>
                      
                    </div>
                </div>
                <div className="country">
                    <img className="header__logo" src ="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt = "Amazon Icon"/>
                    <button className="country__button">$ USD - U.S. Doller</button>
                </div>
                </div>
                <div className="finalbg">
                    <div className="adds">
                        <div className="add1">
                            <h3>Amazon Music</h3>
                            <h4>Stream millions</h4>
                            <h4>of Songs</h4>
                            <h3>Audible</h3>
                            <h4>Download Audiobooks</h4>
                            <p>Hello</p>
                            <h3>Amazon Home Services</h3>
                            <h4>Experienced pros</h4>
                            <h4>Happiness Guarantee</h4>
                            <h3>Shopbop</h3>
                            <h4>Designer </h4>
                            <h4>Fashion Brands</h4>
                            <h2>Hello</h2>
                            <p>Hello</p>
                            <p>Hello</p>
                        </div>
                        <div className="add2">
                            <h3>Abe Books</h3>
                            <h4>Books, Art</h4>
                            <h4> & Collatables</h4>
                            <h3>Book Depository</h3>
                            <h4>Books with Free </h4>
                            <h4>Delivery Worldwide</h4>
                            <h3>IMDb</h3>
                            <h4>Movies, Tv </h4>
                            <h4>& Celebrities</h4>
                            <h3>Amazon Warehouse</h3>
                            <h4>Deep Discounts </h4>
                            <h4>Open-Box Products</h4>
                            <h3>Amazon Second Chance</h3>
                            <h4>Pass it on, Trade it in,</h4>
                            <h4>give it a second life</h4>
                        </div>
                        <div className="add3">
                            <h3>ACX</h3>
                            <h4>Audiobooks Publishing</h4>
                            <h4>Made Easy</h4>
                            <h3>DPReview</h3>
                            <h4>Digital </h4>
                            <h4>Photography</h4>
                            <h3>Kindly Direct Publishing</h3>
                            <h4>Indie Digital & Print Publishing </h4>
                            <h4>Made Easy</h4>
                            <h3>Amazon Business</h3>
                            <h4>Service for </h4>
                            <h4>Business Customers</h4>
                            <h2>Hello</h2>
                            <p>Hello</p>
                            <p>Hello</p>
                        </div>
                        <div className="add4">
                            <h3>Amazon Web Service</h3>
                            <h4>Sclable Cloud</h4>
                            <h4>Computing Services</h4>
                            <h3>Goodreads</h3>
                            <h4>Book Reviews </h4>
                            <h4>& Recomandations</h4>
                            <h3>Prime Now</h3>
                            <h4>2-Hour Delivery </h4>
                            <h4>on Everyday Essentials</h4>
                            <h3>Whole Foods Market</h3>
                            <h4>We Belive in </h4>
                            <h4>Real Food</h4>
                            <h2>Hello</h2>
                            <p>Hello</p>
                            <p>Hello</p>
                        </div>
                    </div>
                    <div className="copyrights">
                        <h3>Conditions of Use & Sale</h3>
                        <h3>Privacy Notice</h3>
                        <h3>Cookies Notice</h3>
                        <h3>Interest-Based Ads Notice</h3>
                        <h4>© 1996-2020, Amazon-Clone. By Raftaar Fayaz.</h4>
                    </div>
                </div>
            </div>
        </div>
            
    );
}

export default Checkout;
