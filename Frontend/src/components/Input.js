import React from 'react'
import {TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

  const useStyles = makeStyles((theme) => ({
  TextField: {
    background: '#283A46 0% 0% no-repeat padding-box',
    border: '1px solid #356680 !important',
    borderRadius: '10px',
    opacity: '1',
    width: '319px'
  },
  }));
export default function Input(props) {
    const{name,label,value,error=null,onChange,style}=props
    const classes = useStyles();
    return (
        <TextField
        name={name}
        variant="outlined"
        inputProps={{ style: {color: 'white'}}}
        value={value}
        onChange={onChange}
        className={classes.TextField}
        style={style}
        // error
        // helperText="Required"
        {...(error && {error:true,helperText:error})}
        />
    )
}
