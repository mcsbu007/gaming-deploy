import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';


function Task() {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

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



    return (
        <>
            <h1 className="DS-Task-header">Task</h1>
            <ThemeProvider theme={theme}>
                <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
                    {[0, 1, 2, 3, 4].map((value) => {
                        const labelId = `checkbox-list-label-${value}`;

                        return (
                            <div className='DS-Task-Individual'>
                                <Button role={undefined} onClick={handleToggle(value)} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                </Button>
                                <TextField id="outlined-basic" variant="outlined"     sx={{
      "& fieldset": { border: 'none' },
    }}  />
                                <Button>
                                    <MoreVertIcon />
                                </Button>
                            </div>
                        );
                    })}
                </List>
            </ThemeProvider>
        </>
    )
}
export default Task;
