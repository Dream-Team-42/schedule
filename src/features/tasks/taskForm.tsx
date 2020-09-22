import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Task } from "../../constants/types";
import { postTask } from "./taskSlice";

const initialTask: Task = {
  id: "1",
  name: "2",
  dateStart: "3",
  dateTime: "4",
  timeZone: "5",
  type: "6",
  description: "7",
  descriptionUrl: "8",
  place: "9",
  comment: "10",
  organizer: "11",
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
      <button onClick={() => dispatch(postTask(task))}>Add Task</button>
    </div>
  );
};

export default TaskForm;
