import React from "react";
import "./Subheader.css";
import {Link, NavLink} from "react-router-dom";


function Subheader(){
    return (
        <nav className = "subheader">
           <NavLink to="/Footer" className="subheader__link">
               <div className="subheader__option">
                   <span>T-Shirt</span>
               </div>
           </NavLink>

           <Link className="subheader__link">
               <div className="subheader__option">
                   <span>Bean Bag</span>
               </div>
           </Link>

           <Link className="subheader__link">
               <div className="subheader__option">
                   <span>Hoodies</span>
               </div>
           </Link>

           <Link className="subheader__link">
               <div className="subheader__option">
                   <span>Curtains</span>
               </div>
           </Link>

           <Link className="subheader__link">
               <div className="subheader__option">
                   <span>Shirt</span>
               </div>
           </Link>

           <Link className="subheader__link">
               <div className="subheader__option">
                   <span>Saree</span>
               </div>
           </Link>

           <Link className="subheader__link">
               <div className="subheader__option">
                   <span>Trousers</span>
               </div>
           </Link>
        </nav>
    )
}


export default Subheader