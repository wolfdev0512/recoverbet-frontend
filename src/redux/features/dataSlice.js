import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: false,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
