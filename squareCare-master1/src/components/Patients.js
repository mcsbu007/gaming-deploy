import React, { useState } from "react";
import {
  TextField,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Menu,
  MenuItem,
  IconButton,
  InputAdornment,
  TablePagination,
  Button,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import CreatePatient from "./createPatient";
const Patients = () => {
  function createData(name, id, dob, assignedDoctor, status) {
    return { name, id, dob, assignedDoctor, status };
  }

  const rows = [
    createData(
      "Ava Sterling",
      "159",
      "1/1/1991",
      "Dr. Liam Walsh",
      "Discharged"
    ),
    createData(
      "Milo Hawthorne",
      "237",
      "2/2/1992",
      "Dr. Sara Knight",
      "Discharged"
    ),
    createData("Sienna Vale", "262", "3/3/1993", "Dr. Alex Reed", "In-Patient"),
    createData("Jasper Reid", "305", "4/4/1994", "Dr. Alex Reed", "In-Patient"),
    createData(
      "Elara Wren",
      "356",
      "5/5/1995",
      "Dr. Emily Clarke",
      "Out-Patient"
    ),
    createData(
      "Declan Frost",
      "356",
      "6/6/1996",
      "Dr. Emily Clarke",
      "Emergency"
    ),
  ];
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");
  // Define the state for the current page and rows per page
  const [page, setPage] = useState(0); // Current page
  const [rowsPerPage, setRowsPerPage] = useState(5); // Rows per page
  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle change in pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage); // Page index is 0-based
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page to zero on rows per page change
  };

  const [newPatientOpen, setNewPatientOpen] = useState(false); // State for New Patient dialog
  // State for New Patient dialog
  const handleNewPatient = () => {
    setNewPatientOpen(true);
  };

  const handleNewPatientClose = () => {
    setNewPatientOpen(false);
  };

  // Function to return style based on the patient's status
  const getStatusStyle = (status) => {
    // Common styles for all status labels
    const commonStyles = {
      display: "block",
      margin: "auto",
      width: "100px", // Fixed width for all labels
      height: "25px", // Fixed height for all labels
      color: "black",
      borderRadius: "15px",
      fontSize: "0.8 rem", // Adjust font size as needed
      textAlign: "center",
      lineHeight: "25px",
    };
    switch (status) {
      case "Emergency":
        return {
          backgroundColor: "#FFB9B3",
          ...commonStyles,
        };
      case "Discharged":
        return {
          backgroundColor: "#ACECD5",
          ...commonStyles,
        };
      case "In-Patient":
        return {
          backgroundColor: "#FFD5B8",
          ...commonStyles,
        };
      case "Out-Patient":
        return {
          backgroundColor: "#FFF9AA",
          ...commonStyles,
        };
      default:
        return {
          backgroundColor: "gray",
          ...commonStyles,
        };
    }
  };

  return (
    <div className="account-wrapper">
      <Typography variant="h5">Patients</Typography>

      <div className="new-btn-div">
        <Button
          className="new-btn"
          onClick={handleNewPatient}
          sx={{
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            backgroundColor: "#5932EA",
            color: "white",
            "&:hover": {
              backgroundColor: "#4c2bd9",
            },
            "&:active": {
              backgroundColor: "#3f24b8",
            },
          }}
        >
          <AddIcon sx={{ mr: 1 }} />
          New Patient
        </Button>
      </div>

      {/** Search Field */}
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        placeholder="Search..."
        value={searchQuery}
        variant="outlined"
        className="accounts-search"
        sx={{ my: 1, width: "100%" }}
        size="small"
        onChange={handleSearchChange}
        onBlur={() => setSearchQuery("")}
      />
      {/* Table of accounts */}
      <TableContainer
        className="account-table-container"
        sx={{ borderRadius: 3, boxShadow: 3 }}
      >
        <Table>
          <TableHead sx={{ bgcolor: "#F7F7F7", boxShadow: 1 }}>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">DOB</TableCell>
              <TableCell align="center">Assigned Doctor</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>

          {/** For UI showing */}
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.dob}</TableCell>
                  <TableCell align="center">{row.assignedDoctor}</TableCell>
                  <TableCell align="center">
                    <label style={getStatusStyle(row.status)}>
                      {row.status}
                    </label>
                  </TableCell>
                  <TableCell>
                    <IconButton>
                      <MoreVert />
                    </IconButton>
                    {/* Menu for edit/delete options */}
                    <Menu>
                      <MenuItem>Edit</MenuItem>
                      <MenuItem>Delete</MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* TablePagination component */}
      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 15]} // Allow users to choose 5, 10, or 15 rows per page
      />
      <CreatePatient onClose={handleNewPatientClose} open={newPatientOpen} />
    </div>
  );
};

export default Patients;
