import React, { useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL , getStorage, listAll } from "firebase/storage";
import {  Input, Upload,Icon, message, Row, Col, Tag, Card } from 'antd';

import Filedownload from "./filedownload";
import { ReactComponent as Doctorlogo } from './logo/doctorlogo.svg'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

// import ListIcon from '@mui/icons-material/List';
function GrantAccess( {account,contract}) {

    const [DoctorID, setDoctorID] = useState("");

    const handleInput = (event) => {
        setDoctorID(event.target.value)
    } 
 
    const GrantAccessFunction = () => {
        
        
        if(DoctorID){
            let res =  contract.methods.grantAccessToDoctor(DoctorID)
            .send({"from":account});
            
            if(res) {
                message.success('access successful');
                setDoctorID("");
            }
        }
    }
    

    return (
        <div>
            <hr></hr>
            <Doctorlogo/>
            <br></br>
            <br></br>
            <Input style={{width:"300px",borderRadius: "2px"}} value={DoctorID} placeholder="Doctor Address" onChange={handleInput}/>
            <br></br>
            <br></br>
                <Button variant="outline-info" onClick={GrantAccessFunction} >
                    Grant Access
                </Button>

        </div>
    );
}

export default GrantAccess;
