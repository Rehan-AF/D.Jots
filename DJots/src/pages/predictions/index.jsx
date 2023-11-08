import { Button, Table } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const ShowPredictions = () => {
  const [notes, setNotes] = useState(null);
  const contract = useSelector((state) => state.productsSlice.contract);
  /**
 * 
 *  string name;
        string pridiction;
        uint256 timestemp;
        address from;
        uint256 blockNumber;
 */
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
      title: 'pridiction',
      dataIndex: 'pridiction',
      key: 'pridiction',
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
      const notesData = await contract?.contract.getPridictions();
      const newData = [];
      notesData.forEach((element) => {
        const timestemp = Number(element[2]);
        const date = new Date(timestemp * 1000);
        const dateString = date.toLocaleString();
        newData.push({
          name: element[0],
          pridiction: element[1],
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
      <Button onClick={getData} className='bg-[#3f065c] px-5 py-5 text-white flex justify-center items-center '>Get Data</Button>
      <div className="mt-5">
        <Table className="" dataSource={notes} columns={columns} />
      </div>
      <div></div>
    </div>
  );
};

export default ShowPredictions;
