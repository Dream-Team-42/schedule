import { AnyAction } from "redux";
import { cmd } from "../constants/cmd";
import { TaskState } from "../constants/types";

export function taskReducer(state: TaskState = [], action: AnyAction) {
  switch (action.type) {
    case cmd.ADD_TASK:
      const { payload } = action;
      return [...state, { ...payload }];
    default:
      return state;
  }
}
