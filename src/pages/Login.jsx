import axios from "axios";
import React, { useEffect, useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import Error from "./Error";

const Login = () => {
    let user;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isInvalid, setIsInvalid]=useState(false)
    const [isIError, setIsError]=useState(false)
    const [wrongInfo, setWrongInfo]=useState(false)
    const [isConnected, setIsConnected]=useState(false)
    
    useEffect(()=>{
      const cookies=document.cookie
      setIsConnected(cookies.includes("jwtpat"))
      console.log("#####"+isConnected)
  },[])

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!username || !password || password.length<6){
        setIsInvalid(true)
        return
    }else{setIsInvalid(false)}
    // Perform login logic here with username and password
    console.log("Username:", username);
    console.log("Password:", password);
    axios.post("http://localhost:3000/users/login",{name:username,password})
        .then(function (response){
            console.log('==========='+response)
            // if(response.status===402){
            //     setWrongInfo(true)
            //     return
            // }
            // if (response.status>=400 && response.status<500){

            //     setIsError(true)
            //     return
            // }
            return response.data
        })
        .then(data=>{
            if (!data){
                setIsConnected(false)
                return
            }
            user=data;
            setIsConnected(true)
            
        })
        .catch(err=>{
            setIsError(false)
        })
  };
  if(isIError){
    return <Error/>
  }

  if (!isConnected){

      return (
        <div style={{padding:"2rem", marginTop:"3.3rem", minHeight:'80vh'}}>
          <h2>Connexion</h2>
          <form onSubmit={handleSubmit}>
             {isInvalid && <div style={{color: "#ff0000",fontSize: "16px",fontWeight:"700", marginTop: "8px",}}> veuillez entrer entrer toutes les données ! le mot de passe doit avoir plus de 6 caractères </div>}
             {wrongInfo && <div style={{color: "#ff0000",fontSize: "16px",fontWeight:"700", marginTop: "8px",}}> Verifier le mot de passe et le nom d'utilisateur </div>}
            <FormGroup>
              <Label for="username">Nom:</Label>
              <Input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Mot de passe:</Label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </FormGroup>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      );
  }else{
    return <div style={{padding:"2rem", marginTop:"3.3rem", minHeight:'80vh'}}>
        salut
    </div>
  }
};

export default Login;