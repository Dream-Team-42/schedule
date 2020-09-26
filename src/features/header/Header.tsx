import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
      <button className="addTask">Добавить таск</button>
    </header>
  );
};

export default Header;
