import React, { useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL , getStorage, listAll } from "firebase/storage";
import Filedownload from "./filedownload";
function ViewFiles( {account}) {

    const [FileNames, setFileNames] = useState([]);


    
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
        }).catch((error) => {
            // Uh-oh, an error occurred!
        });
    }
    

    return (
        <div>

            <hr></hr>
            <div class="wrapper">
                <div class="container">
                    <div class="button">
                    <div class="file"></div>
                    <div class="file2"></div>
                    </div>
                </div>
            </div>
            <button onClick={showFiles}> Click to see files  </button>
            <br></br>
            {
                FileNames.map(item => <> <br></br> <Filedownload account = {account}  FileName = {item} />  </> )
            }
        </div>
    );
}

export default ViewFiles;
