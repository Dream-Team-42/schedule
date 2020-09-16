import React from 'react';
// import { Table, Tag} from 'antd';
import './lists.scss';

const Lists = () => {
  const data= [
    {
      key: '1',
      dateStart: '2020-07-27',
      time: '12:00',
      type: 'questions',
      thema: '11',
      timeToComplete: '12',
      materials: '13',
      lecturer: 'Nurlan',
    },
    {
      key: '1',
      dateStart: '2020-07-27',
      time: '12:00',
      type: 'questions',
      thema: '11',
      timeToComplete: '12',
      materials: '13',
      lecturer: 'Nurlan',
    },
    {
      key: '1',
      dateStart: '2020-07-27',
      time: '12:00',
      type: 'questions',
      thema: '11',
      timeToComplete: '12',
      materials: '13',
      lecturer: 'Nurlan',
    },
  ];

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


  return (
    <div className='lists'>
      <h1>Все на диваххх</h1>
    </div>
  )
}

export default Lists;
