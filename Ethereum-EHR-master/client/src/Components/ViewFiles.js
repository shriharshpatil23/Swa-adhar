import React, { useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL , getStorage, listAll } from "firebase/storage";
import Filedownload from "./filedownload";
import { ReactComponent as UploadLogo } from './logo/UploadLogo.svg'
import { ReactComponent as SeeFilesText } from './logo/SeeFilesText.svg'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

// import ListIcon from '@mui/icons-material/List';
function ViewFiles( {account}) {

    const [FileNames, setFileNames] = useState([]);
    const [open, setOpen] = useState(false);



    const showFiles = () => {
        // Create a reference under which you want to list
        const listRef = ref(storage, `/${account}/`);
        setFileNames([]);
        // Find all the prefixes and items.
        listAll(listRef)
        .then((res) => {
            res.prefixes.forEach((folderRef) => {
            // All the prefixes under listRef.
            // You may call listAll() recursively on them.
            });
            res.items.forEach((itemRef) => {
                setFileNames(prevFileNames => [...prevFileNames, itemRef.name]);
                console.log(itemRef.name);
                
            // All the items under listRef.
            });
            setOpen(!open)
        }).catch((error) => {
            // Uh-oh, an error occurred!
        });
    }
    

    return (
        <div>

            <hr></hr>
            {/* <UploadLogo/> */}
            <br></br>
            <SeeFilesText onClick={showFiles} aria-controls="example-collapse-text" aria-expanded={open} cursor="pointer" />

            {/* <Button size="large" color="primary" variant="outlined" onClick={showFiles} >
                Click to see files
            </Button> */}

            <Collapse in={open}>
                <div id="example-collapse-text">
                    {
                        FileNames.map(item => <> <br></br> <Filedownload account = {account}  FileName = {item} />  </> )
                    }
                </div>
            </Collapse>

           

            {/* <button onClick={showFiles}> Click to see files  </button> */}
            {/* <br></br>
            {
                FileNames.map(item => <> <br></br> <Filedownload account = {account}  FileName = {item} />  </> )
            } */}
        </div>
    );
}

export default ViewFiles;
