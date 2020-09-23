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

export type TaskFields = {
  id: string;
  name?: string;
  dateTime?: string;
  dateStart?: string;
  timeZone?: string;
  descriptionUrl?: string;
  type?: string;
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

export type Organizer = {
  id: string;
  name: string;
};

export type OrganizerFields = {
  id: string;
  name?: string;
};

export type OrganizerState = Organizer[];

export const emptyOrganizer: Organizer = {
  id: "",
  name: "",
};
