import React, { useState } from "react";
import { storage } from "../firebaseConfig";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


function Filedownload({account , FileName}) {
    const handledownload = () => {
        console.log(account)
        console.log(FileName)
        const starsRef = ref(storage, `/${account}/${FileName}`);
        // Get the download URL
        getDownloadURL(starsRef)
        .then((url) => {
            console.log(url);
            window.open(url, '_blank', 'noreferrer');

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
            <button onClick={handledownload}> { FileName }</button>
        </div>
    );
}

export default Filedownload;
