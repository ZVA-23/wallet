import { createSlice } from "@reduxjs/toolkit";
import {
	createTransaction,
	deleteTransaction,
	getAllTransactions,
	getTransactionCategories,
	getTransactionsSummary,
	updateTransaction
} from "./operations";

const initialState = {
	items: [],
	categories: [],
	summary: null,
	isLoading: false,
	error: null,
	totalBalance: 0,
}

const handlePending = state => {
	state.isLoading = true;
	state.error = null;
}

const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
}

const transactionsSlice = createSlice({
	name: 'transactions',
	initialState,
	extraReducers: {
		[getAllTransactions.pending]: handlePending,
		[getAllTransactions.rejected]: handleRejected,
		[getAllTransactions.fulfilled](state, action) {
			console.log(action.payload);
			state.isLoading = false;
			state.items = action.payload;
			if (action.payload.length > 0) {
				state.totalBalance = action.payload[action.payload.length - 1].balanceAfter;
			} else {
				state.totalBalance = 0;
			}
		},
		[createTransaction.pending]: handlePending,
		[createTransaction.rejected]: handleRejected,
		[createTransaction.fulfilled](state, action) {
			state.isLoading = false;
			state.items.push(action.payload);
			state.totalBalance = action.payload.balanceAfter;
		},
		[deleteTransaction.pending]: handlePending,
		[deleteTransaction.rejected]: handleRejected,
		[deleteTransaction.fulfilled](state, action) {
			state.isLoading = false;
			state.items = state.items.filter(item => item.id !== action.payload.id);
		},
		[updateTransaction.pending]: handlePending,
		[updateTransaction.rejected]: handleRejected,
		[updateTransaction.fulfilled](state, action) {
			state.isLoading = false;
			state.error = null;
			const index = state.items.findIndex(task => task.id === action.payload.id);
			state.items.splice(index, 1, action.payload);
		},
		[getTransactionCategories.pending]: handlePending,
		[getTransactionCategories.rejected]: handleRejected,
		[getTransactionCategories.fulfilled](state, action) {
			state.isLoading = false;
			state.categories = action.payload;
		},
		[getTransactionsSummary.pending]: handlePending,
		[getTransactionsSummary.rejected]: handleRejected,
		[getTransactionsSummary.fulfilled](state, action) {
			state.isLoading = false;
			state.summary = action.payload;
		},
	}
})


export const transactionsReducer = transactionsSlice.reducer;