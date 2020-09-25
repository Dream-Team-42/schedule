import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface HeaderState {
  user: "Режим ментора" | "Режим студента";
}

const initialState: HeaderState = {
  user: "Режим студента",
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    switchToMentor: (state) => {
      state.user = "Режим ментора";
    },
    switchToStudent: (state) => {
      state.user = "Режим студента";
    },
  },
});

export const { switchToMentor, switchToStudent } = headerSlice.actions;
export const selectUser = (state: RootState) => state.header.user;

export default headerSlice.reducer;
