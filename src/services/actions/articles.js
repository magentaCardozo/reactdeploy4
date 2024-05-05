import * as api from '../api'

const fetchArticles=()=>(dispatch)=>{

    api.fetchArticles()
    .then(res=>{
        return res.data
    })
    // .catch(err=>console.log(err))
} 