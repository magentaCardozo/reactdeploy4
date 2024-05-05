import React,{useEffect, useState} from 'react'
import axios from 'axios'

const useCheckConnection=(url,look)=>{

    const [isConnectedH2, setIsConnectedH2]=useState(false)

    useEffect(() => {
    axios.get(url,{
        withCredentials: true
      })
        .then(response => {

        return response.data;
        })
        .then(data => {
            if(data.status==="allowed"){
                setIsConnected(true)
            }
        })
        .catch(error => {
      if (error.response && error.response.status === 401) {
        console.error('bon');
        setIsConnected(false)
      } else {
        console.error('An error occurred:', error.message);
      }
    })
    .finally(()=>{
        console.log(isConnected)
    })
    }, [look]);

    
    return ({isConnectedH2,setIsConnectedH2})
}
export default  useCheckConnection
