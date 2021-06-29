export const addToCart = (data) =>{
    return{
        type: "ADD_TO_CART",
        mydata: data
    }
}

export const deleteFromCart = (data) =>{
    return{
        type: "DELETE_FROM_CART",
        mydata: data
    }
}