import React from "react";
import "./NavBar.css";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

function Navbar(){
    const myState= useSelector((state)=>{return state.myCart});
   return(
        <div className="Navbar">
            <NavLink exact activeClassName="activeClass" to ="/"><span>Subhro Food Order</span></NavLink>
            <NavLink exact activeClassName="activeClass" to ="/cart"><span>My Cart {myState.length}</span></NavLink>
        </div>
    )
}
export default Navbar;