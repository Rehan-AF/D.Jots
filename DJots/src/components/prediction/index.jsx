/* eslint-disable react/prop-types */
import { Button, Modal, message } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const PredictionComponent = () => {
  const contract = useSelector((state) => state.productsSlice.contract);
  const [formValues, setFormValues] = useState({
    name: '',
    prediction: '',
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
    try {
      message.info('transaction is in process');
      const transaction = await contract?.contract.blockPridiction(
        formValues.name,
        formValues.prediction,
        {
          gasLimit: 3000000,
        }
      );
      setFormValues({
        name: '',
        prediction: '',
      });
      handleCancel();
      message.info('you will receive notification from metaMask on success');
      await transaction.wait();
    } catch (e) {
      message.error(e.message);
    }
  };
  const handleInputChange = (fieldName, newValue) => {
    setFormValues((prevState) => ({
      ...prevState,
      [fieldName]: newValue,
    }));
  };

  return (
    <div>
      <button
        className="bg-blue-500 px-4 py-3 w-full text-xl rounded text-white"
        onClick={handleModalOpen}
      >
        Write Your Prediction
      </button>
      <Modal
        title="Predictions"
        open={state.open}
        confirmLoading={state.loading}
        onCancel={handleCancel}
        onOk={handleOk}
        footer={[
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
          <textarea
            rows="5"
            cols="50"
            id="data"
            name="data"
            type="text"
            placeholder="Write your prediction"
            className="p-2 outline-none border border-[#D9D9D9] rounded-md mt-2 resize-none "
            onChange={(e) => handleInputChange('prediction', e.target.value)}
            value={formValues.prediction}
          />
        </div>
      </Modal>
    </div>
  );
};

export default PredictionComponent;
