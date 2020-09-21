import { AnyAction } from "redux";
import { cmd } from "../constants/cmd";
import { Task } from "../constants/types";

export default function addTask(task: Task): AnyAction {
  return {
    type: cmd.ADD_TASK,
    payload: {
      ...task,
    },
  };
}

/*
export function asyncAddTask(task: Task) {
  return function (dispatch: any): void {
    setTimeout(() => {
      dispatch({ type: cmd.ADD_TASK, payload: { ...task } });
    }, 1500);
  };
}
*/
