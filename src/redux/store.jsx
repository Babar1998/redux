import { createStore } from "redux";
import cakeReducer from "./cakes/cakesReducer";
import iceReducer from "./icecream/iceCreamReducer";

const combineReducers = redux.combineReducers

// const store = createStore(cakeReducer);
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceReducer 
})
const store = createStore(rootReducer);

export default store;
