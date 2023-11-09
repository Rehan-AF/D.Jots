import { useState } from 'react';
import { Button, Table } from 'antd';
import { useSelector } from 'react-redux';

const ShowResearchPapers = () => {
  const [articles, setArticles] = useState(null);
  const contract = useSelector((state) => state.productsSlice.contract);

  const columns = [
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      className: 'text-blue-400 font-bold',
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
      const notesData = await contract?.contract.getResearchPaper();
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
      console.log('Error fetching data:', error.message);
    }
  };
  //   getData();
  //   });
  //   console.log(notes[0][3]);
  return (
    <div className="p-5">
      <Button
        onClick={getData}
        className="bg-[#3f065c] px-5 py-5 text-white flex justify-center items-center "
      >
        Get Data
      </Button>
      <div className="mt-5">
        <Table
          className=""
          dataSource={articles}
          columns={columns}
          scroll={{ x: true }}
        />
      </div>
      <div></div>
    </div>
  );
};

export default ShowResearchPapers;
