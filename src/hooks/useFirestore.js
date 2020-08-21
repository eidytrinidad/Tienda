import {useState,useEffect} from 'react'
import {projectFirestore} from '../firebase/config'



function useFirestore(collection) {

    const [docs,setDocs] = useState([])

    useEffect(() => {
        
       const unsub= projectFirestore.collection(collection)
        .orderBy("nombre", "asc")
        .onSnapshot((snap)=>{
            let documents =[];
            snap.forEach(doc=>{
                documents.push({...doc.data(),id:doc.id})
            })
            setDocs(documents);
      
        })
        
        return()=>unsub();
    }, [])

    return {docs};
}

export default useFirestore
