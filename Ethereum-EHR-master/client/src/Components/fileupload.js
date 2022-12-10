import React, { useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ReactComponent as UploadLogo } from './logo/UploadLogo.svg'
import "./fileupload.css"
import { Button } from '@material-ui/core';

function Fileupload({account}) {

    
    // var contract =this.props.contract['OPT'];
    // var accounts =this.props.Acc;

    // console.log(accounts)

    // State to store uploaded file
    const [file, setFile] = useState("");

    // progress
    const [percent, setPercent] = useState(0);

    // Handle file upload event and update state
    function handleChange(event) {
        setFile(event.target.files[0]);
    }
    
    const handleUpload = () => {
        if (!file) {
            alert("Please upload a File first!");
        }
        //var publicKey = this.accounts[0];
        const storageRef = ref(storage, `/${account}/${file.name}`);


        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                });
            }
        );
    };

    return (
        <div class="FileUploadDIv">
            <hr></hr>
            <UploadLogo/>

            <br></br>
            <br></br>
            <br></br>

            <div class="file-upload">
            <div class="file-select">
                <div class="file-select-button" id="fileName">Choose File</div>
                <div class="file-select-name" id="noFile">{file.name}</div> 

                <input type="file" name="chooseFile" onChange={handleChange} id="chooseFile"/>
            </div>
            </div>
            <br></br>
            <br></br>
            <Button  color="primary" variant="outlined" bg="dark" onClick={handleUpload} >
                Upload File
            </Button>
            <p class="Filepercentage">{percent} "% done"</p>
        </div>
    );
}

export default Fileupload;
