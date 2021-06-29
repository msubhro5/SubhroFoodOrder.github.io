import React from "react";
import "./MenuBar.css";
import {useDispatch} from "react-redux";
import {allCategory , breakfastCategory, lunchCategory, eveningCategory, dinnerCategory} from "../actions/category"

function MenuBar() {
    const dispatch =useDispatch();
    return (
        <div className="MenuBar">
            <h1 style={{textAlign:"center"}}>Order My Favorite Food Now</h1>
            <hr />
            <div className="menu_button">
                <button onClick={()=>{dispatch(allCategory())}}>All Menu</button>
                <button onClick={()=>{dispatch(breakfastCategory())}}>Breakfast</button>
                <button onClick={()=>{dispatch(lunchCategory())}}>Lunch</button>
                <button onClick={()=>{dispatch(eveningCategory())}}>Evening Snacks</button>
                <button onClick={()=>{dispatch(dinnerCategory())}}>Dinner</button>
            </div>
            <br />
        </div>
    )
}

export default MenuBar;