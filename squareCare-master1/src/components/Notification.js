import React, {useState} from 'react';
import { List, ListItem, ListItemIcon, ListItemText, IconButton, Typography, Button, Box, Divider, Pagination } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import DoneIcon from '@mui/icons-material/Done';
import { Fullscreen } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { DataGrid } from "@mui/x-data-grid";
import { TextField,TableContainer,Table } from '@mui/material';
import Sidebar from "../components/SideBar2";

const notifications = [
    { id: 1, type: 'Doctor', name: 'Meg Griffin', message: 'has left you a review.', date: 'March 1, 2023' },
    { id: 2, type: 'Nurse', name: 'Cleveland Brown', message: 'has left you a notification.', date: 'February 26, 2023' },
    { id: 3, type: 'Technician', name: 'Glenn Quagmire', message: 'updated their schedule.', date: 'March 3, 2023' },
    { id: 4, type: 'Receptionist', name: 'Joe Swanson', message: 'added a new appointment.', date: 'March 2, 2023' },
    { id: 5, type: 'Administrator', name: 'Bonnie Swanson', message: 'approved your leave request.', date: 'February 28, 2023' },
    { id: 6, type: 'Surgeon', name: 'Lois Griffin', message: 'completed the operation successfully.', date: 'March 4, 2023' },
    { id: 7, type: 'Pharmacist', name: 'Chris Griffin', message: 'has updated medication list.', date: 'March 5, 2023' },
    { id: 8, type: 'Nurse', name: 'Herbert', message: 'completed patient rounds.', date: 'March 3, 2023' },
    { id: 9, type: 'Doctor', name: 'Bruce', message: 'published a new research paper.', date: 'February 27, 2023' },
    { id: 10, type: 'Technician', name: 'Mort Goldman', message: 'has fixed the equipment.', date: 'March 2, 2023' },
    { id: 11, type: 'Receptionist', name: 'Tom Tucker', message: 'updated office hours.', date: 'March 1, 2023' },
    { id: 12, type: 'Doctor', name: 'Diane Simmons', message: 'is on a conference leave.', date: 'February 25, 2023' },
  ];

const avatarColors = {
    'Doctor': '#74BDCB',
    'Nurse': '#EFE7BC',
    'Technician': '#E7F2F8',
    'Hospital staff': '#FFA384 ',
    'System admin': 'grey'
};


const Notification = () =>{
    const [notifs, setNotifs] = useState(notifications);
    const [notifsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastNotif = currentPage * notifsPerPage;
    const indexOfFirstNotif = indexOfLastNotif - notifsPerPage;
    const currentNotifs = notifs.slice(indexOfFirstNotif, indexOfLastNotif);
    const [open, setOpen] = useState(false);

    const totalPages = Math.ceil(notifs.length / notifsPerPage);

    const handleChangePage = (event, newPage) => {
      setCurrentPage(newPage);
    };

    const getInitials = (name) =>{
      return name.split(' ').map((n)=>n[0]).join('').toUpperCase();
    }
    const markAsRead = (id) => {
        // Here you would handle marking the notification as read
        setNotifs(notifs.filter(notif => notif.id !== id));
      };

    return(
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
       <Box sx={{ width: '80%', bgcolor: 'background.paper'}}>
        <h1>Notification</h1>
        <Box sx={{ display: 'flex', justifyContent:"flex-end" }}>
        <StyledButton variant="text">Mark All as Read</StyledButton>
        </Box>
        <List >
            {currentNotifs.map((notif,index)=>(
                <React.Fragment key={notif.id}>
                <ListItem 
                secondaryAction={
                    <IconButton edge="end" aria-label="mark as read" onClick={() => markAsRead(notif.id)}>
                    <DoneIcon />
                    </IconButton>
                }
                >
                    <ListItemIcon>
                    <Avatar className="halfspace" sx={{ marginLeft: 10, bgcolor: avatarColors[notif.type] || '#B5E5CF',  width: 90, height: 90 }}>{getInitials(notif.name)}</Avatar>
                    </ListItemIcon>
                    <ListItemText primary={`${notif.type} ${notif.name}`} 
                    secondary={`${notif.message} - ${notif.date}`} 
                    primaryTypographyProps={{ mb: 0.5 }} 
                    sx={{padding: '20px' }} />
                </ListItem>
                </React.Fragment>
            ))}

        
        </List>
        {/* Pagination can be controlled with state if needed */}
        {/* <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
             <Pagination count={10} color="primary" /> 
        </Box> */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Pagination count={totalPages} page={currentPage} onChange={handleChangePage} color="primary" />
          </Box>

    
    
      </Box>
    
    </main>
    )
 
    
}


const StyledButton = styled(Button)({
    backgroundColor: '#CFD0E9', // Light purple background color
    color: 'black', // Text color
    padding: '3px 10px', // Button padding
    borderRadius: '10px', // Fully rounded edges
    textTransform: 'none', // Prevent uppercase text
        '&:hover': {
      backgroundColor: '#C7C8D9', // Slightly darker color on hover
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: '#5932EA',
      },
    },
  });


export default Notification;
