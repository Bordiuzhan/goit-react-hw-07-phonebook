import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterData(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilterData } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
