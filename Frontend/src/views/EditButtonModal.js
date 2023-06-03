import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import '../App.css'

const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        "& $notchedOutline": {
          border: "#356680"
        },
        "&:hover $notchedOutline": {
          borderColor: "#356680"
        },
      }
    },
  }
});
const useStyles = makeStyles((theme) => ({
  saveButton: {
    width: "82px",
    height: "45px",
    background: "#14AFF1 0% 0% no-repeat padding-box !important",
    borderRadius: "10px",
    opacity: "1",
    marginBottom: "25px",
    marginRight: "30px",
    marginTop: '10px'
  },
  saveText: {
    font: 'normal normal normal 18px Ubuntu',
    letterSpacing: '0px',
    color: '#FFFFFF',
    opacity: '1',
  },
  editText: {
    font: 'normal normal normal 18px Ubuntu',
    letterSpacing: '0px',
    color: '#FFFFFF',
    opacity: '1',
  },
  texts: {
    textAlign: 'left',
    font: 'normal normal normal 20px/24px Ubunt',
    letterSpacing: '0.19px',
    color: '#97A1A9',
    opacity: '1'
  },
  TextField: {
    background: '#283A46 0% 0% no-repeat padding-box',
    border: '1px solid #356680 !important',
    borderRadius: '10px',
    opacity: '1',
    width: '319px'
  },
  resetButton: {
    width: '92px',
    height: '45px',
    border: '1px solid #14AFF1',
    borderRadius: '10px',
    opacity: '1',
    marginRight: "25px",
    marginTop: '10px',
    marginBottom: "25px",
  },
  resetText: {
    textAlign: 'left',
    font: 'normal normal normal 16px Ubuntu',
    letterSpacing: '0px',
    color: '#FFFFFF',
    opacity: '1',
  },
  cancelButton:{
width: '60px',
height: '23px',
marginRight:'190px'
  },
  cancelText:{
    textAlign: 'left',
font: 'normal normal normal 18px Ubuntu',
letterSpacing: '0px',
color: '#14AFF1',
opacity: '1',
  }
}));
export default function FormDialog({ openEditModal, closeEditModal }) {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Dialog
          open={openEditModal}
          onClose={closeEditModal}
          aria-labelledby="form-dialog-title"
          PaperProps={{
            style: {
              backgroundColor: '#2A3E4C',
              height: '511px',
              width: '543px'
            },
          }}
        >
          <DialogTitle className={classes.editText} id="form-dialog-title">Edit Invoice</DialogTitle>
          <DialogContent dividers>
            <div style={{ marginTop: '30px' }}>
              <DialogContentText className={classes.texts}>
                Invoice Amount:
          <TextField style={{ marginLeft: "28px" }} className={classes.TextField} id="outlined-basic" variant="outlined" inputProps={{ style: { color: 'white' } }} />
              </DialogContentText>
            </div>
            <div style={{ marginTop: '28px' }}>
              <DialogContentText className={classes.texts}>
                Notes :
            <TextField
                  style={{ marginLeft: "110px", height: '191px' }}
                  inputProps={{ style: { color: 'white' } }}
                  id="outlined-multiline-static"
                  multiline
                  rows={6}
                  variant="outlined"
                  className={classes.TextField}
                />
              </DialogContentText>
            </div>
          </DialogContent>

          <DialogActions>
          <Button color="primary" className={classes.cancelButton} onClick={closeEditModal}>
            <span className={classes.cancelText}>Cancel</span>
            </Button>
            <Button margin="none" className={classes.resetButton} onClick={closeEditModal} color="primary">
              <span className={classes.resetText}>Reset</span>
            </Button>
            <Button margin="none" className={classes.saveButton} onClick={closeEditModal} color="primary">
              <span className={classes.saveText}>Save</span>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </MuiThemeProvider>
  );
}
