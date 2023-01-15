import { createSlice } from '@reduxjs/toolkit';
import { fetchPhones, AddContact, DeleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const phoneInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: phoneInitialState,
  extraReducers: {
    [fetchPhones.pending]: handlePending,
    [fetchPhones.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchPhones.rejected]: handleRejected,
    [AddContact.pending]: handlePending,
    [AddContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [AddContact.rejected]: handleRejected,
    [DeleteContact.pending]: handlePending,
    [DeleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [DeleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
