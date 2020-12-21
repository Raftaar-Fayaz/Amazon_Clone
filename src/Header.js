import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    };

    return (
        <nav className="header">
            <Link to = "/">
                <img className="header__logo" src ="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt = "Amazon Icon"/>
            </Link>

            <div className="header__search">
            <input type='text' className='header__searchInput'/>
            <SearchIcon className="header__searchIcon"/>
            </div>

            {/* 4(Four) Links */}
            <div className="header__nav">
                {/* 1st Link */}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out'  :  'Sigin In'}</span>
                    </div>
                </Link>

                {/* 2nd Link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3rd Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4th Link */}
                <Link to="/checkout" className="header__link"> 
                    <div className="header__optionBasket">
                        {/* Shopping Basket Icon */}
                        <ShoppingCartIcon/>
                        {/* Number of Items in the Basket */}
                        <span className="header__optionLineTwo header__basketCount">{ basket?.length }</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Header;
