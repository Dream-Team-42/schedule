import { Badge, Calendar as CalendarANTD } from "antd";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { ListDataItem, Task } from "../../constants/types";
import { selectTaskList } from "../tasks/taskSlice";

const Calendar = () => {
  const tasks = useSelector(selectTaskList);

  const getListData = (
    date: moment.Moment,
    tasks: Task[]
  ): Array<ListDataItem> => {
    let listData: Array<ListDataItem> = [];

    tasks.forEach((task) => {
      const start = moment(task.dateStart);
      if (date.date() === start.date() && date.month() === start.month()) {
        listData.push({
          type: "success",
          content: task.name,
        });
      }
      const deadline = moment(task.dateTime);
      if (
        date.date() === deadline.date() &&
        date.month() === deadline.month()
      ) {
        listData.push({
          type: "error",
          content: task.name,
        });
      }
    });
    return listData;
  };

  function dateCellRender(value: moment.Moment) {
    const listData = getListData(value, tasks);
    return (
      <ul
        className="events"
        style={{ listStyle: "none", padding: "0", marginBottom: "0" }}
      >
        {listData.map((item: ListDataItem) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  return <CalendarANTD dateCellRender={dateCellRender} />;
};

export default Calendar;
