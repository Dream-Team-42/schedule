import { Menu } from "antd";
import React, { useState } from "react";
import { defaultView } from "../../constants/types";
import Calendar from "../calendar/Calendar";
import Lists from "../lists/Lists";

function Main() {
  const [view, setView] = useState(defaultView);
  return (
    <main>
      <Menu mode="vertical" style={{ width: 256 }}>
        <Menu.SubMenu title="Сменить вид на:">
          <Menu.ItemGroup>
            {view !== "list" && (
              <Menu.Item onClick={() => setView("list")}>Таблица</Menu.Item>
            )}
            {view !== "calendar" && (
              <Menu.Item onClick={() => setView("calendar")}>
                Календарь
              </Menu.Item>
            )}
          </Menu.ItemGroup>
        </Menu.SubMenu>
      </Menu>
      {view === "list" && <Lists />}
      {view === "calendar" && <Calendar />}
    </main>
  );
}

export default Main;
