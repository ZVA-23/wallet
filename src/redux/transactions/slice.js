import { createSlice } from "@reduxjs/toolkit";
import { createTransaction, deleteTransaction, getAllTransactions, updateTransaction } from "./operations";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
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
            state.isLoading = false;
            state.items = action.payload;
        },
        [createTransaction.pending]: handlePending,
        [createTransaction.rejected]: handleRejected,
        [createTransaction.fulfilled](state, action) {
            state.isLoading = false;
            state.items.push(action.payload);
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
    }
})


export const transactionsReducer = transactionsSlice.reducer;