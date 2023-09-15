import { createSlice } from "@reduxjs/toolkit";

var initialState = {
    products: []
}
const productSlice = createSlice({
    name: "product",
    initialState ,
    reducers: {
        addProductToStore: (state, action) => {
            state.products = action.payload
        },
        removeProductFromStoreaction: (state, action) => {
            state.products = action.payload
        }
        
    }
})
export const { addProductToStore,removeProductFromStoreaction } = productSlice.actions
export default productSlice.reducer