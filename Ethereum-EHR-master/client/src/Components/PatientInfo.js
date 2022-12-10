import React, { useState , useEffect } from "react";
import {  Input, Upload,Icon, message, Row, Col, Tag, Card } from 'antd';

import { ReactComponent as Doctorlogo } from './logo/doctorlogo.svg'
import Button from 'react-bootstrap/Button';

// import ListIcon from '@mui/icons-material/List';
function PatientInfoTab( {account,contract}) {
    const [Name,setName] = useState("");
    const [Age,setAge] = useState(0);
    //var Name,Age;
    useEffect( () =>  {
        async function fetchData() {
            let res =  await contract.methods.getPatientInfo().call({from :account});
            console.log(res);
            setName(res[0]);
            setAge(res[2]);    
        }
        fetchData();
    },[])
    return (
        <div>
                <Button variant="outline-info"  >
                    Name : {Name}
                </Button>
            <br></br>
                <Button variant="outline-info" >
                    Age : {Age}
                </Button>

        </div>
    );
}

export default PatientInfoTab;
