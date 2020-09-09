import React from 'react';
import { Table, Tag} from 'antd';
import './table.scss';

const TableInfo = () => {
  const data= [
    {
      key: '1',
      dateStart: '2020-07-27',
      deadLine: '2020-07-27',
      tags: 'questions',
      nameTask: 'songbird',
    },
    {
      key: '1',
      dateStart: '2020-07-27',
      deadLine: '2020-07-27',
      tags: 'questions',
      nameTask: 'songbird',
    },
    {
      key: '1',
      dateStart: '2020-07-27',
      deadLine: '2020-07-27',
      tags: 'questions',
      nameTask: 'songbird',
    },
  ];
  
  const columns = [
    {
      title: 'DateStart',
      dataIndex: 'dateStart',
      key: 'dateStart',
    },
    {
      title: 'DeadLine',
      dataIndex: 'deadLine',
      key: 'deadLine',
      render: item => (
        <Tag color='volcano'>{item}</Tag>
      ),
      
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
    },
    {
      title: 'NameTask',
      dataIndex: 'nameTask',
      key: 'nameTask',
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