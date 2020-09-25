import { Button, Tag } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { selectTaskList } from "../tasks/taskSlice";
import "./lists.scss";

const Lists = () => {
  const data = useSelector(selectTaskList);
  const columns = [
    {
      title: "Задание",
      key: "title",
    },
    {
      title: "Время начала",
      key: "dateStart",
    },
    {
      title: "Время сдачи",
      key: "dateTime",
    },
    {
      title: "Тип",
      key: "type",
    },
    {
      title: "Описание",
      key: "description",
    },
    {
      title: "Ссылки",
      key: "descriptionUrl",
    },
    {
      title: "Место",
      key: "place",
    },
    {
      title: "Комментарий",
      key: "comment",
    },
    {
      title: "Организатор",
      key: "organizer",
    },
  ];

  const divTableHead = columns.map((item) => {
    return (
      <div key={item.key} className={`Rtable-cell column-heading ${item.key}`}>
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
      <div key={item.id} className="Rtable-row">
        <div className="Rtable-cell date-cell">
          <div className="Rtable-cell--heading">Задание</div>
          <div className="Rtable-cell--content date-content">{item.name}</div>
        </div>
        <div className="Rtable-cell date-cell">
          <div className="Rtable-cell--heading">Время начала</div>
          <div className="Rtable-cell--content date-content"><span className="webinar-date">{item.dateStart} ({item.timeZone})</span><br/>6:00
            pm
          </div>
        </div>
        <div className="Rtable-cell date-cell">
          <div className="Rtable-cell--heading">Время сдачи</div>
          <div className="Rtable-cell--content date-content"><span className="webinar-date">{item.dateTime} ({item.timeZone})</span><br/>6:00
            pm
          </div>
        </div>
        <div className="Rtable-cell date-cell">
          <div className="Rtable-cell--heading">Тип</div>
          <div className="Rtable-cell--content date-content">{tags(item.type)}</div>
        </div>
        <div className="Rtable-cell date-cell">
          <div className="Rtable-cell--heading">Описание</div>
          <div className="Rtable-cell--content date-content">{item.description}</div>
        </div>
        <div className="Rtable-cell date-cell">
          <div className="Rtable-cell--heading">Ссылка</div>
          <div className="Rtable-cell--content date-content">
            <Button href={item.descriptionUrl} target="_blank" type="link">
              Документация
            </Button></div>
        </div>
        <div className="Rtable-cell date-cell">
          <div className="Rtable-cell--heading">Место</div>
          <div className="Rtable-cell--content date-content">{item.place}</div>
        </div>
        <div className="Rtable-cell date-cell">
          <div className="Rtable-cell--heading">Комментарий</div>
          <div className="Rtable-cell--content date-content">{item.comment}</div>
        </div>
        <div className="Rtable-cell date-cell">
          <div className="Rtable-cell--heading">Организатор</div>
          <div className="Rtable-cell--content date-content">{item.organizer}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="Rtable Rtable--collapse">
      <div className="Rtable-row Rtable-row--head">
        {divTableHead}
      </div>
      {divTableRow}
    </div>
  );
};

export default Lists;
