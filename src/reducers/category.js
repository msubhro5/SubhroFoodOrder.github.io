import myMenu from "../components/Menu";

const initialstate = myMenu;

const selectedCategory = (state = initialstate, action) => {
    switch (action.type) {
        case "All_SELECTED":
            return myMenu;
        case "BREAKFAST_SELECTED":
            return state= myMenu.filter((cval)=>{return cval.category === "Breakfast"});
        case "LUNCH_SELECTED":
            return state= myMenu.filter((cval)=>{return cval.category === "Lunch"});;
        case "EVENING_SELECTED":
            return state= myMenu.filter((cval)=>{return cval.category === "Evening Snacks"});;
        case "DINNER_SELECTED":
            return state= myMenu.filter((cval)=>{return cval.category === "Dinner"});;
        default:
            return state = myMenu;
    }
}

export default selectedCategory;