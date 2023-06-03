import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles((theme) => ({
  deleteButton: {
    width: "101px",
    height: "45px",
    background: "#14AFF1 0% 0% no-repeat padding-box !important",
    borderRadius: "10px",
    opacity: "1",
    marginBottom:"25px",
    marginRight:"30px",
    marginTop:'10px'
  },
  deleteText: {
    font: 'normal normal normal 18px Ubuntu',
    letterSpacing: '0px',
    color: '#FFFFFF',
    opacity: '1',
  },
  cancelButton: {
    width: '100px',
    height: '45px',
    background: '#2C404E 0% 0% no-repeat padding-box',
    border: '1px solid #14AFF1',
    borderRadius: '10px',
    opacity: '1',
    marginRight:'25px',
    marginBottom:'25px',
    marginTop:'10px'
  }
}));
export default function FormDialog({openDeleteModal,closeDeleteModal}) {

  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={openDeleteModal}
        onClose={closeDeleteModal}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            backgroundColor: '#2A3E4C',
            height: '342px',
            width: '611px'
          },
        }}
      >
        <DialogTitle
          id="form-dialog-title"
          style={{ width: '217px', height: '31px', color: '#FFFFFF', font: 'normal normal normal 32px Ubuntu', letterSpacing: '0px' }}>
          Delete record(s)?
          </DialogTitle>
          
        <DialogContent dividers>
          <DialogContentText
            style={{ height: '95px', width: '531px' }}>
            <span className="deleteModalMessage">
              <br />
            You'll lose your record(s) after this action.We can't recover
            them once you delete.
              <br /><br />
            Are you sure you want to
            <span className="pd"> permanently delete</span> them?
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className={classes.cancelButton} onClick={closeDeleteModal}>
          <span className={classes.deleteText}>Cancel</span>
        </Button>
          <Button className={classes.deleteButton} onClick={closeDeleteModal} color="primary" >
            <span className={classes.deleteText}>Delete</span>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
