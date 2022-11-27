import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

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
    if(value==1){
      console.log("User Already exists ");
    }
    else {
      console.log(" You can Sign Up for the application ");
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

  return (
    <div className="btns">

      <button onClick={ifExists}>
        Check If User Exists 
      </button>

      <button onClick={addUser}>
        Add User  
      </button>



      <div onClick={write} className="input-btn">
        write(<input
          type="text"
          placeholder="uint"
          value={inputValue}
          onChange={handleInputChange}
        />)
      </div>

    </div>
  );
}

export default ContractBtns;
