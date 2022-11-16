import { configureStore } from "@reduxjs/toolkit";
import { counterSlices } from "../Slices/counterSlice";

const store = configureStore({
    reducer: {
        counter: counterSlices
    }
})

export default store;