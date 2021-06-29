import React from "react";
import "./FoodCard.css";
import {addToCart} from "../actions/cart";
import {useDispatch} from "react-redux";

function FoodCard(props){
    const dispatch= useDispatch();
    return(
        <div className="FoodCard">
            <div className="card_img">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="card_details">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <div className="order_now">
                    <span>Price Rs. {props.price}</span>
                    <button onClick={()=>{dispatch(addToCart(props))}}>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard;