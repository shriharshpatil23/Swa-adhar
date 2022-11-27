import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import styled from "styled-components";


function ContractBtns({ setValue }) {
  const { state: { contract, accounts } } = useEth();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const ifExists = async () => {
    const value = await contract.methods.findUser().call({ from: accounts[0] });
    console.log(value);
    //setValue(value);
    if(value==1){
      console.log("User Already exists ");
      setValue("User Already exists ")
    }
    else {
      console.log(" You can Sign Up for the application ");
      setValue("You can Sign Up for the application ")

    }
  };

  const addUser = async () => {
    var value = await contract.methods.findUser().call({ from: accounts[0] });
    if(value==1){
      console.log("User Already exists ");
    }
    else{
      value = await contract.methods.AddUser().send({ from: accounts[0] });
      console.log(value);
    }

  };



  



  

  const read = async () => {
    const value = await contract.methods.read().call({ from: accounts[0] });
    setValue(value);
  };

  const write = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a value to write.");
      return;
    }
    const newValue = parseInt(inputValue);
    await contract.methods.write(newValue).send({ from: accounts[0] });
  };

  const Button = styled.button`
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;

  letter-spacing: 2px;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  text-align: center;
  font-size: 1.4em;
  opacity: .8;
  padding: 20px 40px;
  text-decoration: none;
  transition: all .5s ease;
  margin: 0 auto;
  display: block;

`;
  

  return (
    <>
      <Button onClick={ifExists}>
        Click to Login  
      </Button>
    </>
  );
}

export default ContractBtns;
