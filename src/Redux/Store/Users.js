import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getUsersFromServer = createAsyncThunk(
    "Users/getUsersFromServer",
    async () => {
        return fetch()
            .then(res => res.json())
            .then(data => data)
    }
)



const slice = createSlice({
    name: "Users",
    initialState: [],
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getUsersFromServer.fulfilled, (state, action) => {
            console.log("state", state);
            console.log("action", action);
        })
    }
})

export default slice.reducer