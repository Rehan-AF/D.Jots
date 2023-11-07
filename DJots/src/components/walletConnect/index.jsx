import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import abi from '../../contractJSON/App.json';
import { Web3Provider } from '@ethersproject/providers';
import { useDispatch } from 'react-redux';
import { setAccount, setContract } from '../../redux';
import { message } from 'antd';
const Template = ({ children }) => {
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();
  try {
    window.ethereum.on('accountsChanged', async (accounts) => {
      if (!accounts.length) {
        localStorage.removeItem('account');
        dispatch(setContract(null));
        dispatch(setAccount(null));
      } else {
        setReload(true);
      }
    });
  } catch (e) {
    message.error('cannot find MataMask wallet');
    message.error('please install MataMask wallet extension ');
  }
  // messgae 0x9e795874E53e745Badc7f44a682299B35d864307
  // app 0xE40439e97b32c3e1E8b4e45FCa9F86ae17d771a8
  // app new 0x3d13c9613429753DF4A847B93184494aEcCB3998
  // lastest app with new data 0x82CD9688627B19b91a006216C0225f0Cd0c28CE9
  useEffect(() => {
    const contractAddress = '0x82CD9688627B19b91a006216C0225f0Cd0c28CE9';
    const contractABI = abi.abi;

    const loadBlockchainData = async () => {
      const { ethereum } = window;
      if (ethereum) {
        try {
          const account = await ethereum.request({
            method: 'eth_requestAccounts',
          });
          localStorage.setItem('account', account[0]);
          const provider = new Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          dispatch(setContract({ provider, signer, contract }));
          dispatch(setAccount(account[0]));

          setReload(false);
        } catch (e) {
          console.log(e.message);
        }
      } else {
        console.error('MetaMask or web3 not found');
      }
    };

    loadBlockchainData();
  }, [reload]);

  return <div>{children}</div>;
};

export default Template;
