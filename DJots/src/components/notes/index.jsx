/* eslint-disable react/prop-types */
import { Button, Modal } from 'antd';
// import { ethers } from 'hardhat';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const NotesComponent = () => {
  const contract = useSelector((state) => state.productsSlice.contract);
  const [formValues, setFormValues] = useState({
    name: '',
    note: '',
  });
  const [state, setItemModal] = useState({
    open: '',
    loading: false,
  });
  const handleModalOpen = () => {
    setItemModal({
      open: true,
      loading: false,
    });
  };
  const handleCancel = () => {
    setItemModal({
      open: false,
      loading: false,
    });
  };
  const handleOk = async () => {
    console.log(formValues.name, formValues.note);
    const transaction = await contract?.contract.blockNote(
      formValues.name,
      formValues.note,
      {
        gasLimit: 3000000,
      }
    );
    await transaction.wait();
  };
  const handleInputChange = (fieldName, newValue) => {
    setFormValues((prevState) => ({
      ...prevState,
      [fieldName]: newValue,
    }));
  };
  const handleGet = async () => {
    try {
      const notesData = await contract?.contract.getMemos();
      console.log(notesData);
    } catch (error) {
      console.log('Error fetching notes:', error.message);
    }
  };
  return (
    <div>
      <button
        className="bg-blue-500 px-4 py-3 w-full text-xl rounded text-white"
        onClick={handleModalOpen}
      >
        write note
      </button>
      <Modal
        title="Notes"
        open={state.open}
        confirmLoading={state.loading}
        onCancel={handleCancel}
        onOk={handleOk}
        footer={[
          <Button key="get" onClick={handleGet}>
            getData
          </Button>,
          <Button key="submit" onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <div className="flex flex-col">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="name"
            className="px-2 outline-none border h-[40px] border-[#D9D9D9] rounded-md"
            onChange={(e) => handleInputChange('name', e.target.value)}
            value={formValues.name}
          />
          <input
            id="data"
            name="data"
            type="text"
            placeholder="write your note"
            className="px-2 outline-none border h-[40px] border-[#D9D9D9] rounded-md mt-2"
            onChange={(e) => handleInputChange('note', e.target.value)}
            value={formValues.note}
          />
        </div>
      </Modal>
    </div>
  );
};

export default NotesComponent;
