import axios from "axios";
import React, { useEffect, useState,useContext } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import Error from "./Error";
import LoginForm from "../components/LoginForm";
import { useLocation } from 'react-router-dom'
import { ArticleContext } from "../App";
import ArticlesPage from "./ArticlesPage";


const Login = () => {
    let user;
    const { pathname } = useLocation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isInvalid, setIsInvalid]=useState(false)
    const [isIError, setIsError]=useState(false)
    const [wrongInfo, setWrongInfo]=useState(false)
    if(!useContext(ArticleContext)){
      return
    }
    const {isConnected, setIsConnected,setLookCon}=useContext(ArticleContext)
    
      useEffect(() => {
      window.scrollTo({top:0, behavior:'instant'});
    }, [pathname]);
  //   useEffect(()=>{
  //     const cookies=document.cookie
  //     setIsConnected(cookies.includes("jwtpat"))
  //     console.log("#####"+isConnected)
  // },[])

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
          useEffect(()=>{
            const timeoutID=setTimeout(() => {
                setIsInvalid(false)
            }, 3000);
            return ()=>{
            clearTimeout(timeoutID)}
        },[isInvalid])




  if (!isConnected){
      return(
        <div style={{paddingTop:"3.3rem", minHeight:"75vh"}}>

          <LoginForm></LoginForm>
        </div>
      )

  }else{
    return <ArticlesPage></ArticlesPage>
  }
};

export default Login;