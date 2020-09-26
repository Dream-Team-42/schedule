import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {
  emptyTask,
  ModalOperation,
  ModalState,
  Task
} from "../../constants/types";

const initialState: ModalState = {
  isShowModal: false,
  operation: "viewing",
  task: emptyTask,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    addTaskToModal: (
      state: ModalState,
      action: PayloadAction<Task>
    ): ModalState => {
      return {
        ...state,
        task: action.payload,
      };
    },
    showModal: (state: ModalState): ModalState => {
      return {
        ...state,
        isShowModal: true,
      };
    },
    hideModal: (state: ModalState): ModalState => {
      return {
        ...state,
        isShowModal: false,
      };
    },
    switchOperation: (
      state: ModalState,
      action: PayloadAction<ModalOperation>
    ) => {
      return {
        ...state,
        operation: action.payload,
      };
    },
  },
});

export const {
  addTaskToModal,
  showModal,
  hideModal,
  switchOperation,
} = modalSlice.actions;

export const selectModalVisibility = (state: RootState) =>
  state.modal.isShowModal;
export const selectModalOperation = (state: RootState) => state.modal.operation;
export const selectTaskFromModal = (state: RootState) => state.modal.task;

export default modalSlice.reducer;
