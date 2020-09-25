import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Task } from "../../constants/types";
import "./taskModal.module.css";
import { postTask } from "./taskSlice";
import {Modal} from "antd";

const initialTask: Task = {
  id: "",
  name: "",
  dateStart: "",
  dateTime: "",
  timeZone: "",
  type: "",
  description: "",
  descriptionUrl: "",
  place: "",
  comment: "",
  organizer: "",
};

const TaskModal = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState(initialTask);
  return (    
        <Modal
          title="Добавление таска в расписание RS School"
          centered={true}
          visible={true}  
          okText="Сохранить"  
          cancelText="Отмена"
          onOk={() => dispatch(postTask(task))}>
          <div className="wrapper">      
      <label>Название таска:</label>
        <input
          type="text"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
      <label>Время начала:</label>
        <input
        type="text"        
        onChange={(e) => setTask({ ...task, dateStart: e.target.value })}
      />
      <label>Время сдачи:</label>
      <input
        type="text"
        onChange={(e) => setTask({ ...task, dateTime: e.target.value })}
      />
      <label>Тип:</label>      
      <input
        type="text"
        onChange={(e) => setTask({ ...task, type: e.target.value })}
      />
      <label>Описание:</label>  
        <input
          type="text"
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      <label>Ссылка на таск:</label>  
        <input
          type="text"
          onChange={(e) => setTask({ ...task, descriptionUrl: e.target.value })}
        />
      <label>Место:</label>  
        <input
          type="text"
          onChange={(e) => setTask({ ...task, place: e.target.value })}
        />
      <label>Комментарий:</label>  
      <input
        type="text"
        onChange={(e) => setTask({ ...task, comment: e.target.value })}
      />
      <label>Организатор:</label>  
        <input
          type="text"
          onChange={(e) => setTask({ ...task, organizer: e.target.value })}
        />
    </div>
        </Modal>
    
  );
};

export default TaskModal;
