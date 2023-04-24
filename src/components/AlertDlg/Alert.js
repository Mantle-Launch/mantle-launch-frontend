//Default
import React from "react";

//Style

//Dialog
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

//Input
import Button from '@mui/material/Button';

//Icon
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export default function AlertDialog(props) {

  const { onClose, open, alerttext} = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"><NotificationsActiveIcon color="info"/>{"Defi Site Says"}<NotificationsActiveIcon color="info"/></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* <Danger><p>{alerttext}</p></Danger> */}
            {alerttext}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="secondary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
  );
}