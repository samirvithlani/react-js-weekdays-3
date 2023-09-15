import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redux/ProductSlice";

export const store = configureStore({
    reducer: {
        // Define a top-level state field named `todos`, handled by `todosReducer`
        products: productReducer
    }
})