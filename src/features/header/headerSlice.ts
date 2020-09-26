import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface HeaderState {
  user: "Mentor" | "Student";
}

const initialState: HeaderState = {
  user: "Mentor",
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    switchToMentor: (state) => {
      state.user = "Mentor";
    },
    switchToStudent: (state) => {
      state.user = "Student";
    },
  },
});

export const { switchToMentor, switchToStudent } = headerSlice.actions;
export const selectUser = (state: RootState) => state.header.user;

export default headerSlice.reducer;
