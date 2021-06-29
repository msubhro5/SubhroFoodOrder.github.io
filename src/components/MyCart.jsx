import React from "react";
import Navbar from "./NavBar";
import "./MyCart.css";
import { useSelector, useDispatch } from "react-redux";


function MyCart() {
    const myState = useSelector((state) => {return state.myCart})

    return (
        <div className="MyCart">
            <Navbar />
            <h1 style={{ textAlign: "center" }}>Orders In Your Cart</h1>
            <hr />
            {myState.map((cval) => {
                return (
                    <div className="my_cart">
                        <div className="item">
                            <span>{cval.name}</span>
                        </div>
                        <div className="cost">
                            <span>Rs. {cval.price}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MyCart;