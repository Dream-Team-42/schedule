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
