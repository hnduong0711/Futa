import { createSlice  } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLogged: false,
        user: {},
    },
    reducers:{
        
    }
});