import React from "react";
import HeroSection from "../components/HeroSection";
import Membership from "../components/Membership";
import NomineeForm from "../components/NomineeForm";
import Steps from "../components/Steps";
import { AppContext } from "../contexts/AppContext";

import { ethers } from "ethers";
import Loader from "../components/Loader";
import { tokenData } from "../utils/tokenData";

const HomePage = () => {
    let onlyAddress = [];

  const [nomineeAddress, setNomineeAddress] = React.useState("");

  const [formOpen, setFormOpen] = React.useState(false);

  const [tokens, setTokens] = React.useState([]);
  const [left, setLeft] = React.useState(tokenData);

  const {
    userAddress,
    connectWallet,
    contract,
    users,
    isLoading,
    handleLoading,
  } = React.useContext(AppContext);

  const filterTokenData = () => {
      onlyAddress = [];
      tokens.forEach(item => onlyAddress.push(item.tokenAddress));
  }

  const registerUser = async (options) => {
    handleLoading(true);

    try {
        if (users.indexOf(userAddress) > -1) {
            console.log("User is already Registered");
        } else {
            console.log("Registering the user...");
            let txn = await contract.addUser(options);
            await txn.wait();

            console.log("User Registered !!");
            users.push(userAddress);
            alert("User Successfully Registered!");
        }
        // Open the Modal to add nominee
        setFormOpen(true);
    } catch(err){
        console.log(err);
    }
    handleLoading(false);
  };

  const addNominee = async () => {
    setFormOpen(false);
    handleLoading(true);

    try {
        console.log("Adding a Nominee...", nomineeAddress);
        let txn = await contract.addNominee(nomineeAddress);
        await txn.wait();

        filterTokenData();
        txn = await contract.approveOperator(onlyAddress, { gasLimit: ethers.utils.hexlify(1000000) });
        await txn.wait();

        const index = await contract.usersIndex(userAddress);
        txn = await contract.users(index);
        console.log(txn);

        alert("Nominee Successfully Added");
    } catch(err){
        console.log(err);
    }
    handleLoading(false);
  };

  const handleChange = (e) => {
    setNomineeAddress(e.target.value);
  };

  const handleClickOpen = async (cost) => {
    const gwei = ethers.utils.parseEther("0.031");

    const options = {
      from: userAddress,
      value: gwei,
      gasLimit: ethers.utils.hexlify(1000000),
    };

    // User not connected
    if (!userAddress) await connectWallet();
    
    // Register User
    await registerUser(options);

  };

  const handleClose = async () => {
    setFormOpen(false);
  };

  const handleSubmit = async () => {
    if (tokens.length === 0) {
        alert("Select at least one token");
        return;
    }

    if (nomineeAddress.length !== 42) {
        alert("Enter a correct Nominee Address");
        return;
    }

    await addNominee();
  }

  const memberRef = React.useRef(null);
  const stepsRef = React.useRef(null);

  const executeMemberScroll = () => memberRef.current.scrollIntoView();
  const executeStepsScroll = () => stepsRef.current.scrollIntoView();

  return (
    <React.Fragment>
      <Loader isLoading={isLoading} />
      <HeroSection scroll={executeStepsScroll} />
      <Steps stepsRef={stepsRef} scroll={executeMemberScroll} />
      <Membership myRef={memberRef} handleClickOpen={handleClickOpen} />
      <NomineeForm
        open={formOpen}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        tokens={tokens}
        setTokens={setTokens}
        left={left}
        setLeft={setLeft}
        handleChange={handleChange}
        nomineeAddress={nomineeAddress}
      />
    </React.Fragment>
  );
};

export default HomePage;
