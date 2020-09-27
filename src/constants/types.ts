export type Task = {
  id: string;
  name: string;
  dateTime: string;
  dateStart: string;
  timeZone: string;
  descriptionUrl: string;
  type: string;
  organizer?: string;
  description?: string;
  place?: string;
  comment?: string;
};
export type TaskState = Task[];
export const emptyTask: Task = {
  id: "",
  dateStart: "",
  dateTime: "",
  descriptionUrl: "",
  name: "",
  timeZone: "",
  type: "",
  comment: "",
  description: "",
  organizer: "",
  place: "",
};

export type ModalOperation = "viewing" | "editing" | "addition";
export type ModalState = {
  isShowModal: boolean;
  operation: ModalOperation;
  task: Task;
};

export type Organizer = {
  id: string;
  name: string;
};
export type OrganizerState = Organizer[];
export const emptyOrganizer: Organizer = {
  id: "",
  name: "",
};

export type ViewContent = "table" | "list" | "calendar";
export const defaultView: ViewContent = "list";

export type ListDataItem = {
  type: "success" | "error";
  content: string;
};
