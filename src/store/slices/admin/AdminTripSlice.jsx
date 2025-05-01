import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTripList = createAsyncThunk('adminTrip/fetchTripList', async () => {
    const response = await axios.get('/api/trips'); 
    return response.data;
})

export const addTripAsync = createAsyncThunk('adminTrip/addTrip', async (tripData) => {
    const response = await axios.post('/api/trips', tripData); 
    return response.data;
})

export const updateTripAsync = createAsyncThunk('adminTrip/updateTrip', async ({ id, tripData }) => {
    const response = await axios.put(`/api/trips/${id}`, tripData); 
    return response.data;
})

export const deleteTripAsync = createAsyncThunk('adminTrip/deleteTrip', async (id) => {
    await axios.delete(`/api/trips/${id}`); 
    return id;
})

const initialState = {
    tripList: [],
    loading: false,
    error: null,
}

const adminTripSlice = createSlice({
    name: 'adminTrip',
    initialState,
    reducers: {
        setTripList: (state, action) => {
            state.tripList = action.payload;
        },
        addTrip: (state, action) => {
            state.tripList.push(action.payload);
        },
        updateTrip: (state, action) => {
            const index = state.tripList.findIndex(trip => trip.id === action.payload.id);
            if (index !== -1) {
                state.tripList[index] = action.payload;
            }
        },
        deleteTrip: (state, action) => {
            state.tripList = state.tripList.filter(trip => trip.id !== action.payload);
        },
        resetError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTripList.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTripList.fulfilled, (state, action) => {
                state.loading = false;
                state.tripList = action.payload;
            })
            .addCase(fetchTripList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addTripAsync.fulfilled, (state, action) => {
                state.tripList.push(action.payload);
            })
            .addCase(updateTripAsync.fulfilled, (state, action) => {
                const index = state.tripList.findIndex(trip => trip.id === action.payload.id);
                if (index !== -1) {
                    state.tripList[index] = action.payload;
                }
            })
            .addCase(deleteTripAsync.fulfilled, (state, action) => {
                state.tripList = state.tripList.filter(trip => trip.id !== action.payload);
            });
    }
})

export const { setTripList, addTrip, updateTrip, deleteTrip, resetError } = adminTripSlice.actions;
export default adminTripSlice.reducer;