import React , {useState} from 'react'
import {ref,uploadBytesResumable,getDownloadURL } from 'firebase/storage'
import {storage,db} from '../Firebase'
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
export default function UploadDocuments() {
    const [formData, setFormData] = useState({ 
        title : "",
        document : ""
    })
    const [progress, setProgress] = useState(0);
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const handleDocumentChange=(e)=>{
        setFormData({...formData,document:e.target.files[0]});
    }
    const handlePublish=()=>{
        if(!formData.title || !formData.document){
            alert("Please Fill the options");
            return ;
        }
        const storageRef = ref(storage,'/documents/${Date.now()}${formData.document.name}');
        const upload_doc = uploadBytesResumable(storageRef, formData.document);
        upload_doc.on("state_changed",
        (snapshot) => {
          const progressPercent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progressPercent);
        },
        (err) => {
          console.log(err);
        },
        () => {
          setFormData({
            Title: "",
            Document: "",
          });
  
          getDownloadURL(upload_doc.snapshot.ref).then((url) => {
            const articleRef = collection(db, "Articles");
            addDoc(articleRef, {
              Title: formData.title,
              DocumentUrls: url,
            //   createdAt: Timestamp.now().toDate(),
            //   createdBy:user.displayName,
            //   userId:user.uid,
            //   likes:[],
            //   comments:[]
            })
              .then(() => {
                toast("Document added successfully", { type: "success" });
                setProgress(0);
              })
              .catch((err) => {
                toast("Error adding Document", { type: "error" });
              });
          });
        }
      );
    };

  return (
    <div className="border p-3 mt-3  bg-light " style={{position:"fixed"}}>
        <h2>Upload Document</h2>
        <label htmlFor="">Title</label>
        <input type="text" 
        name="title" className="form-control"
        onChange={(e) => handleChange(e)}
        />

        {/* Document */}
        <label htmlFor="">Document</label>
        <input type="file" 
        name="document" 
        className="form-control"
        onChange={(e) => handleDocumentChange(e)}/>

    {progress === 0 ? null : (
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped mt-2"
                style={{ width: `${progress}%` }}
              >
                {`uploading image ${progress}%`}
              </div>
            </div>
          )}
          <button
            className="form-control btn-primary mt-2"
            onClick={handlePublish}
          >Upload</button>
    </div>
  )
}
