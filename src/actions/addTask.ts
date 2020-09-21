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
