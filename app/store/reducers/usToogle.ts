import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export const buttonSlice = createSlice({
  name: "button",
  initialState: {value: false},
  reducers: {
    toggleButton: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleButton } = buttonSlice.actions;

export default buttonSlice.reducer;