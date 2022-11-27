import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";
import ContractBtns from './ContractBtns'
function Connect() {
  const { state } = useEth();
  const [value, setValue] = useState("?");


  const demo =
    <>
        <ContractBtns setValue={setValue} />
        <br></br>
        <strong >{value}</strong>
    </>;

  return (
    <div className="demo">
      {
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
            demo
      }
        
    </div>
  );
}

export default Connect;
