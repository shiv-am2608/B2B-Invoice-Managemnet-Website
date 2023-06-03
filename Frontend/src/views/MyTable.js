import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
      MuiTableCell: {
          root: {  
              borderBottomColor : '#273D49CC ',
          },
      },
  },
});
const useStyles = makeStyles({
  container: {
    maxWidth: "100%",
    maxHeight: 739
  }
});

export default function InceptionTable({ responseData, scrollabeTarget }) {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
    <TableContainer
      component={Paper}
      className={classes.container}
      id="scrollableDiv"
    >
      <Table stickyHeader aria-label="sticky table" style={{margin:'0px'}}>
        <TableHead style={{width:'100%'}}>
          <TableRow size="size">
            <TableCell align="left">Customer Name</TableCell>
            <TableCell align="center">Customer #</TableCell>
            <TableCell align="center">Invoice #</TableCell>
            <TableCell align="center">Invoice Amount</TableCell>
            <TableCell align="center">Due Date</TableCell>
            <TableCell align="center">Delay</TableCell>
            <TableCell align="center">Predicted Aging Bucket</TableCell>
            <TableCell align="center">Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          {responseData.map((row, index) => (
            <TableRow key={index}>
              <TableCell align="left">{row.name_customer}</TableCell>
              <TableCell align="center">{row.cust_number}</TableCell>
              <TableCell align="center">{row.doc_id}</TableCell>
              <TableCell align="center">{row.total_open_amount}</TableCell>
              <TableCell align="center">{row.due_in_date}</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </MuiThemeProvider>
  );
}
