import React from "react";
import { ethers } from 'ethers';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setLoading] = React.useState(true);
  const [lastWallet, setLastWallet] = React.useState(undefined);
  const [provider, setProvider] = React.useState(null);
  const [userAddress, setUserAddress] = React.useState(null);
  const [chainId, setChainId] = React.useState(null);

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

      const provider = new ethers.providers.Web3Provider(ethereum);
      
      setLoading(false);

    } catch (e){
      console.log(e);
    }
  };

  React.useEffect(() => {
    connectWallet();
  }, [])

  return (
    <AppContext.Provider
    value={{
      isLoading,
      userAddress,
      chainId,
      handleLoading,
      connectWallet,
    }}>
      {children}
    </AppContext.Provider>
  );
};