import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import { baseURL, teamID } from "../../constants/magicVars";
import { emptyTask, Task, TaskFields, TaskState } from "../../constants/types";

const initialState: TaskState = [];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    /**
     * Add task at state
     */
    addTask: (state: TaskState, action: PayloadAction<Task>): TaskState => {
      return [...state, { ...emptyTask, ...action.payload }];
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
    updateTask: (
      state: TaskState,
      action: PayloadAction<TaskFields>
    ): TaskState => {
      return state.map((task) => {
        const { payload } = action;
        if (task.id !== payload.id) return task;

        return {
          ...emptyTask,
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
  const response = await fetch(`${baseURL}/team/${teamID}/event`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  if (response.ok) {
    dispatch(addTask(task));
    let json = await response.json();
    alert(`OK, ${json.id} task add`);
  } else {
    alert("Error: " + response.status);
  }
};

/**
 * Request Events from database
 */
export const getTaskList = (): AppThunk => async (dispatch) => {
  const response = await fetch(`${baseURL}/team/${teamID}/events`);

  if (response.ok) {
    let json = await response.json();
    console.log(json);
    const { data } = json;
    data.forEach((task: Task) => {
      dispatch(addTask(task));
    });
  } else {
    alert("Error " + response.status);
  }
};

/**
 * Find task by ID in database
 * @param taskID
 */
export const getTask = (taskID: string): AppThunk => async (dispatch) => {
  const response = await fetch(`${baseURL}/team/${teamID}/event/${taskID}`);

  if (response.ok) {
    let json = await response.json();
    dispatch(addTask(json));
  } else {
    alert("Error " + response.status);
  }
};

/**
 *  Update task in database
 * @param task new information
 */
export const putTask = (task: TaskFields): AppThunk => async (dispatch) => {
  const newTask: Task = {
    ...emptyTask,
    ...task,
  };

  const response = await fetch(`${baseURL}/team/${teamID}/event/${task.id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newTask),
  });

  if (response.ok) {
    dispatch(updateTask(newTask));
    alert(`Task ${newTask.id} is update.`);
  } else {
    alert(
      `Can't update ${newTask.id}. Status: ${response.status}:${response.statusText}`
    );
  }
};

/**
 * Delete Event from database
 * @param taskID delete task id
 */
export const deleteTask = (taskID: string): AppThunk => async (dispatch) => {
  const response = await fetch(`${baseURL}/team/${teamID}/event/${taskID}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ id: taskID }),
  });

  if (response.ok) {
    dispatch(removeTask(taskID));
    alert(`Task ${taskID} is delete.`);
  } else {
    alert(
      `Can't delete ${taskID}. Status: ${response.status}:${response.statusText}`
    );
  }
};
