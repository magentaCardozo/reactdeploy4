import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
  closeButton: {
    marginLeft: theme.spacing(1),
    color: theme.palette.primary.contrastText,
  },
  message: {
    marginBottom: theme.spacing(2),
  },
}));

const MessageBox = ({ open, onClose, title, message }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle disableTypography className={classes.title}>
        <Typography variant="h6">{title}</Typography>
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="body1" className={classes.message}>
          {message}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default MessageBox;