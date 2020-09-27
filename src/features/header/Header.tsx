import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyTask } from "../../constants/types";
import {
  addTaskToModal,
  showModal,
  switchOperation
} from "../tasks/modalSlice";
import "./header.scss";
import { selectUser, switchToMentor, switchToStudent } from "./headerSlice";

const Header = () => {
  const userType = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="head-block">
        <img
          src="https://app.rs.school/static/images/logo-rsschool3.png"
          alt=""
          className="header__logo"
        />
        <p>{userType === "Mentor" ? "Режим ментора" : "Режим студента"}</p>
        <div className="button-block">
          <button onClick={() => dispatch(switchToMentor())}>Ментор</button>
          <button onClick={() => dispatch(switchToStudent())}>Студент</button>
        </div>
      </div>
      <div className="header__profile" />
      {userType === "Mentor" && (
        <button
          className="addTask"
          onClick={() => {
            dispatch(addTaskToModal(emptyTask));
            dispatch(switchOperation("addition"));
            dispatch(showModal());
          }}
        >
          Добавить таск
        </button>
      )}
    </header>
  );
};

export default Header;
