import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import { baseURL, teamID } from "../../constants/magicVars";
import { Task, TaskFields, TaskState } from "../../constants/types";

const initialState: TaskState = [];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    /**
     * Add task at state
     */
    addTask: (state: TaskState, action: PayloadAction<Task>) => {
      return [...state, { ...action.payload }];
    },
    /**
     * Remove task from state
     */
    rmTask: (state: TaskState, action: PayloadAction<string>) => {
      return state.filter((task) => task.id !== action.payload);
    },
    /**
     * Update task in state
     */
    updateTask: (state: TaskState, action: PayloadAction<TaskFields>) => {
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

export const { addTask, rmTask, updateTask } = taskSlice.actions;

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

export const selectTaskList = (state: RootState) => state.task;

export default taskSlice.reducer;
