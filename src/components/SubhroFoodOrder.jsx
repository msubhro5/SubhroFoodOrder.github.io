import React from "react";
import "./SubhroFoodOrder.css";
import FoodCard from "./FoodCard";
import MenuBar from "./MenuBar";
import Navbar from "./NavBar";
import {useSelector} from "react-redux";

function SubhroFoodOrder() {
    const myState =useSelector((state)=>{return state.selectedCategory})
    return (
        <div className="SubhroFoodOrder">
            <Navbar/>
            <MenuBar/>
            <div className="my_food_list">
                {myState.map((cval) => {
                    return (
                        <FoodCard
                            key={cval.id}
                            id={cval.id}
                            category={cval.category}
                            name={cval.name}
                            image={cval.image}
                            description={cval.description}
                            price={cval.price}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default SubhroFoodOrder;