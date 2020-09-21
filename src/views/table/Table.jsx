import React from 'react';
import { Table, Tag} from 'antd';
import './table.scss';

const TableInfo = () => {
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
      render: item => (
        <Tag color='volcano'>{item}</Tag>
      ),
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
    <div className='table'>
    <Table
        dataSource={data}
        columns={columns}
        pagination={false}
      />
    </div>
  )
}

export default TableInfo;
