import React, { useState, useContext, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ArticleContext } from '../App';
import AddComponent from '../components/ui/AddComponent';
import { RoutesList } from '../data/Routes';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoadingPage from '../components/LoadingPage';
import WaitComponent from '../components/WaitComponent';

import {
  Container,
  Grid,
  Paper,
  Typography,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import axios from 'axios';
import { FaLaptopHouse } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    minHeight: '85vh',
    paddingTop: '3.3rem',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',



  },
}));

const ArticlesPage = () => {
    const { pathname } = useLocation();

    let identifiant=useRef(null);

        useEffect(() => {
      window.scrollTo({top:0, behavior:'instant'});
    }, [pathname]);
    const navigate=useNavigate()
const {articles, setLook, isConnected} = useContext(ArticleContext)
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteLoading,setDeleteLoading]=useState(false)
  const [chargement, setChargement]=useState(false)
  const [id, setId]=useState(null)

  const handleEditClick=()=>{
    navigate(`${RoutesList.EDITARTICLE}`)
  }
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDeleteClick = () => {
    setOpenDeleteDialog(true);
    setId(val)
  };

  const handleDeleteDialogClose = () => {
    setOpenDeleteDialog(false);
  };
  const handleDeleteDialogAction = () => {
    setDeleteLoading(true)
    setOpenDeleteDialog(false);
    setChargement(true)
    axios.delete(`https://chez-ardi.onrender.com/articles/${identifiant.current}`,{withCredentials:true})
    .then(response=>{
        if (response.status===200){
            // console.log("success")
            setDeleteLoading(false)
            setChargement(false)
            setLook(p=>!p)
        }
    })
    .catch(err=>{
        console.error("error")
    })
  };

  const filteredArticles = articles.filter((article) =>
    article.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  useEffect(()=>{
    if(!isConnected){
      navigate(RoutesList.Login)
      return
    }
  },[isConnected])
  return (
    <Container maxWidth="md" className={classes.root}>
      {deleteLoading && <WaitComponent></WaitComponent>}
      <TextField
        label="chercher un article"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"
      />
      <Grid container spacing={2}>
      <AddComponent></AddComponent>
        {filteredArticles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Paper elevation={3} className={classes.paper}>
              <img src={article.image} alt={article.name} height="300px" width="200px"/>
              <Typography variant="h6" gutterBottom>
                {article.name}
              </Typography>
              <Typography variant="caption" gutterBottom>
                {article.longName}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {article.price+' $'}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {article.pricePromo+' $'}
              </Typography>
                <Link className="link" to={`${RoutesList.EDITARTICLE}${article.id}`} >
                
              <IconButton aria-label="Edit" >
                <Edit />
              </IconButton>
                </Link>
              <IconButton aria-label="Delete" onClick={() => {setOpenDeleteDialog(true);
                                                            identifiant.current=article.id
                                                            // console.log(identifiant.current)
                                                            }
                                                    }>
                <Delete />
              </IconButton>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Dialog open={openDeleteDialog} onClose={handleDeleteDialogClose}>
        <DialogTitle>Supprimer un article</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Voulez vous vraiment supprimer ?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleDeleteDialogAction} color="secondary">
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
            <Dialog open={chargement}>
        <DialogContent>
          <Typography variant="body1">
            chargement ....
          </Typography>
        </DialogContent>
      </Dialog>

    </Container>
  );
};

export default ArticlesPage;