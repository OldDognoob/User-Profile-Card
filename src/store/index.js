//Create Redux Store
import {createStore}  from "redux";
import reducer from "../reducers";

//Set Initial State Object
const initialState = {
    aboutOne: "I am <awesome> Front-End developer, Fountain Pen Collector & Gamer</awesome>",
    aboutTwo: "I like <awesome>music, cake & sport cars</awesome>",
    name: 'Emperor',
    location: 'Silicon Valley, CA'
};

//Create Redux store from createStore
export const store = createStore(reducer,initialState);