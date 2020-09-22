import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Task } from "../../constants/types";
import { addTask } from "./taskSlice";

const initialTask: Task = {
  dateStart: "1",
  dateTime: "2",
  descriptionUrl: "3",
  id: "4",
  name: "5",
  timeZone: "6",
  type: "7",
  comment: "8",
  description: "9",
  organizer: "0",
  place: "x",
};

const TaskForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState(initialTask);
  return (
    <div>
      <input
        type="text"
        value={task.id}
        onChange={(e) => setTask({ ...task, id: e.target.value })}
      />
      <input
        type="text"
        value={task.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
      />
      <input
        type="text"
        value={task.dateStart}
        onChange={(e) => setTask({ ...task, dateStart: e.target.value })}
      />
      <input
        type="text"
        value={task.dateTime}
        onChange={(e) => setTask({ ...task, dateTime: e.target.value })}
      />
      <input
        type="text"
        value={task.timeZone}
        onChange={(e) => setTask({ ...task, timeZone: e.target.value })}
      />
      <input
        type="text"
        value={task.type}
        onChange={(e) => setTask({ ...task, type: e.target.value })}
      />
      <input
        type="text"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <input
        type="text"
        value={task.descriptionUrl}
        onChange={(e) => setTask({ ...task, descriptionUrl: e.target.value })}
      />
      <input
        type="text"
        value={task.place}
        onChange={(e) => setTask({ ...task, place: e.target.value })}
      />
      <input
        type="text"
        value={task.comment}
        onChange={(e) => setTask({ ...task, comment: e.target.value })}
      />
      <input
        type="text"
        value={task.organizer}
        onChange={(e) => setTask({ ...task, organizer: e.target.value })}
      />
      <button onClick={() => dispatch(addTask({ ...task }))}>Add Task</button>
    </div>
  );
};

export default TaskForm;
