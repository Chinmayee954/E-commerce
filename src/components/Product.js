import React from 'react'
import "./Product.css";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Product({id, title, image, price, rating, discount, saving, handleItems,  handlefavoriteIcon, temp}) {

const a = 1;



    return (
        <div className="product">

 <div className="product__info__img">
        <img src = {image}></img>
    </div>

        <div className="product__info"> 
                   <p className="title"><span>{title}</span></p> 
           <p className="product__price">
               <small>$</small>
               <strong>{price}   </strong>
               <small className="product__price__saving">   $</small>
               <span className="product__price__saving">{saving}</span>

               <p className="product__discount">
           <strong>{discount}</strong>
               <small>% OFF</small>
           </p>
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
       <i classname =  "favorite__icon" ><span><FavoriteBorderIcon /></span></i>    
    </div>
        </div>
    )
}

export default Product
