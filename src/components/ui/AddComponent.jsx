import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import { RoutesList } from '../../data/Routes';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    zIndex: theme.zIndex.tooltip + 1,
  },
}));

const AddComponent = () => {
    const navigate=useNavigate();
  const classes = useStyles();

  const handleAddClick = () => {
    // Handle the add functionality here
    navigate(`${RoutesList.REGISTER}`)
    console.log('Add button clicked');
  };

  return (
    <Fab
      color="primary"
      aria-label="add"
      className={classes.fab}
      onClick={handleAddClick}
    >
      <AddIcon />
    </Fab>
  );
};

export default AddComponent;