import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./Store/Users"

export default configureStore({
    reducer: {
        Users: UsersReducer
    }
})