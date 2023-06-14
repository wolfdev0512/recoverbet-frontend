import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: false,
  value:
    Math.floor(Math.random() * 10) +
    "," +
    Math.floor(Math.random() * 1000) +
    "." +
    Math.floor(Math.random() * 100),
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload.data;
    },
    setValue: (state, action) => {
      state.value =
        Math.floor(Math.random() * 10) +
        "," +
        Math.floor(Math.random() * 1000) +
        "." +
        Math.floor(Math.random() * 100);
    },
  },
});

export const { setData, setValue } = dataSlice.actions;

export default dataSlice.reducer;
