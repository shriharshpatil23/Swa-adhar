import React, { useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL , getStorage, listAll } from "firebase/storage";
import {  Input, Upload,Icon, message, Row, Col, Tag, Card } from 'antd';
import { ReactComponent as PatientLogo} from './logo/patientlogo.svg'

import Filedownload from "./filedownload";
import { ReactComponent as Doctorlogo } from './logo/doctorlogo.svg'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

// import ListIcon from '@mui/icons-material/List';
function DisplayInfo( {account,contract}) {

    const [DoctorID, setFileNames] = useState("");
    const [name, setname] = useState("");
    const [age, setage] = useState(0);
    

    const loadPatient = () =>  {
        //console.log(contract);  
        let res = contract.methods.getPatientInfo().call({from :account});
        setname(res[0]);
        setage(res[2]);
        // this.setState({name:res[0],age:res[2],files:res[3],doctor_list:res[4]});
        // () => {
        //     //let  { files } = this.state;
        //     this.loadFiles();
        //     // this.getFileInfo("patient", files, "", (filesInfo) => {
        //     //     this.setState({filesInfo});
        //     // });
        // });
        //this.loadFiles();
      
    }
    
    loadPatient();
    return (
        <div>
            <hr></hr>
            <PatientLogo/>
            <br></br>
            <br></br>
            <Input style={{width:"300px",borderRadius: "2px"}} value={DoctorID} placeholder="Doctor Address"/>
            <br></br>
            <br></br>
                <Button variant="outline-info" disabled="true" >
                    Name : {name}
                </Button>
            <br></br>
                <Button variant="outline-info" disabled="true" >
                    Age : {age}
                </Button>

        </div>
    );
}

export default DisplayInfo;
