import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import abi from '../../contractJSON/MessageContract.json';
import NotesComponent from '../notes';
import { Web3Provider } from '@ethersproject/providers';

const Template = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [reload, setReload] = useState(false);
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  window.ethereum.on('accountsChanged', async () => {
    setReload(true);
  });
  useEffect(() => {
    const contractAddress = '0x9e795874E53e745Badc7f44a682299B35d864307';
    const contractABI = abi.abi;

    const loadBlockchainData = async () => {
      const { ethereum } = window;
      if (ethereum) {
        try {
          const account = await ethereum.request({
            method: 'eth_requestAccounts',
          });

          setAccount(account);
          const provider = new Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          console.log(contract);
          setState({ provider, signer, contract });
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

  return (
    <div>
      {account ? (
        <p>Connected Account: {account}</p>
      ) : (
        <p>Please connect your MetaMask wallet.</p>
      )}
      {children}
      <NotesComponent contract={state} />
    </div>
  );
};

export default Template;
