import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63bb4a12cf99234bfa57d6d8.mockapi.io/';

export const fetchPhones = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.menssage);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (arr, thunkAPI) => {
    try {
      const response = await axios.post('contacts', arr);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.menssage);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (phoneId, thunkAPI) => {
    try {
      const response = await axios.delete(`contacts/${phoneId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.menssage);
    }
  }
);
