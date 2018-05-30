import { createStore } from "redux";
// import reducer from "./reducers"; // Gets the State from the reducer(s)

let reducer = (state = 0) => {return state;};

let store = createStore(reducer); // Creates the store from the State received from the reducer(s)

export default store;