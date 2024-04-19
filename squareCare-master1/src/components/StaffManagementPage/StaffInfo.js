/*Junlin Lei */

/*MUI*/
import { Avatar, Button } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';

import React from 'react';

function StaffInfo() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClikClose = () => {
        setOpen(false);
    }
    
    /*color palette*/
    const theme = createTheme({
        palette: {
            primary: {
                main: '#5932EA',
            }
        },
    });

    return (
        <>
            <div className="StaffInfo col-9 col-s-11 ">
                <div className="StaffInfo-AvatarContainer">
                    <Avatar className="halfspace" sx={{marginLeft: 10, bgcolor: 'black', width: 90, height: 90 }}>JS</Avatar>
                    <div className="halfspace">
                        <h1>Dr.John Smith</h1>
                        <p className="StaffInfo-AvatarContainer-DepartmentText">Cardiologist</p>
                    </div>
                </div>
                <div className="StaffInfo-InfoContainer">
                    <pre className="StaffInfo-InfoText">
                        Department:  orthopedics{"\n"}
                        Gender: Male{"\n"}
                        Address: 1 Stony brook road, Stony brook, NY 11794{"\n"}
                        Date of Birth: 01/01/1970{"\n"}
                        Phone: 1234567890{"\n"}
                    </pre>
                </div>
                <div className="StaffInfo-ButtonContainer">
                    <div className="StaffInfo-ButtonContainer-Btn">
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary" endIcon={<BorderColorIcon />} onClick={handleClickOpen}>
                                Edit
                            </Button>
                            <React.Fragment>
                                <Dialog
                                    open={open}
                                    onClose={handleClikClose}
                                    PaperProps={{
                                        component: 'form',
                                        onSubmit: (event) => {
                                            event.preventDefault();
                                            handleClikClose();
                                        },
                                    }}
                                >
                                    <DialogTitle>Personal Information</DialogTitle>
                                    <IconButton
                                        aria-label="close"
                                        onClick={handleClikClose}
                                        sx={{
                                            position: 'absolute',
                                            right: 8,
                                            top: 8,
                                            color: (theme) => theme.palette.grey[500],
                                        }}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                    <DialogContent>
                                        <TextField
                                            autoFocus
                                            required
                                            margin="dense"
                                            id="department"
                                            name="Department"
                                            label="Department"
                                            fullWidth
                                            variant="standard"
                                        />
                                        <TextField
                                            autoFocus
                                            required
                                            margin="dense"
                                            id="gender"
                                            name="Gender"
                                            label="Gender"
                                            fullWidth
                                            variant="standard"
                                        />
                                        <TextField
                                            autoFocus
                                            required
                                            margin="dense"
                                            id="address"
                                            name="Address"
                                            label="Address"
                                            fullWidth
                                            variant="standard"
                                        />
                                        <TextField
                                            autoFocus
                                            required
                                            margin="dense"
                                            id="dateOfBirth"
                                            name="Date Of Birth"
                                            type="date"
                                            fullWidth
                                            variant="standard"
                                        />
                                        <TextField
                                            autoFocus
                                            required
                                            margin="dense"
                                            id="phone"
                                            name="Phone"
                                            label="Phone"
                                            type="number"
                                            fullWidth
                                            variant="standard"
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button type="submit" variant='contained'>Save</Button>
                                    </DialogActions>
                                </Dialog>
                            </React.Fragment>
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StaffInfo;