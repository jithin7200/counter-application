import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./counterSlice";



export const store = configureStore({
    reducer:{
        // counter is the name of the reducer to updatee  state 
        counter: counterSlice
    }
})
