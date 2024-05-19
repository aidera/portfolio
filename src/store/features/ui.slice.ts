import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Snackbar {
  id: string;
  message: string;
}

interface UIState {
  snackbars: Snackbar[];
}

const initialState: UIState = {
  snackbars: [],
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    addSnackbar: (state, action: PayloadAction<{ message: string }>) => {
      state.snackbars.push({
        id: new Date().toISOString(),
        message: action.payload.message,
      });
    },
    removeSnackbar: (state, action: PayloadAction<{ id: string }>) => {
      state.snackbars = state.snackbars.filter(
        (el) => el.id !== action.payload.id
      );
    },
  },
});

export const { addSnackbar, removeSnackbar } = uiSlice.actions;

export default uiSlice.reducer;
