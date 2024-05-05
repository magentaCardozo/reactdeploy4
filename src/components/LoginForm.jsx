import React, { useState ,useContext, useEffect} from 'react';
import axios from 'axios';
import { ArticleContext } from '../App';
import {
  Container,
  TextField,
  Button,
  Grid,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  formField: {
    marginBottom: theme.spacing(2),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const [isInvalid, setIsInvalid]=useState(false)
  const [fail, setFail]=useState(false)
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });
  if(!useContext(ArticleContext)){
    return
  }
  const {setIsError,setLookCon}=useContext(ArticleContext)

  useEffect(()=>{
      const idTO=setTimeout(() => {
        setIsInvalid(false)
      }, 3000);
      return ()=>{
        clearTimeout(idTO)
      }
  },[isInvalid])
  useEffect(()=>{
      const idTO=setTimeout(() => {
        setFail(false)
      }, 3000);
      return ()=>{
        clearTimeout(idTO)
      }
  },[fail])

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!formData.name || !formData.password || formData.password.length<6){
        setIsInvalid(true)
        return
    }else{setIsInvalid(false)}
      console.log(formData)
    axios.post("https://chez-ardi.onrender.com/users/login",{name:formData.name,password:formData.password},
        { withCredentials: true })
        .then(function (response){
            return response.data
        })
        .then(data=>{
            if (!data){
              return
            }            
            localStorage.setItem("credential",data)
            console.log(data)
            console.log("*"+document.cookie)
            setLookCon(previous=>!previous)
        })
        .catch(err=>{
            setFail(true)
        })
  };


  return (
    <Container className={classes.container}>
      {isInvalid && <div style={{color:"red"}}>Verifier que tous les champs sont remplis et que le mot de passe contient au moins 6 caractère</div>}
      {fail && <div style={{color:"red"}}>Nom ou mot de passe invalide, vérifier</div>}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nom"
              name="name"
              fullWidth
              value={formData.name}
              onChange={handleInputChange}
              className={classes.formField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Mot de passe"
              name="password"
              type="password"
              fullWidth
              value={formData.password}
              onChange={handleInputChange}
              className={classes.formField}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default LoginForm;