import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const phoneInitialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: phoneInitialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );

      state.contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const contactsReducer = contactsSlice.reducer;
export const persistedContacts = persistReducer(persistConfig, contactsReducer);
export const { addContact, deleteContact } = contactsSlice.actions;
