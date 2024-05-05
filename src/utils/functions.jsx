import axios from "axios";
import { useEffect, useState } from "react";

function useGetApi(url,look){
    const [articles,setArticles]=useState("")
    const [isLoading, setIsloading]=useState(true)
    const [isError, setIsError]=useState(false)
    useEffect(()=>{
        axios.get(url)
        .then(response=>{
            if (response.status>=400 && response.status<500){

                setIsError(true)
                setIsloading(false)
                return
            }
            return response.data

        })
        .then(data=>{
            if (data){
                setArticles(data);
                setIsloading(false)
            }
        })
        .catch(err=>{
                setIsError(true)
                setIsloading(false)
                // console.error(err)
        })
    },[look])

    return ({isError,isLoading,articles, setIsError, setIsloading, setArticles})
}
export default useGetApi