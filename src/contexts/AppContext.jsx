import React from "react";
import { ethers } from 'ethers';
import contractABI from '../utils/ContractABI.json';
import CONTRACT_ADDRESS from '../config.js';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setLoading] = React.useState(true);
  const [contract, setContract] = React.useState(null);
  const [provider, setProvider] = React.useState(null);
  const [userAddress, setUserAddress] = React.useState(null);

  // String of Addresses those have registered
  const [users, setUsers] = React.useState([]);

  const handleLoading = (value) => {
    setLoading(value);
  };

  const requestAccount = async() => {
    try {
      const { ethereum } = window;
      if(!ethereum){
        alert("Get Metamask");
        return;
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setUserAddress(accounts[0]);

    } catch (err) {
      console.log(err);
    }
  }

  const connectWallet = async () => {
    if (!isLoading) setLoading(true);

    try {
      const { ethereum } = window;
      if(!ethereum){
        alert("Get Metamask");
        return;
      }

      await requestAccount();

      setLoading(false);

    } catch (e){
      console.log(e);
    }
  };

  const connectContract = async() => {
    try {
      const { ethereum } = window;
      if(!ethereum){
        alert("Get Metamask");
        return;
      }

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const tContract = new ethers.Contract(CONTRACT_ADDRESS, contractABI.abi, signer);
      
      setProvider(provider);
      setContract(tContract);
    } catch(e) {

    }
  }

  React.useEffect(() => {
    connectWallet();
    connectContract();
  }, [])

  return (
    <AppContext.Provider
    value={{
      isLoading,
      userAddress,
      provider,
      contract,
      users,
      handleLoading,
      connectWallet,
    }}>
      {children}
    </AppContext.Provider>
  );
};