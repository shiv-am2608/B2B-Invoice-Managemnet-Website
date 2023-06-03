import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
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
export default function DatePicker(props) {

    const { name,  value, onChange ,style} = props
    

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })
    const classes = useStyles();
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"

                format="dd/MM/yyyy"
                name={name}
                value={value}
                onChange={date =>onChange(convertToDefEventPara(name,date))}
                className={classes.TextField}
                style={style}
                autoOk="true"
            >
            </KeyboardDatePicker>
        </MuiPickersUtilsProvider>
    )
}