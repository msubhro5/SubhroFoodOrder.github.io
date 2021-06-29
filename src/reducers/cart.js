const initialState = [];

const myCart =(state=initialState, action)=>{
    switch (action.type) {
        case "ADD_TO_CART":
            console.log(state)
            return state =[
                ...state,
                action.mydata
            ]

        case "DELETE_FROM_CART":
            return state 
    
        default:
            return state
    }
}

export default myCart;