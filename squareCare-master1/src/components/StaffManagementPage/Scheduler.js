import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const eventList = [
    {
        from: new Date(2024, 3, 3, 0, 0, 45),
        to: new Date(2024, 4, 3, 12, 0, 45)
    },
    {
        from: new Date(2024, 5, 3, 12, 0, 45),
        to: new Date(2024, 3, 3, 1, 0, 45)
    }
];

function updateEvent() {
    eventList.map((e) => {
        createEvent(e);
    })
}

function createEvent(date) {
    /*total of second */
    var Hours = date.from.getHours();
    var Mins = date.from.getMinutes();
    var TotalSecond = Hours * 60 + Mins

    var leftPadding = 60;
    var timeslot = document.getElementById("timeSlot-daily");
    var header = document.getElementById("header");

    var viewportsizeTopBottom = (timeslot.scrollHeight + header.scrollHeight) * TotalSecond / (60 * 24);

    var x = timeslot.scrollLeft + leftPadding;
    var y = timeslot.scrollTop + header.scrollHeight + viewportsizeTopBottom;

    var newElement = document.createElement('Button');
    newElement.className = 'Scheduler-Container-Event';
    newElement.style.position = 'absolute';
    newElement.style.left = x + 'px';
    newElement.style.top = y + 'px';
    newElement.style.height = ((timeslot.scrollHeight + header.scrollHeight) * (((date.to.getHours() * 60 + date.to.getMinutes()) - (date.from.getHours() * 60 + date.from.getMinutes())) / (60 * 24))) + 'px';
    newElement.textContent = 'New Element';
    timeslot.appendChild(newElement);
}

document.onload = function () {
    updateEvent();
}

function createWeeklyEvent(date) {
}




function Scheduler() {
    /*color palette*/

    const theme = createTheme({
        palette: {
            primary: {
                main: "#5932EA",
            },
            secondary: {
                main: "#000000",
            }
        },
    });
    const [open, setOpen] = React.useState(false);
    const [events, setEvents] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        setOpen(false);
    }

    const handleDaily = () => {
        const daily = document.getElementById("timeSlot-daily");
        const weekly = document.getElementById("timeSlot-weekly");
        const roster = document.getElementById("timeSlot-roster");

        daily.classList.remove("close");
        weekly.classList.add("close");
        roster.classList.add("close");
    }

    const handleWeekly = () => {
        const daily = document.getElementById("timeSlot-daily");
        const weekly = document.getElementById("timeSlot-weekly");
        const roster = document.getElementById("timeSlot-roster");

        daily.classList.add("close");
        weekly.classList.remove("close");
        roster.classList.add("close");
    }

    const handleRoster = () => {
        const daily = document.getElementById("timeSlot-daily");
        const weekly = document.getElementById("timeSlot-weekly");
        const roster = document.getElementById("timeSlot-roster");

        daily.classList.add("close");
        weekly.classList.add("close");
        roster.classList.remove("close");
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    /*Fetch and retrive new event list after changes of event*/
    const fetchEvents = async () => {
        try {
            /*Change the route */
            //const response = await axios.get('/');
            //setEvents(response.data);
        }
        catch (error) {
            console.error("Error fetching event from server", error)
        }
    };

    const handleNewEventSubmit = async (e) => {
        e.preventDefault();
        try {
            //await axios.post("/",newEvent)
            //fetchEvents();
        } catch (error) {
            console.log("Error adding event:", error);
        }
    }

    const timeslot = ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12APM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"];
    const weekslot = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]

    return (
        <>
            <div className="Scheduler col-s-11">
                <div id="container" className="Scheduler-Container">
                    <div id="header" className="Scheduler-Header-Container">
                        <h1 className='Scheduler-Header'>Schedule</h1>
                        <div className='Scheduler-dropdown' style={{ float: "right" }}>
                            <IconButton size="large">
                                <MoreVertIcon fontSize="inherit"></MoreVertIcon>
                            </IconButton>
                            <div className="Scheduler-dropdownContent">
                                <ThemeProvider theme={theme}>
                                    <Button color="secondary" variant="text" fullWidth={true} onClick={handleDaily} >Daily</Button>
                                    <Button color="secondary" variant="text" onClick={handleWeekly}>Weekly</Button>
                                    <Button color="secondary" variant="text" onClick={handleRoster}>Roster</Button>
                                </ThemeProvider>
                            </div>
                        </div>
                    </div>
                    <div id="timeSlot-daily" >
                        {
                            timeslot.map((t) => (
                                <div className='Scheduler-Container-timediv'>
                                    <div className='Scheduler-Container-time'>{t}</div>
                                    <div className="Scheduler-Container-time-divider"></div>
                                </div>
                            ))
                        }
                    </div>

                    <div id="timeSlot-weekly" className="close">
                        <div className='Scheduler-weekly-Header'>
                            {
                                weekslot.map((t) => (
                                    <h1 className='Scheduler-weekly-Header-text'>{t}</h1>
                                ))
                            }
                        </div>
                        <div className='Scheduler-weekly-container'>
                            <div className='Scheduler-Container-timeleftbar'>
                                {
                                    timeslot.map((t) => (
                                        <div className='Scheduler-Container-timediv'>
                                            <div className='Scheduler-Container-time'>{t}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='Scheduler-rightbor-container'>
                                <div className="inline-block">1</div>
                                <div className="inline-block"></div>
                                <div className="inline-block"></div>
                                <div className="inline-block"></div>
                                <div className="inline-block"></div>
                                <div className="inline-block"></div>
                            </div>

                        </div>
                    </div>
                    <div id="timeSlot-roster" className="close">
                        <div className='Scheduler-weekly-Header'>
                            {
                                weekslot.map((t) => (
                                    <h1 className='Scheduler-weekly-Header-text'>{t}</h1>
                                ))
                            }
                        </div>
                        <div className='Scheduler-weekly-container'>
                            <div className='Scheduler-Container-timeleftbar'>
                                {
                                    timeslot.map((t) => (
                                        <div className='Scheduler-Container-timediv'>
                                            <div className='Scheduler-Container-time'>{t}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='Scheduler-rightbor-container'>
                                <div className="inline-block">1</div>
                                <div className="inline-block"></div>
                                <div className="inline-block"></div>
                                <div className="inline-block"></div>
                                <div className="inline-block"></div>
                                <div className="inline-block"></div>
                            </div>

                        </div>
                    </div>
                    <div className="Scheduler-Footer">
                        <div className="Scheduler-Btn-add">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <React.Fragment>
                                    <ThemeProvider theme={theme}>
                                        <IconButton
                                            aria-label="add"
                                            size="large"
                                            color="primary"
                                            onClick={handleClickOpen}
                                        >
                                            <AddCircleIcon fontSize="inherit" />
                                        </IconButton>

                                        <Dialog
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                            fullWidth maxWidth="sm"
                                            PaperProps={{ sx: { borderRadius: "25px" } }}
                                        >
                                            <Button color='primary' variant="text" onClick={handleClose} sx={{ marginLeft: "auto" }}>X</Button>
                                            <TextField inputProps={{ style: { textAlign: 'center', fontSize: "20px", fontWeight: "700" } }} sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }} variant="standard" />
                                            <DialogContent>
                                                <div className="Scheduler-Event-Header">From</div>
                                                <DesktopDateTimePicker sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }} />
                                                <div className="Scheduler-Event-Header">To</div>
                                                <DesktopDateTimePicker sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }} />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button style={{ margin: '0 auto', display: "flex" }} color="primary" variant="contained" autoFocus onClick={handleSave}>
                                                    Save
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </ThemeProvider>
                                </React.Fragment>
                            </LocalizationProvider>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Scheduler;

