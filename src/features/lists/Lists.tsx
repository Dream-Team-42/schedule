import { Button, Tag } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { selectTaskList } from "../../features/tasks/taskSlice";
import "./lists.scss";

const Lists = () => {
  const data = useSelector(selectTaskList);
  const columns = [
    {
      title: "Задание",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Время начала",
      dataIndex: "dateStart",
      key: "dateStart",
    },
    {
      title: "Время сдачи",
      dataIndex: "dateTime",
      key: "dateTime",
    },
    {
      title: "Временная зона",
      dataIndex: "timeZone",
      key: "timeZone",
    },
    {
      title: "Тип",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Описание",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Ссылки",
      dataIndex: "descriptionUrl",
      key: "descriptionUrl",
    },
    {
      title: "Место",
      dataIndex: "place",
      key: "place",
    },
    {
      title: "Комментарий",
      dataIndex: "comment",
      key: "comment",
    },
    {
      title: "Организатор",
      dataIndex: "organizer",
      key: "organizer",
    },
  ];

  const divTableHead = columns.map((item) => {
    return (
      <div key={item.dataIndex} className="divTableHead">
        {item.title}
      </div>
    );
  });

  const tags = (t: string) => {
    const tagsList = t.split(" ");
    console.log(tagsList);
    return tagsList.map((tag) => (
      <Tag key={tag} color={tag === "Deadline" ? "red" : "blue"}>
        {tag}
      </Tag>
    ));
  };
  const divTableRow = data.map((item) => {
    return (
      <div key={item.id} className="divTableRow">
        <div className="divTableCell">{item.name}</div>
        <div className="divTableCell dateStart">{item.dateStart}</div>
        <div className="divTableCell dateStart">{item.dateTime}</div>
        <div className="divTableCell">{item.timeZone}</div>
        <div className="divTableCell type">{tags(item.type)}</div>
        <div className="divTableCell">{item.description}</div>
        <div className="divTableCell">
          <Button href={item.descriptionUrl} target="_blank" type="link">
            Документация
          </Button>
        </div>
        <div className="divTableCell">{item.place}</div>
        <div className="divTableCell">{item.comment}</div>
        <div className="divTableCell">{item.organizer}</div>
      </div>
    );
  });

  return (
    <div className="divTable">
      <div className="divTableHeading">
        <div className="divTableRow">{divTableHead}</div>
      </div>
      <div className="divTableBody">{divTableRow}</div>
    </div>
  );
};

export default Lists;
