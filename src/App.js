import React, {useState} from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Subheader from "./components/Subheader"
import Home from "./components/Home"
import Footer from "./components/Footer"
import tshirt from "../src/tshirt"

function App() {



 const [items, setItems] = useState([])



    function handleItems(event){
   
        setItems([
            ...items, {
                 id: tshirt[0].id,
            title: tshirt[0].title,
            price:tshirt[0].price,
            rating: tshirt[0].rating,
            image : tshirt[0].image,
            discount : tshirt[0].discount,
            saving : tshirt[0].saving
            }
        ])
    }

   

    function handlefavoriteIcon()
    {
      console.log("hello");
    }








  return (
    <Router>
      <div className="app">
      <Switch>
        <Route path="/checkout">
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <h1>Login Page</h1>
        </Route>
        <Router path="/">
          <Header 
            items = {items}
          />
          <Subheader />
          <Home 
            handleItems = {handleItems}
            handlefavoriteIcon = {handlefavoriteIcon}
          />
          <Footer />
        </Router>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
