import React , {useState, useEffect} from 'react'
import {db} from '../Firebase'
import { collection, query, onSnapshot } from 'firebase/firestore'

export default function Documents() {
    const [docs,setDocs] = useState([])
    useEffect(()=>{
        const docsRef = collection(db,"Documents");
        const q = query(docsRef);
        onSnapshot(q,(snapshot)=>{
            const docs = snapshot.docs.map((doc)=>({
                id : doc.id,
                ...doc.data(),
                
            }));
            setDocs(docs);
            console.log(docs);
        });
    },[]);
  return (
    <div>{   
             docs.length==0 ? (
                <p>No Documents Found!!!</p>
             ):(
                docs.map(({id,Title,DocumentUrls})=>(
                    <div className="border mt-3 p-3 bg-light" key={id}>
                        <div className="row">
                            <div className="col-3">
                                <img src={DocumentUrls} alt='Title' style={{height:180,width:180}}></img>
                            </div>
                            <div className="col-9 ps-3">
                                <h2>{Title}</h2>
                            </div>
                        </div>
                    </div>
                ))
                
             )
        
        }</div>
        
  )
}
