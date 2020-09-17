import React from 'react';
import { Table, Tag} from 'antd';
import {data} from '../../core/data';
import './lists.scss';

const Lists = () => {
  const columns = [
    {
      title: 'Дата',
      dataIndex: 'dateStart',
      key: 'dateStart',
    },
    {
      title: 'Время',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Тип',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Тема',
      dataIndex: 'thema',
      key: 'thema',
    },
    {
      title: 'Время на прохождение',
      dataIndex: 'timeToComplete',
      key: 'TimeToComplete',
    },
    {
      title: 'Материалы, которые надо изучить к теме',
      dataIndex: 'materials',
      key: 'Materials',
    },
    {
      title: 'Лектор',
      dataIndex: 'lecturer',
      key: 'Lecturer',
    },
  ];

  const divTableHead = columns.map(item => {
    return <div key={item.dataIndex} className="divTableHead">{item.title}</div>
  });

  const tags = (tagsList) => {
    return tagsList.map((tag) => <Tag key={tag} color={tag === 'Deadline' ? 'red' : 'blue'}>{tag}</Tag>)
  };
  const divTableRow = data().map(item => {
    return <div key={item.lecturer + item.key} className="divTableRow">
      <div className="divTableCell">{item.dateStart}</div>
      <div className="divTableCell">{item.time}</div>
      <div className="divTableCell type">
        {tags(item.type)}
      </div>
      <div className="divTableCell">{item.thema}</div>
      <div className="divTableCell">{item.timeToComplete}</div>
      <div className="divTableCell">{item.materials}</div>
      <div className="divTableCell">{item.lecturer}</div>
    </div>
  });

  return (
    <div className="divTable">
      <div className="divTableHeading">
        <div className="divTableRow">
          {divTableHead}
        </div>
      </div>
      <div className="divTableBody">
        {divTableRow}
      </div>
    </div>
  )
}

export default Lists;
