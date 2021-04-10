import React from 'react'
import "./Product.css";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Product({id, title, image, price, rating, discount, saving, handleItems, key, handlefavoriteIcon}) {



    return (
         <div className = "product__main">
              <div className="product" >

 <div className="product__info__img">
        <img alt="product_image" src = {image}></img>
    </div>

        <div className="product__info"> 
                   <p className="title"><span>{title}</span></p> 
           <p className="product__price">
               <small>$</small>
               <strong className="product__price__price">{price}   </strong>
               <small className="product__price__saving">   $</small>
               <span className="product__price__saving">{saving}          </span>

               
           <strong className="product__discount">{discount}</strong>
               <small>% OFF</small>
         
           </p>
           
           <div className="product__rating">
               {
                   Array(rating)
                   .fill()
                   .map((_) => {
                       return (
                             <p>⭐</p>
                       )
                       
                   })
               }
           </div>

        </div>

    <div className="product__info__button">
       <i onClick = {handleItems}><AddShoppingCartIcon /></i>
       <i className =  "favorite__icon" ><span onClick = {handlefavoriteIcon}><FavoriteBorderIcon /></span></i>    
    </div>
        </div>
    
         </div>

    )
    }

export default Product
