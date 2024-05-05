import React ,{useEffect, useContext}from 'react'
import FormularEdit from '../components/FormularEdit'
import { useLocation, useParams, useNavigate} from 'react-router-dom'
import { RoutesList } from '../data/Routes'
import { ArticleContext } from '../App'
const EditArticle = () => {
  const navigate=useNavigate()
  const {isConnected}=useContext(ArticleContext)
    const {id}=useParams()
    const pathName=useLocation()
    useEffect(()=>{
        scroll({
            top:0,
            behavior:"smooth"
        })
    }, [pathName])
    useEffect(()=>{
      if(!isConnected){
        navigate(RoutesList.Login)
        return
      }
    },[isConnected])
  return (
    <div style={{paddingTop:"3.3rem"}}>
        <FormularEdit id={id} ></FormularEdit>
      
    </div>
  )
}

export default EditArticle
