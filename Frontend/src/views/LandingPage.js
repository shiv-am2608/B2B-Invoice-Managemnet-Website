import logo from "../assets/companyLogo.svg"
import HRC from "../assets/logo.svg"
import React,{useEffect} from "react";
import '../App.css';
import { Button, InputBase } from '@material-ui/core';
import add from "../assets/add.svg"
import pen from "../assets/pen.svg"
import sub from "../assets/sub.svg"
import { makeStyles } from "@material-ui/core/styles";
import AddButtonModal from "../views/AddButtonModal";
import EditButtonModal from "../views/EditButtonModal";
import DeleteButtonModal from "../views/DeleteButtonModal";
import ViewCorrespondanceModal from "../views/ViewCorrespondanceModal";
import InfiniteScroll from "../views/InfiniteScroll";

const useStyles = makeStyles({
  searchBox: {
    top: '30px',
    left: '1490px',
    width: '340px',
    height: '45px',
    padding: '20px',
    background: '0% 0% no-repeat padding-box',
    border: '1px solid #356680 !important',
    borderRadius: '10px',
    opacity: '1',
    font: 'normal 18px/21px Ubuntu #97A1A9 !important',
  }
});
export default function LandingPage() {


  const classes = useStyles();
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openVC, setOpenVC] = React.useState(false);
  const handleAddClose = () => setOpenAdd(false);
  const handleEditClose = () => setOpenEdit(false);
  const handleDeleteClose = () => setOpenDelete(false);
  const handleVcClose = () => setOpenVC(false);
  return (
    <div>
      <div>
        <Button>
          <img src={logo} className="groupImage" />
        </Button>
      </div>
      <div className="companyName">
        ABC Products
        </div>
      <div>
        <img src={HRC} className="hrcLogo" />
      </div>
      <div className="invoicelist">
        Invoice List
        </div>
      <div className="grid">
        <Button className="predictButton">
          <span className="predict">Predict</span>
        </Button>
        <Button className="viewCButton" onClick={() => { setOpenVC(true); }}>
          <span className="viewC">View Correspondance</span>
        </Button>
        {openVC && (
          <ViewCorrespondanceModal openVcModal={openVC} closeVcModal={handleVcClose}/>
        )}
        <Button className="addButton" onClick={() => { setOpenAdd(true) }}>
          <img src={add} className="addPlus"></img>
          <span className="add">Add</span>
        </Button>
        {openAdd && (
          <AddButtonModal openAddModal={openAdd} closeAddModal={handleAddClose} />
        )}
        <Button className="editButton" onClick={() => { setOpenEdit(true); }}>
          <img src={pen} className="editPen"></img>
          <span className="edit">Edit</span>
        </Button>
        {openEdit && (
            <EditButtonModal openEditModal={openEdit} closeEditModal={handleEditClose}/>
          )}
        <Button className="deleteButton" onClick={() => { setOpenDelete(true); }}>
          <img src={sub} className="deleteSub"></img>
          <span className="delete">Delete</span>
        </Button>
        {openDelete && (
            <DeleteButtonModal openDeleteModal={openDelete} closeDeleteModal={handleDeleteClose} />
          )}
        <InputBase className={classes.searchBox} placeholder="Search by Invoice Number" variant="outlined" margin="none" inputProps={{ style: { color: 'white' } }}/>
        <InfiniteScroll />
      </div>
    </div>
  );
}
