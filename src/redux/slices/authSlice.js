
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem('token') || null,
};

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        LoginSuccess: (state, action) => {
            console.log(action+'...action');
            state.token = action.payload;
        },
        Logout: (state) => {
            state.token = null;
        },
    },
});

export const { LoginSuccess, Logout } = tokenSlice.actions;

export default tokenSlice.reducer;
