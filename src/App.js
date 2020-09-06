import { Button, Dropdown, Menu } from "antd";
import React from "react";
import "./App.css";

function App() {
  const menu = (
    <Menu>
      <Menu.Item>
        <Button>one</Button>
        <Button>two</Button>
        <Button>three</Button>
        <Button>four</Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <Dropdown overlay={menu}>
        <p>Hover me</p>
      </Dropdown>
    </div>
  );
}

export default App;
