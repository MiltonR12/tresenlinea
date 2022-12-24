import { configureStore } from "@reduxjs/toolkit";
import controladorSlice from '../features/controlador.js';

export const store = configureStore({
  reducer: {
    control: controladorSlice
  }
})