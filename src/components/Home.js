import React from 'react'
import "./Home.css";
import Product from "./Product"
import tshirt from "../tshirt"
import beanbags from "../beanbags"
import hoodies from '../hoodies';
import curtains from "../curtains";
import sarees from "../sarees";

function Home({handleItems, handlefavoriteIcon, temp}) {


    // const [items, setItems] = useState([])


    // function handleItems(){
    //     setItems([
    //         ...items, {
    //              id: tshirt[0].id,
    //         title: tshirt[0].title,
    //         price:tshirt[0].price,
    //         rating: tshirt[0].rating,
    //         image : tshirt[0].image,
    //         discount : tshirt[0].discount
    //         }
    //     ])
    //     console.log("hello");
    // }









    return (
        <div className="home">

        <div className="home__row">


        {tshirt.map(item => {
            return (
                    <Product 
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image = {item.image}
            discount = {item.discount} 
            saving = {item.saving}
                handleItems = {handleItems}
                handlefavoriteIcon  ={handlefavoriteIcon}
                key = {item.id}

            />
            )
        })
        }

          </div>

          <div className="home__row">


        {beanbags.map(item => {
            return (
                    <Product 
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image = {item.image}
            discount = {item.discount} 
                handleItems = {handleItems}
                saving = {item.saving}
                 handlefavoriteIcon  ={handlefavoriteIcon}
                 temp = {temp}
                  key = {item.id}
            />
            )
        })
        }

          </div>

           <div className="home__row">


        {hoodies.map(item => {
            return (
                    <Product 
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image = {item.image}
            discount = {item.discount} 
                handleItems = {handleItems}
                saving = {item.saving}
                 handlefavoriteIcon  ={handlefavoriteIcon}
            />
            )
        })
        }

          </div>


           <div className="home__row">


        {curtains.map(item => {
            return (
           
                         <Product 
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image = {item.image}
            discount = {item.discount} 
                handleItems = {handleItems}
                saving = {item.saving}
                 handlefavoriteIcon  ={handlefavoriteIcon}
                 temp = {temp}
                  key = {item.id}
            />
          
            )
        })
        }

       

          </div>

           <div className="home__row">
            
             {sarees.map(item => {
            return (
                    <Product 
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image = {item.image}
            discount = {item.discount} 
                handleItems = {handleItems}
                saving = {item.saving}
                 handlefavoriteIcon  ={handlefavoriteIcon}
                 temp = {temp}

                  key = {item.id}
            />
            )
        })
        }

        </div>




  

           { /* <Product 
            id="12736464733"
            title="The Lean startup mcv cmcv cmv v "
            price={11.96}
            rating={5}
            image = "https://m.media-amazon.com/images/I/41FELdWQjoL._AC_SY200_.jpg"
        />
         <Product 
            id="12736464733"
            title="The Lean startup"
            price={11.96}
            rating={5}
            image = "https://m.media-amazon.com/images/I/41FELdWQjoL._AC_SY200_.jpg"
        />
        <Product 
            id="12736464733"
            title="The Lean startup"
            price={11.96}
            rating={5}
            image = "https://m.media-amazon.com/images/I/41FELdWQjoL._AC_SY200_.jpg"
        />
        <Product 
            id="12736464733"
            title="The Lean startup"
            price={11.96}
            rating={5}
            image = "https://m.media-amazon.com/images/I/41FELdWQjoL._AC_SY200_.jpg"
        /> */ }
            
      

        
        </div>
    )
}

export default Home

