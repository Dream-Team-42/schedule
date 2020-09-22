import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import headerReducer from "../features/header/headerSlice";
import taskReducer from "../features/tasks/taskSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
    header: headerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
