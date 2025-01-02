import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { toast } from 'react-toastify';
import TransactionArtifact from '../contracts/Transaction.json';

const Web3Context = createContext();

export const useWeb3 = () => useContext(Web3Context);

// Replace with your deployed contract address
const contractAddress = '0x691d1Cb16154M9a9d279531FD1DE5e77815fBC30'; // Replace with your deployed contract address

export const Web3Provider = ({ children }) => {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const init = async () => {
      await checkNetwork();
      await checkIfWalletIsConnected();
    };
    init();
  }, []);

  const checkNetwork = async () => {
    if (window.ethereum) {
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      if (chainId !== '0xaa36a7') {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xaa36a7' }],
          });
        } catch {
          toast.error('Please switch to the Sepolia testnet in your wallet');
        }
      }
    }
  };

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return alert('Please install MetaMask.');

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    if (accounts.length) {
      setAccount(accounts[0]);
      await getBalance(accounts[0]);
      await getTransactionHistory();
    }
  };
