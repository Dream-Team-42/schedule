import { Alert, Button, Dropdown, Menu } from "antd";
import React from "react";
import "./App.css";
import concatString from "./core/concatStrings";
import getHumanInfo from "./core/getHumanInfo";
import powInN from "./core/powInN";

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
      <Alert
        message={
          getHumanInfo({
            age: 1,
            man: true,
            name: "foo",
            contacts: { phone: "1234" },
          }).phone
        }
      />
      <Alert message={powInN(2, 3)} />
      <Alert message={concatString("foo", "bar")} />

      <Button type="primary">Button</Button>
      <Dropdown overlay={menu}>
        <p>Hover me</p>
      </Dropdown>
    </div>
  );
}

export default App;
