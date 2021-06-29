import rootReducer from "./reducers/rootReducer"
import { createStore } from "redux";

const myStore = createStore(rootReducer);

export default myStore;