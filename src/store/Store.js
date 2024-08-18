import TodoSlice from "./TodoSlice";
import { configureStore } from "@reduxjs/toolkit";
import FormSlice from "./FormSlice";

let store = configureStore({
    reducer:{
        todo:TodoSlice,
        updateform:FormSlice
    }
})

export default store;