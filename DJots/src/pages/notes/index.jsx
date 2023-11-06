import { Button, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ShowNotes = () => {
  const [notes, setNotes] = useState(null);
  const contract = useSelector((state) => state.productsSlice.contract);

  const columns = [
    {
      title: 'time',
      dataIndex: 'time',
      key: 'time',
      fixed: 'left',
      width: 200,
      className: 'text-blue-400 font-bold',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'from',
      dataIndex: 'from',
      key: 'from',
    },
    {
      title: 'note',
      dataIndex: 'note',
      key: 'note',
      fixed: 'left',
    },
    {
      title: 'blockNumber',
      dataIndex: 'blockNumber',
      key: 'blockNumber',
    },
  ];
  //   useEffect(() => {
  const getData = async () => {
    try {
      const notesData = await contract?.contract.getMemos();
      const newData = [];
      notesData.forEach((element) => {
        const timestemp = Number(element[2]);
        const date = new Date(timestemp * 1000);
        const dateString = date.toLocaleString();
        newData.push({
          name: element[0],
          note: element[1],
          time: dateString,
          from: element[3],
          blockNumber: `${element[4]}`,
        });
      });
      setNotes(newData);
    } catch (error) {
      console.log('Error fetching notes:', error.message);
    }
  };
  //   getData();
  //   });
  //   console.log(notes[0][3]);
  return (
    <div className="p-5">
      <Button onClick={getData}>Get Data</Button>
      <div className="mt-5">
        <Table className="" dataSource={notes} columns={columns} />
      </div>
      <div></div>
    </div>
  );
};

export default ShowNotes;
