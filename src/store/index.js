import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialState = {
    history: localStorage.getItem("history") || [],
    favourites: localStorage.getItem("favourites") || [],
    cart: localStorage.getItem("cart") || [],
}

const storeSlice = createSlice({
    name: "Shopping",
    initialState,
    reducers: {
        addHistory() { },
        addFavourites() { },
        addToCart() { }
    }
})

export const store = configureStore({
    reducer: storeSlice.reducer
})