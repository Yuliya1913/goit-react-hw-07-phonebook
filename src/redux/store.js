import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },
});
