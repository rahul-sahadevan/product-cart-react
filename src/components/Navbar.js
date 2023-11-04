import React from "react";
import { Link } from "react-router-dom";


function Navbar(){


    return (
        <div className="nav-bar">
            <div>
                <h2>Shopping Cart</h2>
            </div>
            <div className="home-cart">
                <h2><Link to={'/'} className="home">Home</Link></h2>
                <h2><Link to={'/cart'} className="home">My Cart</Link></h2>
            </div>
        </div>
    )
}
export default Navbar