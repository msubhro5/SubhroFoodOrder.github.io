import './App.css';
import {Switch, Route} from "react-router-dom";
import SubhroFoodOrder from "./components/SubhroFoodOrder";
import MyCart from "./components/MyCart";
function App() {
  return (
    <Switch>
      <Route exact path = "/" component={SubhroFoodOrder}/>
      <Route exact path = "/cart" component={MyCart}/>
      <Route component={SubhroFoodOrder}/>
    </Switch>
  );
}

export default App;
