import axios from "axios";
import { useEffect } from "react";

// const API=axios.create({baseURL:"http://localhost:3000"})

// export const fetchArticles=API.get('/images/')

export default function usePostArticle(url, data){
    useEffect(()=>{
        axios.post(url,data)
    },[])
    return
    
}