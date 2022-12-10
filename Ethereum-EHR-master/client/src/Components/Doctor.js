
import React, { Component } from 'react';
import {  Row, Col, Card, Tag } from 'antd';
//import { connect } from "react-redux";
import DisplayPatient from "./display_patient";
import { ReactComponent as Doctorlogo} from './logo/doctorlogo.svg'
import { Button } from '@material-ui/core';
import PatientInfoTab from './PatientInfo';
class Doctor extends Component {

    constructor(props){
        super(props);
    }
    healthRecord =this.props.contract["OPT"];
    Acc =this.props.Acc;
    state = {
        name: "",
        patient_list: [],
        filesInfo:[],
        load_patient:""
    }

    componentDidMount(){
        this.loadDoctor();
    }

    

    async loadDoctor(){
        let res = await this.healthRecord.methods.getDoctorInfo().call({from :this.Acc[0]});
        this.setState({name:res[0],patient_list:res[2]});
    }

    render() {
        let { name, patient_list } = this.state;
        return (
            <div>
                
                <Row gutter={16} style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                    {/* <Col className='col-sm-10' span={10}>
                        <hr></hr>
                        <Doctorlogo/>
                        <br></br>
                        <br></br>
                        <br></br>
                            <Button variant="outline-info"  >
                                Name : {name}
                            </Button>
                        <br></br>
                        <br></br>
                    </Col> */}
                    <Col className='col-sm-10' span={10}>
                        <Card bordered={true} style={flexStyle}>
                            { 
                                patient_list.map((patient) => {
                                return <div>
                                    <PatientInfoTab
                                        account={patient}
                                        contract={this.healthRecord}
                                    />
                                    <Tag onClick={()=>this.setState({load_patient:patient})}>Click Here To View Files</Tag>
                                
                                </div>
                                }) 
                            }
                        </Card>
                        {/* {
                            patient_list.map(item => <> <br></br>   </> )
                        } */}
                        
                    </Col>
					<br/>
                    <Col className='col-sm-6' span={6} style={{width: "58%"}}>
                        {
                                this.state.load_patient ?
                                <div>Patients List<DisplayPatient contract ={this.healthRecord} Acc={this.Acc} patient_address={this.state.load_patient} /></div> :
                                <div>No Patients To Show</div>
                        }
                    </Col>
                </Row>
            </div>
        );
    }
}

const flexStyle = {
    display:"flex", 
    flexDirection:"column"
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth,
      global_vars: state.global_vars
    };
};

export default Doctor;
