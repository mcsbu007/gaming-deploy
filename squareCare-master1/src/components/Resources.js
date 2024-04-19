import React, { useContext, useEffect, useState } from "react";
import {
  Typography,
  Button,
  TextField,
  TableContainer,
  Table,
  Chip,
  Box
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Sidebar from "../components/SideBar2";
import axios from 'axios';
import { API_URL } from "../App";

const Resources = () => {
    // State for search query
    const [searchQuery, setSearchQuery] = useState("");
    const [selectionModel, setSelectionModel] = useState([]);
    const [createNewRoom, setNewRoom] = useState(false);
    const [showAddRoom, setAddRoom] = useState(false);
    const [open, setOpen] = useState(false);
    const [rooms,setRooms] = useState([]);
    

    const openAddRoom =() =>{
      setAddRoom(true);
    }

    const closeAddRoom = ()=>{
      setAddRoom(false);
    }
    const handleEditRoom = () => {
        setNewRoom(true);
    };
  
    // Function to handle search input change
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };

    // Function to handle deletion of selected rows
    // const handleDeleteSelected = () => {
    //   setRows((prevRows) => prevRows.filter((row) => !selectionModel.includes(row.id)));
    // };

    const handleDeleteSelected = async () => {
      console.log(selectionModel);
      if (selectionModel.length === 0) {
        alert('No rooms selected');
        return;
      }
      try {
        const response = await axios.post("/auth/deleteRooms", { ids: selectionModel });
        if (response.status === 200) {
          console.log('Rooms deleted successfully');
          // Update local state to reflect the deletion
          setRooms(prevRooms => prevRooms.filter(room => !selectionModel.includes(room._id)));
          setSelectionModel([]); // Clear selection after deletion
        } else {
          console.error('Failed to delete rooms');
        }
      } catch (error) {
        console.error('Error deleting rooms', error);
      }
    };
    


    const columns = [
      { field: "roomType", headerName: "Room Type", flex: 1 },
      { field: "roomNumber", headerName: "Room Number", flex: 1 },
      { field: "roomDepartment", headerName: "roomDepartment", flex: 1 },
      {
        field: 'filledStatus',
        headerName: 'Filled Status',
        width: 130,
        renderCell: (params) => {
          const status = params.value;
          const getColor = (status) => {
            // if (status.includes('Full')) return 'error';
            // if (status.includes('Empty')) return 'success';
            return 'warning';
          };
          return <Chip label={status} color={getColor(status)} />;
        }
      },
      { field: "date",headerName: "Date", sortable: false, flex: 1,},
    ];
  
    // const rows = [
    //   { id: 0, roomType: 'Patient Room', roomNumber: '200', department: 'cardiology', filledStatus: '2 out of 5', date: 'May 5, 4:20 PM' },
    //   { id: 1, roomType: 'Patient Room', roomNumber: '201', department: 'cardiology', filledStatus: 'Full', date: 'May 6, 4:20 PM' },
    //   { id: 2, roomType: 'Emergency Room', roomNumber: '300', department: 'emergency', filledStatus: 'Empty', date: 'May 7, 4:20 PM' },
    //   { id: 3, roomType: 'Patient Room', roomNumber: '202', department: 'oncology', filledStatus: '1 out of 5', date: 'May 8, 4:20 PM' },
     
    // ];
    
    // From Ming
    // use url from Auth
    
    useEffect(()=>{
      const fetchRooms = async () =>{
        try{
          const response = await axios.get("/auth/allRoom");
          // console.log( response.data);
          setRooms(response.data);
          // console.log(rooms)
        }catch (error){
          console.error('Failed to fetch rooms', error);
        }
      }
      fetchRooms();
    },[])

    const handleSelectionChange = async (newSelectionModel) => {
      console.log("Selected Rows IDs: ", newSelectionModel);
      const newSelectionModelIds = newSelectionModel.map(id => id.toString());
      setSelectionModel(newSelectionModelIds);
  

    };

    return (
      <main style={{ display: "flex",overflow: "hidden" }}>
      <div
        style={{
          width: open ? 240 : 100,
          transition: "width 0.3s ease-in-out",
          backgroundColor: "#FAFBFF",
        }}
        className="drawer-wrapper"
      >
        <Sidebar open={open} setOpen={setOpen} />
      </div>
      <div className="account-wrapper" style={{ flexGrow: 1, minWidth: '300px'}}>
        {/*Display "Resources" on top Left */}
        <Typography variant="h5">Resources</Typography>
  
        {/* New Room button*/}
        <Box sx={{ display: 'flex', justifyContent:"flex-end" }}>
          <ColorButton
            variant="contained"
            color="primary"
            sx={{ mr: 2 }}
            onClick={openAddRoom}
          >
            Add Room
          </ColorButton>
          <Box> {showAddRoom && <CreateAddRoomWindow closeWindow={closeAddRoom} setRooms={setRooms}></CreateAddRoomWindow>}</Box>
          <ColorButton
            variant="contained"
            color="primary"
            style={{ display: "block" }}
            onClick={handleEditRoom}
          >
            Edit room
          </ColorButton>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleDeleteSelected}
          disabled={selectionModel.length === 0}
          startIcon={<DeleteIcon />}
        >
        </Button>
        {/* ... other buttons like Add Room or Edit Room */}
         </Box>
        
  
        {/**Table of Patients */}
        <TableContainer className="account-table-container">
          {/** Search Field */}
          <TextField
            label="Search..."
            value={searchQuery}
            variant="outlined"
            className="accounts-search"
            sx={{ my: 1, width: "100%" }}
            size="small"
            onChange={handleSearchChange}
          />
          <Table>
            <DataGrid
              className="data-table"
              rows={rooms}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10, 15]}
              checkboxSelection


              onRowSelectionModelChange={(newSelectionModel) => {
                handleSelectionChange(newSelectionModel);
              }}
              rowSelectionModel={selectionModel}
              getRowId={(row) => row._id.toString()}


              autoHeight
            />
          </Table>
        </TableContainer>
      </div>
      </main>



    );
  };

  const CreateAddRoomWindow =({closeWindow, setRooms }) =>{
    const [nextId, setNextId] = useState(0);
    const [roomData,setRoomData] = useState({
      roomType:'',
      roomNumber: '',
      roomDepartment: ''
    })

    const handleChange = (event) =>{
      const {name,value}=event.target;
      setRoomData(prevState => ({
        ...prevState,
        [name]: value
    }));
  }


    

    const handleSubmit = async(event)=>{
      event.preventDefault();
      const roomWithId = { ...roomData, id: nextId };
      console.log("Sending data:", roomData);  // Check what data is being sent
      try{
        const response=await axios.post("/auth/addRoom",roomData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if(response.status ===200){
          console.log('Room added successfully', response.data);
          setRooms(prevRooms => [...prevRooms, { ...roomWithId, _id: response.data._id }]); // Assume response.data contains the ID from the server
          setNextId(prevId => prevId + 1); // Increment the nextId
          closeWindow();
        }else {
          console.error('Failed to add room', response.data)
        }
      } catch(error){
        console.error('Error sending room data', error);
      }
    }


    return(
        <Modal
        open={true} // Controlled by your state
        onClose={closeWindow}
        aria-labelledby="add-room-modal-title"
        aria-describedby="add-room-form-description"
    >
        <Box sx={style}>
            <IconButton
                aria-label="close"
                onClick={closeWindow}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
            <CloseIcon />
            </IconButton>
            <Typography id="add-room-modal-title" variant="h6" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
                Add Room
            </Typography>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}
            >
                <TextField 
                  name="roomType"
                  label="Room Type" 
                  placeholder="Room Type" 
                  fullWidth 
                  value={roomData.roomType}
                  onChange={handleChange}
                />
                <TextField
                  name="roomNumber"
                  label="Room Number"
                  placeholder="101"
                  fullWidth
                  value={roomData.roomNumber}
                  onChange={handleChange}
                    />
                <TextField
                  name="roomDepartment"
                  label="Department"
                  placeholder="Radiology"
                  fullWidth
                  value={roomData.roomDepartment}
                  onChange={handleChange}
                />
                <Box gridColumn="span 1" >
                    <Button variant="contained" type="submit" fullWidth sx={{ mt: 3 }}>
                        Add Now
                    </Button>
                </Box>
            </Box>
        </Box>
    </Modal>
    )
}

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    outline: 'none' // Removes the default focus outline
};

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#5932EA"),
    backgroundColor: "#5932EA",
    '&:hover': {
        backgroundColor: "#5932EA",
    },
    }));

 
  
  export default Resources;
