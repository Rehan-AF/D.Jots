import { Button, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ShowArticles = () => {
  const [articles, setArticles] = useState(null);
  const contract = useSelector((state) => state.productsSlice.contract);

  const columns = [
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'From',
      dataIndex: 'from',
      key: 'from',
    },
    {
      title: 'File_Name',
      dataIndex: 'fileName',
      key: 'fileName',
    },
    {
      title: 'File_Size',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: 'Last_Modified',
      dataIndex: 'lastModified',
      key: 'lastModified',
    },
    {
      title: 'Hash',
      dataIndex: 'hash',
      key: 'hash',
    },
    {
      title: 'Block_Number',
      dataIndex: 'blockNumber',
      key: 'blockNumber',
    },
  ];
  //   useEffect(() => {
  const getData = async () => {
    try {
      const notesData = await contract?.contract.getArticles();
      const newData = [];
      notesData.forEach((element) => {
        console.log(element);
        const timestemp = Number(element[6]);
        const date = new Date(timestemp * 1000);
        const dateString = date.toLocaleString();
        newData.push({
          name: element[0],
          fileName: element[1],
          size: element[2],
          time: dateString,
          lastModified: element[3],
          hash: element[4],
          from: element[5],
          blockNumber: `${element[7]}`,
        });
      });
      setArticles(newData);
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
        <Table className="" dataSource={articles} columns={columns} />
      </div>
      <div></div>
    </div>
  );
};

export default ShowArticles;
