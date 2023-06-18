import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    formSubmit: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const contactsReduser = contactsSlice.reducer;
export const { formSubmit, deleteContact, filterContact } =
  contactsSlice.actions;
