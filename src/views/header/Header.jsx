import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <img src="https://app.rs.school/static/images/logo-rsschool3.png" alt="" className="header__logo"/>
      <div className="header__profile"/>
    </header>
  )
}

export default Header;
