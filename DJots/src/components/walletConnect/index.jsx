import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const WalletConnect = () => {
  const [account, setAccount] = useState(null);

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const contractAddress = ''; // contract address
    const contractABI = []; // contract ABI

    const loadBlockchainData = async () => {
      const { ethereum } = window;
      if (ethereum) {
        const account = await ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccount(account);
        const provider = new ethers.provider.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setState({ provider, signer, contract });
      } else {
        console.error('MetaMask or web3 not found');
      }
    };

    loadBlockchainData();
  }, []);

  return (
    <div>
      {account ? (
        <p>Connected Account: {account}</p>
      ) : (
        <p>Please connect your MetaMask wallet.</p>
      )}
    </div>
  );
};

export default WalletConnect;
