import React, { useContext, useEffect } from 'react'
import Register from './Register'
import { ArticleContext } from '../App'
import { useNavigate } from 'react-router-dom';
import { RoutesList } from '../data/Routes';

const AddArticle = () => {
  const navigate=useNavigate()
  const {isConnected}=useContext(ArticleContext)
  useEffect(()=>{

    if (!isConnected){
      navigate(RoutesList.Login)
      return
    }
  },[isConnected])
  return (
    <div>
        <Register></Register>
      
    </div>
  )
}

export default AddArticle
