import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
	balance: 0,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[register.fulfilled](state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
		},
		[logIn.fulfilled](state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
			state.balance = action.payload.balance ?? 0;
		},
		[logOut.fulfilled](state) {
			state.user = { name: null, email: null }
			state.token = null;
			state.isLoggedIn = false;
			state.balance = 0;
		},
		[refreshUser.pending](state) {
			state.isRefreshing = true;
		},
		[refreshUser.fulfilled](state, action) {
			state.user = action.payload;
			state.isLoggedIn = true;
			state.isRefreshing = false;
			state.balance = action.payload.balance;
		},
		[refreshUser.rejected](state) {
			state.isRefreshing = false;
		},
	}
});

export const authReducer = authSlice.reducer;