import React,{useContext} from 'react'
import Formular from '../components/Formular'
import { ArticleContext } from '../App'
import { RoutesList } from '../data/Routes'


const Register = () => {
  const {isConnected}=useContext(ArticleContext)


  return (
    <>
    <div style={{paddingTop:"3.3rem"}}>
        <Formular></Formular>
    </div>
    </>
  )
}

export default Register
