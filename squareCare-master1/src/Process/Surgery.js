import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Grid from '@mui/joy/Grid';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';
import { Card ,CardOverflow,Input,Typography ,Box} from '@mui/joy';


const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
  ...theme.typography['body-sm'],
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
}));



export default function Surgery() {
    const [rows, setRows] = React.useState([]);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: 'ProcedureName', headerName: 'Procedure Name', width: 180, editable: true },
    
    {
      field: 'ScheduleDate',
      headerName: 'ScheduleDate Date',
      type: 'dateTime',
      width: 220,
      editable: true,
    },
    {
      field: 'room',
      headerName: 'Room Number',
      width: 220,
      editable: true,
      
    },
    {field: 'ConductName', headerName: 'Staff Name', width: 180, editable: true},
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
]
  return (
    <Card
      sx={{
        minHeight : 300,
        width: '87%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
        "--Card-padding" : "20px"
      }}
    >

    <CardOverflow
      sx={{
        minHeight : 300,
        width: '90%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
        "--Card-padding" : "20px"
      }}
    >
            <Typography level="h1" className="MuiTypography-root MuiTypography-inherit">Surgery </Typography>

    <Grid 
      container
      rowSpacing={1}
      columnSpacing={{ xs: 5, sm: 5, md: 5 }}
      sx={{ width: '85%' }}
      padding={5}
    >
      <Grid xs={5}>
      <Input placeholder="Room Number" size="lg"/>
      </Grid>
      <Grid xs={5}>
      <Input placeholder="Main Doctor Name" size="lg"/>
      </Grid>
      <Grid xs={5}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Pick date for surgery" slotProps={{ textField: { fullWidth: true } }}/>
      </DemoContainer>
    </LocalizationProvider>
      </Grid>
      <Grid xs={5}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker label="Pick time for surgert" slotProps={{ textField: { size: 'lg' ,fullWidth: true } }}/>
      </DemoContainer>
    </LocalizationProvider>
      </Grid>
      <Grid xs={5}>
      <Input placeholder="Staff Name" size="lg"/>
      </Grid>
      <Grid xs={5}>
      <Input placeholder="+" size="lg"/>
      </Grid>
    </Grid>
    
    </CardOverflow>
    </Card>
  );
}
