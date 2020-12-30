import React from 'react'
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
function Header() {
    return (
        <nav className="header">
            {/* logo on the left -> img */}
            <Link to="/login">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>

            </Link>


            {/* Search Box */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
         

            {/* 3 links */}
            {/* Basket icon with number  */}
        </nav>
    )
}

export default Header