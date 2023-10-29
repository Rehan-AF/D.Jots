/* eslint-disable react/prop-types */
import { Button } from 'antd';
// import { ethers } from 'hardhat';
import { useState } from 'react';

const NotesComponent = ({ contract }) => {
  const [formValues, setFormValues] = useState({
    data: '',
    loading: false,
  });
  const handleInputChange = (fieldName, newValue) => {
    setFormValues((prevState) => ({
      ...prevState,
      [fieldName]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const amount = { value: ethers.utils.parseEther('0.01') };
    const transaction = await contract.contract.setMessage(formValues.data);
    await transaction.wait();
    console.log('submit');
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col ">
        <div className="flex flex-col">
          <label htmlFor="data">note</label>
          <input
            id="data"
            name="data"
            type="text"
            className="px-2 outline-none border h-[40px] border-[#D9D9D9] rounded-md"
            onChange={(e) => handleInputChange('data', e.target.value)}
            value={formValues.oldPassword}
          />
        </div>
        <Button
          htmlType="submit"
          className="rounded-none bg-[#1677ff]"
          loading={formValues.loading}
        >
          send note
        </Button>
      </form>
    </div>
  );
};

export default NotesComponent;
