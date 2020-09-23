import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./header.scss";
import { selectUser, switchToMentor, switchToStudent } from "./headerSlice";

const Header = () => {
  const userType = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <img
        src="https://app.rs.school/static/images/logo-rsschool3.png"
        alt=""
        className="header__logo"
      />
      <div className="header__profile" />
      <p>{userType}</p>
      <button onClick={() => dispatch(switchToMentor())}>mentor</button>
      <button onClick={() => dispatch(switchToStudent())}>student</button>
    </header>
  );
};

export default Header;
