import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import Artworks from "./components/Artwork/Artworks";
import Art from "./components/Art/Art";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";

import "./App.css";
import Payment from "./components/Payment/Payment";
import Shipping from "./components/Shipping/Shipping";
import Order from "./components/Order/Order";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact={true} component={Home} />
        <Route path="/artwork" exact={true} component={Artworks} />
        <Route path="/signin" exact={true} component={Signin} />
        <Route path="/signup" exact={true} component={Signup} />
        <Route path="/payment/:id" exact={true} component={Payment} />
        <Route path="/art/:id" exact={true} component={Art} />
        <Route path="/cart/:id?" exact={true} component={Cart} />
        <Route path="/shipping" exact={true} component={Shipping} />
        <Route path="/order" exact={true} component={Order} />
      </BrowserRouter>
    </div>
  );
}

export default App;
