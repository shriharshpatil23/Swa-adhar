import React, { useState } from "react";
import { storage } from "../firebaseConfig";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


function Filedownload() {
    const handledownload = () => {
        const starsRef = ref(storage, 'files/TE Interns Exp Letter (1).pdf');
        // Get the download URL
        getDownloadURL(starsRef)
        .then((url) => {
            console.log(url);
            // Insert url into an <img> tag to "download"
        })
        .catch((error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
            case 'storage/object-not-found':
                // File doesn't exist
                break;
            case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
            case 'storage/canceled':
                // User canceled the upload
                break;

            // ...

            case 'storage/unknown':
                // Unknown error occurred, inspect the server response
                break;
            }
        });


    };

    return (
        <div>
            <button onClick={handledownload}>download from firebase </button>
        </div>
    );
}

export default Filedownload;
