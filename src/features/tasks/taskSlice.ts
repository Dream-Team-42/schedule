import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { message } from "antd";
import { AppThunk, RootState } from "../../app/store";
import { baseURL, teamID } from "../../constants/magicVars";
import { Task, TaskState } from "../../constants/types";

const initialState: TaskState = [];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    /**
     * Add task at state
     */
    addTask: (state: TaskState, action: PayloadAction<Task>): TaskState => {
      return [...state, action.payload];
    },
    /**
     * Remove task from state
     */
    removeTask: (
      state: TaskState,
      action: PayloadAction<string>
    ): TaskState => {
      return state.filter((task) => task.id !== action.payload);
    },
    /**
     * Update task in state
     */
    updateTask: (state: TaskState, action: PayloadAction<Task>): TaskState => {
      return state.map((task) => {
        const { payload } = action;
        if (task.id !== payload.id) return task;

        return {
          ...task,
          ...payload,
        };
      });
    },
  },
});

export const { addTask, removeTask, updateTask } = taskSlice.actions;
export const selectTaskList = (state: RootState) => state.task;
export default taskSlice.reducer;

/**
 * Post new Event to database
 * @param task new Task
 */
export const postTask = (task: Task): AppThunk => async (dispatch) => {
  const hideMessage = message.loading("Posting the task...", 0);

  const response = await fetch(`${baseURL}/team/${teamID}/event`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  if (response.ok) {
    hideMessage();
    message.success(`${task.name.slice(0, 10)} posted!`);

    dispatch(addTask(task));
  } else {
    hideMessage();
    message.error(
      `${task.name.slice(0, 10)} not posted. Error: ${response.statusText}`
    );
  }
};

/**
 * Request Events from database
 */
export const getTaskList = (): AppThunk => async (dispatch) => {
  const hideMessage = message.loading("Loading data...");
  const response = await fetch(`${baseURL}/team/${teamID}/events`);

  if (response.ok) {
    hideMessage();

    let json = await response.json();
    const { data } = json;

    data.forEach((task: Task) => {
      dispatch(addTask(task));
    });
  } else {
    hideMessage();
    message.error(`Can't get Tasks from server. Error: ${response.statusText}`);
  }
};

/**
 * Find task by ID in database
 * @param taskID
 */
export const getTask = (taskID: string): AppThunk => async (dispatch) => {
  const hideMessage = message.loading("Looking for the task...");

  const response = await fetch(`${baseURL}/team/${teamID}/event/${taskID}`);

  if (response.ok) {
    hideMessage();

    let json = await response.json();
    message.success(`${json.name.slice(0, 10)} found!`);
    return json;
  } else {
    hideMessage();
    message.error(`Can't get task from server. Error: ${response.statusText}`);
  }
};

/**
 *  Update task in database
 * @param task new information
 */
export const putTask = (task: Task): AppThunk => async (dispatch) => {
  const hideMessage = message.loading("Updating the task...");

  const response = await fetch(`${baseURL}/team/${teamID}/event/${task.id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(task),
  });

  if (response.ok) {
    hideMessage();
    message.success(`${task.name} updated!`);

    dispatch(updateTask(task));
  } else {
    hideMessage();
    message.error(
      `Can't update ${task.name.slice(0, 10)}. Error: ${response.statusText}`
    );
  }
};

/**
 * Delete Event from database
 * @param taskID delete task id
 */
export const deleteTask = (taskID: string): AppThunk => async (dispatch) => {
  const hideMessage = message.loading("Deleting the task...", 0);

  const response = await fetch(`${baseURL}/team/${teamID}/event/${taskID}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ id: taskID }),
  });

  if (response.ok) {
    hideMessage();
    message.success(`Task deleted!`);

    dispatch(removeTask(taskID));
  } else {
    hideMessage();
    message.error(
      `Can't delete ${taskID}. Status: ${response.status}:${response.statusText}`
    );
  }
};
