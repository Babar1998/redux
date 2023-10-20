import { createStore } from "redux";
import cakeReducer from "./cakes/cakesReducer";
import iceCreamReducer from "./icecream/iceCreamReducer";
import { combineReducers } from "redux";



// const store = createStore(cakeReducer);
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer 
})
const store = createStore(rootReducer);

export default store;
