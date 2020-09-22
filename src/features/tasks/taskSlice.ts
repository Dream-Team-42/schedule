import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import { Task, TaskState } from "../../constants/types";

const initialState: TaskState = [];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state: TaskState, action: PayloadAction<Task>) => {
      return [...state, { ...action.payload }];
    },
  },
});

export const { addTask } = taskSlice.actions;

export const addTaskAsync = (task: Task): AppThunk => (dispatch) => {
  setTimeout(() => {
    dispatch(addTask(task));
  }, 2000);
};

export const selectTaskList = (state: RootState) => state.task;

export default taskSlice.reducer;
