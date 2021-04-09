import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


function Header({items}) {
    return (

        // create navbar
        <nav className="header">

       <Link to="/" className="header__logo_link">
         <h2 className="header__logo"> <i><LocalMallIcon /></i>    Shopify</h2>
       </Link>

       {/* create search button */}

      <div className="header__search">
       <input type="text" className="header__searchInput"></input>
       <SearchIcon className="header__searchIcon" />
      </div>


      {/* create 3 links */}

      <div className="header__nav">

      {/* create 1st link */}

      <Link to="/login"  className="header__link"> 
          <div className="header__option">
           <span>Sign In</span>
        </div>
      </Link>

      {/* create 2nd link */}

      <Link to="/"  className="header__link"> 
          <div className="header__option">
           <span><FavoriteBorderIcon /> WishList </span>
        </div>
      </Link>
      
      {/* create 3rd link */}

      <Link to="/"  className="header__link"> 
          <div className="header__option">
           <span>  <ShoppingCartIcon />  Cart </span>
        </div>
      </Link>

      {/* create 4th link */}



      <Link to="/checkout"  className="header__link"> 
          <div className="header__option">
           <ShoppingBasketIcon />
           <span className="header__optionCount">{items.length}</span>
        </div>
      </Link>



      </div>


        
            
        </nav>
    )
}

export default Header
