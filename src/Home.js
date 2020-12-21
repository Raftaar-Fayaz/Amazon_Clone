import React from 'react';
import Product from './Product';
import "./Home.css";

function Home() {
    return (
    <div className="home">
        <div className="head">
            <div className="location">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/visit.png"/>
                <div className="welcome">
                    <span>Hello</span>
                    <h2>Select your Address</h2>
                </div>
            </div>
            <div className="offers">
                <button>Gift Cards</button>
                <button>Best Sellers</button>
                <button>Mobiles</button>
                <button>Today's Deals</button>
                <button>New Releases</button>
                <button>Electronics</button>
                <button>Computers</button>
                <button>Customer Service</button>

            </div>
            <div className="adv">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Mirzapurs2/nobranding/400x39-SWM_With-Disclaimer_np._CB415424805_.jpg"/>
            </div>
        </div>
        <div className="main">
            {/* <img className = "home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Amazon Home Page1"/> */}
            {/* <img className = "home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg" alt="Amazon Home Page2"/> */}
            {/* <img className = "home__image" src = "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/Nov/BAU/Credit-Card-Bill_1500x600_without._CB415288872_.jpg" alt = "Amazon Advertaise Poster3"/> */}
            {/* <img className = "home__image" src = "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg" alt = "Amazon Advertaise Poster4"/> */}
            {/* <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/under1499store/english/Gateway/updated/V242338866_IN_CEPC_Under_1499_store_Graphics_1500x600._CB416140037_.jpg"  alt = "Amazon Advertaise Poster5"/> */}
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/AMAZON-FASHION/2020/FASHION/PROMO/AW20-EOSS_PRE-SALE/MERCH/GW/GW_HERO_DESK_1500x600._CB415865455_.jpg"  alt = "Amazon Advertaise Poster6"/>

            {/* Product Id, Title, Price, Rating, Image */}
            <div className="home__row">
                <Product id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Sucessful Businesses Paperback, ERIC RIES"
                    price={38.90}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BOl,204,203,200_.jpg"
                />
                <Product id="12331241"
                    title="Think Like a Monk | TRAIN YOUR MIND for PEACE & PURPOSE EVERY DAY (English, Paperback, Jay Shetty)"
                    price={41.99}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/416/416/k1v1h8w0/book/5/9/7/think-like-a-monk-original-imafhyxcchpyf2sb.jpeg?q=70"
                />
            </div>
            <div className="home__row">
                <Product id="14321341"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
                    price={1526.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX522_.jpg"
                />
                <Product id="11321341"
                    title="Apple Watch Series 6 GPS 44 mm Red Aluminium Case with Product (Red) Sport Band  (Red Strap, Regular)"
                    price={597.23}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/416/416/kfeamq80/smartwatch/3/g/k/ios-m00m3hn-a-apple-original-imafvvgfu6bg4dz8.jpeg?q=70"
                />
                <Product id="13321341"
                    title="Sony WH-1000XM4 Wireless Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control"
                    price={278.89}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._AC_SX522_.jpg"
                />
            </div>
            <div className="home__row">
                <Product id="12312323"
                    title="Cole Haan(-CH-): Men Grey Leather Coorpate Casual Shoes"
                    price={199.31}
                    rating={4}
                    image="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2020/11/21/51348a4e-8c28-4332-b34d-cc8d1d77fc381605978343922-1.jpg"
                />
                <Product id="12321332"
                    title="Superdry(-R-) : Men Dark Green Cotton Lycra Blend Trousers"
                    price={79.22}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/880/1056/ke4kjgw0-0/trouser/m/a/9/38-casual-trousers-superdry-r-original-imafuvhznvtbtxzj.jpeg?q=50"
                />
                <Product id="13232134"
                    title="Popnetic: Women Olive Brown Solid Casual Blazer, (Regular)"
                    price={129.14}
                    rating={5}
                    image="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7779635/2018/11/28/8b2b057d-5dc8-475a-922f-2c9e4ede51c71543400115676-Popnetic-Women-Jackets-7041543400115534-1.jpg"
                />
            </div>
            <div className="home__row">
                <Product id="21321311"
                    title="Sceptre 34-inch Curved UltraWide 21: 9 Creative Curved Gaming LED Monitor 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Machine Black 2020 (C345W-2560UN)"
                    price={2386.32}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81xyUsHm7YL._AC_SX679_.jpg"
                    // image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    // image="https://rukminim1.flixcart.com/image/416/416/kgsb1jk0/monitor/e/6/3/165hz-1080p-1500r-freesync-gaming-monitor-exclusive-built-in-anc-original-imafwy3pnbxzqmzn.jpeg?q=70"
                />
            </div>
            <div className="home__row">
                <Product id="12312323"
                    title="Amazon Echo | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product id="12321332"
                    title="Apple iPhone 12 Pro | (Pacific Blue, 256GB, 128 GB, 64GB)"
                    price={1626.02}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/u/c/d/apple-iphone-12-pro-dummyapplefsn-original-imafwgbrzxg3nggd.jpeg?q=70"
                />
                <Product id="13232134"
                    title="Peoplelink Integrated 4K Huddle Endpoint, HD20 Webcam"
                    price={383.54}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/416/416/webcam/p/d/f/glimsonic-hd20-original-imaem5dqpubsqhyh.jpeg?q=70"
                    />
            </div>
            <div className="home__row">
                <Product id="12312323"
                    title="Highlander | Regular Fit Men Blue Polyester Blend Trousers"
                    price={498.99}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/880/1056/ke353m80-0/trouser/g/e/z/30-hltr004329-highlander-original-imafuu85kwh5zz48.jpeg?q=50"
                />
                <Product id="12321332"
                    title="U.S. Polo Assn | Relaxed Women White Cotton Blend Trousers"
                    price={326.02}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/880/1056/joonafk0/trouser/n/5/q/28-uwtr0644-u-s-polo-assn-original-imafby3xfpeb7ruj.jpeg?q=50"
                />
                <Product id="13232134"
                    title="Invictus | Corporate Casual Shoes For Men, (Deep Navy Blue)"
                    price={698.99}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/880/1056/jw84ya80/shoe/g/3/v/8671957-40-invictus-navy-original-imafgyy3ky8zfhm7.jpeg?q=50"
                    />
            </div>
            <div className="home__row">
                <Product id="21321311"
                    title="Asus ROG Zephyrus S17 Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home/8 GB Graphics/NVIDIA Geforce RTX 2080 Super with Max-Q Design/300 Hz) GX701LXS-HG040T Gaming Laptop  (17.3 inch, Black Metal, 2.60 kg)"
                    price={3836.54}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/416/416/kfmv9u80/computer/z/s/z/asus-na-gaming-laptop-original-imafwfxbnxyukzwa.jpeg?q=70"
                />
            </div>
            <div className="home__row">
                <Product id="12321341"
                    title="The House of Tara | Green, Brown Men & Women Messenger Bag | Distress Finish Canvas 20 L Backpack"
                    price={328.98}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/880/1056/j62hrww0/sling-bag/t/z/e/cotton-canvas-messenger-bag-in-distress-finish-htmb-072-original-imaewmhhjvewnkdw.jpeg?q=50"
                />
                    <Product id="12331241"
                        title="United Colors of Benetton(UCB) | Mirrored Rectangular Sunglasses (56) - (Shaddy Blue), #JustHere"
                        price={141.99}
                        rating={5}
                        image="https://rukminim1.flixcart.com/image/880/1056/kg8avm80-0/sunglass/b/1/e/be7022990-56-united-colors-of-benetton-original-imafwgh4pw4t2fnh.jpeg?q=50"
                    />
            </div>
            <div className="home__row">
                <Product id="12321341"
                    title="Hafele 8 kg, 5 Star Fully Automatic Front Load with In-built Heater, Strong White Color - (HNKA0852)"
                    price={998.90}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/416/416/kekadu80/washing-machine-new/x/g/c/hnka0852-hafele-original-imafv7mmudt77cyj.jpeg?q=70"
                />
                <Product id="12331241"
                    title="Sony MHC-PG10 with build in Battery Bluetooth Party Speaker HOME THEATER - Ultra Stero (Black, 2.0 Channel)"
                    price={41.99}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/416/416/jw9ke4w0/speaker/home-audio-speaker/4/e/n/sony-gtk-pg10-original-imafgzdjgvfe72zg.jpeg?q=70"
                />
            </div>
            <div className="home__row">
                <Product id="21321311"
                    title="Asus ROG Curved UltraWide 21: 9 Creative Curved Gaming LED Monitor 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Machine Black 2020  GX701LXS-HG040T Gaming Monitor"
                    price={3836.54}
                    rating={5}
                    // image="https://rukminim1.flixcart.com/image/416/416/kfmv9u80/computer/z/s/z/asus-na-gaming-laptop-original-imafwfxbnxyukzwa.jpeg?q=70"
                    image="https://rukminim1.flixcart.com/image/416/416/kgsb1jk0/monitor/e/6/3/165hz-1080p-1500r-freesync-gaming-monitor-exclusive-built-in-anc-original-imafwy3pnbxzqmzn.jpeg?q=70"
                />
            </div>
        </div>   
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
            {/* Product */}
    </div>
    );
}

export default Home;
