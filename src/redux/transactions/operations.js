import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createTransaction = createAsyncThunk(
    'transactions/create',
    async (transaction, thunkApi) => {
        try {
            const { data } = await axios.post('/transactions', transaction);
            return data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)

export const getAllTransactions = createAsyncThunk(
    'transactions/getAll',
    async (_, thunkApi) => {
        try {
            const { data } = await axios.get('/transactions');
            return data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)

export const updateTransaction = createAsyncThunk(
    'transactions/update',
    async (transaction, thunkApi) => {
        try {
            const { data } = await axios.patch(`/transactions/${transaction.id}`, transaction);
            return data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)

export const deleteTransaction = createAsyncThunk(
    'transactions/delete',
    async (transactionId, thunkApi) => {
        try {
            const { data } = await axios.delete(`/transactions/${transactionId}`);
            return data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)

export const getTransactionCategories = createAsyncThunk(
    'transactions/categories',
    async (_, thunkApi) => {
        try {
            const { data } = await axios.get(`/transaction-categories`);
            return data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)

export const getTransactionsSummary = createAsyncThunk(
    'transactions/summary',
    async ({month, year}, thunkApi) => {
        try {
            const { data } = await axios.get(`/transactions-summary?month=${month}&year=${year}`);
            return data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)