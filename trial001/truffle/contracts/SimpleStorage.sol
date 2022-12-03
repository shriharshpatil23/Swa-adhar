// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {
  

  struct Patient { 
    string name;
    string email;
    string phone_no;
    string aadharcard_no;
    address key;  
  }

  struct Doctor { 
    string name;
    string email;
    string phone_no;
    string aadharcard_no;
    string imr_no;
    address key;  
  }

  uint256 value;
  address[] all;
  Patient[] public allpatient;
  Doctor[] public alldoctor;


  function findUser() public view returns (uint256) {
    for(uint i=0;i<all.length;i++){
      if(msg.sender==all[i])
        return 1;
    }
    return 0;
  }

  

  function AddUser() public returns (uint256) {
    for(uint i=0;i<all.length;i++){
      if(msg.sender==all[i])
        return 0;
    }
    all.push(msg.sender);
    return 1;
  }


  function AddPatient(string memory _name , 
    string memory _email , 
    string memory _phone_no , 
    string memory _aadharcard_no 
     ) public returns (uint256) {
      if(findUser()==0){
        allpatient.push ( Patient(_name,_email,_phone_no,_aadharcard_no,msg.sender) );
        all.push(msg.sender);
        return 1;
      }
      return 0;
    }

    function IsPatient(int i) public view returns ( uint ) {        
        for(uint i=0;i<allpatient.length;i++){
            if(allpatient[i].key==msg.sender)
                return 1;
        }
        return 0;
    }
    // isPatient shivay getPatirnt call karu naye 
    function getPatient(int i) public view returns ( Patient memory) {        
        for(uint i=0;i<allpatient.length;i++){
            if(allpatient[i].key==msg.sender)
                return allpatient[i];
        }
    }

  function AddDoctor(string memory _name , 
    string memory _email , 
    string memory _phone_no , 
    string memory _aadharcard_no ,
    string memory _imr_no 

     ) public returns (uint256) {
      if(findUser()==0){
        alldoctor.push ( Doctor( _name,_email,_phone_no,_aadharcard_no,_imr_no,msg.sender) );
        all.push(msg.sender);
        return 1;
      }
      return 0;
    }

    function IsDoctor(int i) public view returns ( uint ) {        
        for(uint i=0;i<alldoctor.length;i++){
            if(alldoctor[i].key==msg.sender)
                return 1;
        }
        return 0;
    }
    // IsDoctor shivay getDoctor call karu naye 
    function getDoctor(int i) public view returns ( Doctor memory) {        
        for(uint i=0;i<alldoctor.length;i++){
            if(alldoctor[i].key==msg.sender)
                return alldoctor[i];
        }
    }

  function read() public view returns (uint256) {
    return value;
  }

  function write(uint256 newValue) public {
    value = newValue;
  }
}
