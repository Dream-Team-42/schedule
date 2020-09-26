import { MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Tag } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../header/headerSlice";
import {
  addTaskToModal,
  showModal,
  switchOperation
} from "../tasks/modalSlice";
import { deleteTask, selectTaskList } from "../tasks/taskSlice";
import "./lists.scss";

const { SubMenu } = Menu;

const Lists = () => {
  const data = useSelector(selectTaskList);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
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
    return tagsList.map((tag) => (
      <Tag key={tag} color={tag === "Deadline" ? "red" : "blue"}>
        {tag}
      </Tag>
    ));
  };
  const divTableRow = data.map((item, i) => {
    const menu = (
      <Menu>
        <Menu.ItemGroup title="Действия:">
          <Menu.Item
            onClick={() => {
              dispatch(addTaskToModal(item));
              dispatch(switchOperation("viewing"));
              dispatch(showModal());
            }}
          >
            Просмотреть
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              dispatch(addTaskToModal(item));
              dispatch(switchOperation("editing"));
              dispatch(showModal());
            }}
            style={{ display: user === "Mentor" ? "block" : "none" }}
          >
            Изменить
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              dispatch(deleteTask(item.id));
            }}
            style={{ display: user === "Mentor" ? "block" : "none" }}
          >
            Удалить
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    );
    return (
      <div key={item.id} className={`Rtable-row ${i % 2 ? "" : "is-striped"}`}>
        <div className="Rtable-cell date-cell title">
          <div className="Rtable-cell--heading">Задание</div>
          <div className="Rtable-cell--content">
            <Button href={item.descriptionUrl} target="_blank" type="link">
              {item.name}
            </Button>
          </div>
        </div>
        <div className="Rtable-cell date-cell dateStart">
          <div className="Rtable-cell--heading">Время начала</div>
          <div className="Rtable-cell--content">
            <span className="webinar-date">
              {item.dateStart} ({item.timeZone})
            </span>
            <br />
            6:00 pm
          </div>
        </div>
        <div className="Rtable-cell date-cell dateTime">
          <div className="Rtable-cell--heading">Время сдачи</div>
          <div className="Rtable-cell--content">
            <span className="webinar-date">
              {item.dateTime} ({item.timeZone})
            </span>
            <br />
            6:00 pm
          </div>
        </div>
        <div className="Rtable-cell date-cell type">
          <div className="Rtable-cell--heading">Тип</div>
          <div className="Rtable-cell--content">{tags(item.type)}</div>
        </div>
        <div className="Rtable-cell date-cell description">
          <div className="Rtable-cell--heading">Описание</div>
          <div className="Rtable-cell--content">{item.description}</div>
        </div>
        <div className="Rtable-cell date-cell place">
          <div className="Rtable-cell--heading">Место</div>
          <div className="Rtable-cell--content">{item.place}</div>
        </div>
        <div className="Rtable-cell date-cell comment">
          <div className="Rtable-cell--heading">Комментарий</div>
          <div className="Rtable-cell--content">{item.comment}</div>
        </div>
        <div className="Rtable-cell date-cell organizer">
          <div className="Rtable-cell--heading">Организатор</div>
          <div className="Rtable-cell--content">{item.organizer}</div>
          <Dropdown overlay={menu}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <MoreOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
    );
  });

  return (
    <div className="Rtable Rtable--collapse">
      <div className="Rtable-row Rtable-row--head">{divTableHead}</div>
      {divTableRow}
    </div>
  );
};

export default Lists;
