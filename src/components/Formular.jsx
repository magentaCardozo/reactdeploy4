import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import usePostArticle from '../services/api';
import FileBase64 from 'react-file-base64';
import MessageBox from './MessageBox';
import { ArticleContext } from '../App';
import WaitComponent from './WaitComponent';
import {
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  makeStyles,
  TextareaAutosize,
  Dialog,
  DialogContent,
  Typography,

} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 200,
    backgroundColor: 'white',
    marginBottom: theme.spacing(2),
    color: 'black', // Set the text color to black
  },
  textarea: {
    resize: 'vertical',
    width: '100%',
    padding: theme.spacing(1),
    fontFamily: theme.typography.fontFamily,
    backgroundColor: 'white',
    color: 'black', // Set the text color to black
  },
  container: {
    padding: theme.spacing(3),
    backgroundColor: 'white',
    color: 'black', // Set the text color to black
  },
}));

const categories = [
  {
    key:'montre',
    value:'montre'
  },{
    key:'accessoire',
    value:'accessoire'
  },{
    key:'Offre premium',
    value:'cosmetique'
  },{
    key:'telephone',
    value:'telephone'
  }
];
const Formular = () => {
  const classes = useStyles();
  if(!useContext(ArticleContext)){
      return(<LoadingPage></LoadingPage>)
  }
  const {setLook}=useContext(ArticleContext)

  const [success, setSuccess]=useState(false)
  const [incomplete, SetIsIncomplete]=useState(false)
  const [envoyer, setEnvoyer]=useState(false)
  const [chargement,setChargement]=useState(false)
  const [formData, setFormData] = useState({
    name: '',
    longName: '',
    categorie: '', 
    slug: '',
    price: "",
    pricePromo: "",
    image: [],
  });

const handleFileUpload = (files) => {
  const base64Files = files.map((file) => file.base64);
  
  setFormData({
    ...formData,
    image: base64Files,
  });
};

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit =  (event) => {
    event.preventDefault();
    if (formData.categorie==="" ||formData.name==="" ||formData.longName==="" ||formData.price===""||formData.pricePromo==="" ||formData.slug===""||formData.image.length==0  ){
      SetIsIncomplete(true)
      return
    }
    setChargement(true)
axios.post("https://chez-ardi.onrender.com/articles/", formData,{withCredentials:true})
  .then(res => {
    // console.log(res.status);
    if (res.status === 200) {
      setFormData({
        name: '',
        longName: '',
        categorie: '', 
        slug: '',
        price: "",
        pricePromo: "",
        image: [],
      })
      setLook(previous=>!previous)
      setSuccess(true);
      setEnvoyer(true)
      setChargement(false)
      // console.log(success)
    } else {
      setSuccess(false);
    }
  })
  .catch(err => {
    console.error("Error:", err);
  });


    // console.log(formData);
  };

  return (
    <Container className={classes.container}>
      <MessageBox message={"Article ajouté avec succes !"} open={success} onClose={()=>{setSuccess(false)}}></MessageBox>
      <MessageBox message={"Veuillez remplir tous les champs !"} open={incomplete} onClose={()=>{SetIsIncomplete(false)}}></MessageBox>
      {success && WaitComponent}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nom"
              name="name"
              fullWidth
              value={formData.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Nom complet"
              name="longName"
              fullWidth
              value={formData.longName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel>Categorie</InputLabel>
              <Select
                name="categorie" // Corrected: changed 'categorie' to 'categorie'
                value={formData.categorie}
                onChange={handleInputChange}
              >
                {categories.map((categorie) => (
                  <MenuItem key={categorie.key} value={categorie.value}>
                    {categorie.key}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              className={classes.textarea}
              name="slug"
              minRows={3}
              placeholder="à propos"
              value={formData.slug}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Prix promotionnel"
              name="price"
              type="number"
              fullWidth
              value={formData.price}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Prix sans promotion"
              name="pricePromo"
              type="number"
              fullWidth
              value={formData.pricePromo}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FileBase64 multiple={true} onDone={handleFileUpload} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Envoyer
            </Button>
          </Grid>
        </Grid>
      </form>
        <Dialog open={chargement} onClose={()=>setChargement(false)}>
        <DialogContent>
          <Typography variant="body1">
            chargement ....
          </Typography>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Formular;