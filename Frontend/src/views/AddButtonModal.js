import React,{useState,useEffect} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
//import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import {useForm,Form} from "../components/useForm";
import Input from "../components/Input"
import DatePicker from "../components/DatePicker"
import axios from "axios";
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
const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  const useStyles = makeStyles((theme) => ({
   leftDiv:{
     float:'left',
     width:'50%',
   },
   rightDiv:{
    float:'right',
    width:'50%',
  },
  addText: {
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
  addButton: {
    width: "82px",
    height: "45px",
    background: "#14AFF1 0% 0% no-repeat padding-box !important",
    borderRadius: "10px",
    opacity: "1",
    marginBottom: "25px",
    marginRight: "30px",
    marginTop: '10px'
  },
  addText: {
    font: 'normal normal normal 18px Ubuntu',
    letterSpacing: '0px',
    color: '#FFFFFF',
    opacity: '1',
  },
  clearButton: {
    width: '92px',
    height: '45px',
    border: '1px solid #14AFF1',
    borderRadius: '10px',
    opacity: '1',
    marginRight: "25px",
    marginTop: '10px',
    marginBottom: "25px",
  },
  clearText: {
    textAlign: 'left',
    font: 'normal normal normal 16px Ubuntu',
    letterSpacing: '0px',
    color: '#FFFFFF',
    opacity: '1',
  },
  cancelButton:{
width: '60px',
height: '23px',
marginRight:'756px'
  },
  cancelText:{
    textAlign: 'left',
font: 'normal normal normal 18px Ubuntu',
letterSpacing: '0px',
color: '#14AFF1',
opacity: '1',
  }
  }));
const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

const initialFValues={
    customer_name:'',
    customer_num:'',
    invoice_id:'',
    invoice_amt:'',
    due_date:new Date(),
    notes:'',
}
export default function FormDialog({openAddModal,closeAddModal}) {
  const classes = useStyles();
  const validate=(fieldValues=values)=>{
      let temp={...errors}
      if('customer_name' in fieldValues)
      temp.customer_name=fieldValues.customer_name?"":"Required"
      if('customer_num' in fieldValues)
      temp.customer_num=fieldValues.customer_num?"":"Required"
      if('invoice_id' in fieldValues)
      temp.invoice_id=fieldValues.invoice_id?"":"Required"
      if('invoice_amt' in fieldValues)
      temp.invoice_amt=fieldValues.invoice_amt?"":"Required"
      setErrors({
          ...temp
      })
      if(fieldValues==values)
      return Object.values(temp).every(x=>x=="")
  }
  const{
      values,
        setValues,
        handleInputChange,
        errors,
        setErrors,
        resetForm,
  }= useForm(initialFValues,true,validate);
  const handleSubmit=()=>{
      if(validate())
      {
        {
            var year=values.due_date.getUTCFullYear().toString();
            var month=values.due_date.getUTCMonth()+1;
            var date=values.due_date.getDate();
            if(month<10)
                month="0"+month;
            else
                month=month.toString();
            if(date<10)
                date="0"+date;
            else
                date=date.toString();
            var res=year+month+date;
            console.log("Inside Modal:",res);
            try{
            axios.get(`http://localhost:8080/1805428/dp.do?method=add&cust_name=${values.customer_name}&cust_no=${values.customer_num}&invoice_no=${values.invoice_id}&due_date=${res}&invoice_amount=${values.invoice_amt}`)
            .then(
                (response)=>{
                    console.log(response);
                }
            )
            closeAddModal();
          }catch(error){
              console.log(error);
          }
        }
    }
  }

  return (
    <MuiThemeProvider theme={theme}>
    <div>
      <Dialog
        open={openAddModal}
        onClose={closeAddModal}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            backgroundColor: '#2A3E4C',
            height: '509px',
            width: '1106px',
            maxWidth:'none'
          },
        }}
      >
        <DialogTitle  className={classes.addText} onClose={closeAddModal} id="form-dialog-title" >Add Invoice
        </DialogTitle>
        <DialogContent dividers>
            <Form onSubmit={handleSubmit}>
          <div className={classes.leftDiv}>
            <div >
          <DialogContentText className={classes.texts}>
            Customer Name<span style={{color: "#FF5B5B"}}> *</span> :
          <Input name="customer_name" value={values.customer_name} onChange={handleInputChange} error={errors.customer_name} style={{ marginLeft: "28px" }}/>
         </DialogContentText>
         </div>
         <div style={{marginTop:"10px"}}>
          <DialogContentText className={classes.texts}>
            Customer No.<span style={{color: "#FF5B5B"}}> *</span> :
          <Input name="customer_num" value={values.customer_num} onChange={handleInputChange} error={errors.customer_num} style={{ marginLeft: "44px" }}/>
          </DialogContentText>
          </div>
          <div style={{marginTop:"10px"}}>
          <DialogContentText className={classes.texts}>
            Invoice ID<span style={{color: "#FF5B5B"}}> *</span> :
          <Input name="invoice_id" value={values.invoice_id} onChange={handleInputChange} error={errors.invoice_id} style={{ marginLeft: "69px" }}/>
          </DialogContentText>
          </div>
          <div style={{marginTop:"10px"}}>
          <DialogContentText className={classes.texts}>
            Invoice Amount<span style={{color: "#FF5B5B"}}> *</span> :
          <Input name="invoice_amt" value={values.invoice_amt} onChange={handleInputChange} error={errors.invoice_amt} style={{ marginLeft: "25px" }}/>
          </DialogContentText>
          </div>
          </div>
          <div className={classes.rightDiv}>
            <div>
          <DialogContentText className={classes.texts}>
            Due Date <span style={{color: "#FF5B5B"}}> *</span>:
          <DatePicker name="due_date" value={values.due_date} onChange={handleInputChange} error={errors.due_date} style={{marginLeft:"81px"}}/>
          </DialogContentText>
          </div>
          <div>
          <DialogContentText className={classes.texts}>
            Notes :
          <TextField
            inputProps={{ style: { color: 'white' } }}
            id="outlined-multiline-static"
            multiline
            rows={8}
            variant="outlined"
            className={classes.TextField}
            onChange={handleInputChange}
            value={values.notes}
            name="notes"
            style={{marginLeft:"120px"}}

        />
          </DialogContentText>
          </div>
          </div>
          </Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeAddModal} color="primary" className={classes.cancelButton}>
            <span className={classes.cancelText}>Cancel</span>
          </Button>
          <Button onClick={resetForm} color="primary" className={classes.clearButton}>
            <span className={classes.clearText}>CLEAR</span>
          </Button>
          <Button type="submit " onClick={handleSubmit} color="primary" className={classes.addButton}>
            <span className={classes.addText}>ADD</span>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </MuiThemeProvider>
  );
}
