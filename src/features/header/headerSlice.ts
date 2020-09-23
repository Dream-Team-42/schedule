import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface HeaderState {
  user: "mentor" | "student";
}

const initialState: HeaderState = {
  user: "student",
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    switchToMentor: (state) => {
      state.user = "mentor";
    },
    switchToStudent: (state) => {
      state.user = "student";
    },
  },
});

export const { switchToMentor, switchToStudent } = headerSlice.actions;
export const selectUser = (state: RootState) => state.header.user;

export default headerSlice.reducer;
