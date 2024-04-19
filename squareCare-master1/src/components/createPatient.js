import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  TextField,
  Typography,
  DialogTitle,
  DialogContent,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Autocomplete,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const CreatePatient = ({ open, onClose, setAllAccounts }) => {
  // State for form input fields
  const initialState = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    bloodGroup: "",
    bloodPressure: "",
    temperature: "",
    pulse: "",
    assignedDoctor: "",
    status: "",
    email: "",
    phone: "",
    address: "",
  };

  // Array of doctors for the assigned doctor field
  const doctors = [
    { title: "Dr.Alex Reed" },
    { title: "Dr.Emily Clarke" },
    { title: "Dr.Liam Walsh" },
    { title: "Dr.Sara Knight" },
    { title: "Dr.James Howard" },
    { title: "Dr.Ella Morrison" },
    { title: "Dr.Noah Allen" },
    { title: "Dr.Sophia Hale" },
    { title: "Dr.Jacob Turner" },
    { title: "Dr.Ava Parker" },
    { title: "Dr.William Fisher" },
    { title: "Dr.Mia Davis" },
    { title: "Dr.Ethan Ward" },
  ];

  const [formData, setFormData] = useState(initialState);
  // Theme for the input fields
  const theme = createTheme({
    components: {
      MuiInput: {
        // For standard variant TextFields
        styleOverrides: {
          underline: {
            "&:before": { borderBottomColor: "gray" }, // Normal state
            "&:hover:not(.Mui-disabled):before": {
              borderBottomColor: "lightgray",
            }, // Hover state
            "&:after": { borderBottomColor: "#8771e6" }, // Focused state
          },
        },
      },
      MuiOutlinedInput: {
        // For outlined variant TextFields and Selects
        styleOverrides: {
          root: {
            "& fieldset": { borderColor: "gray" }, // Normal state
            "&:hover fieldset": { borderColor: "lightgray" }, // Hover state
            "&.Mui-focused fieldset": { borderColor: "#8771e6 !important" }, // Focused state
          },
        },
      },
      MuiInputLabel: {
        // To ensure the label color matches when focused
        styleOverrides: {
          root: {
            "&.Mui-focused": { color: "#8771e6" }, // Label color when the input is focused
          },
        },
      },
    },
  });

  // Function to handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle phone number input change
  const handlePhoneChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Remove all non-digit characters
      const digits = value.replace(/\D/g, "");

      // Slice the digits into parts and join with dashes
      const formattedNumber = digits
        .slice(0, 10) // Ensure we only use the first 10 digits
        .replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
        .trim();

      // Update the state with the formatted number
      setFormData({ ...formData, [name]: formattedNumber });
    } else {
      // Handle changes for other inputs normally
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    console.log(formData);
  };

  const [error, setError] = useState("");

  // Function to prepend zero to single digit numbers
  const prependZero = (number) =>
    number < 10 ? `0${number}` : number.toString();

  // Function to handle form input change
  const handleBloodGroupChange = (e) => {
    let { name, value } = e.target;

    if (name === "bloodGroup") {
      // Convert to uppercase and restrict to letters, '+', and '-'
      value = value.toUpperCase().replace(/[^A-Z+-]/gi, "");

      setFormData({ ...formData, [name]: value });
    } else {
      // For other fields, just update the state as usual
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{ width: "70%", height: "100%", margin: "auto" }}
    >
      <DialogTitle>New Patient</DialogTitle>
      <ThemeProvider theme={theme}>
        <DialogContent>
          <Typography className="error-message">{error}</Typography>
          <Box component="form" sx={{ mt: 1 }}>
            {/* Flex container for FirstName, LastName, and Gender */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                marginBottom: 2,
              }}
            >
              <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                variant="standard"
                required
                sx={{ flex: 1, borderColor: "#8771e6" }} // Adjust flex value as needed
              />
              <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                variant="standard"
                required
                sx={{ flex: 1 }} // Adjust flex value as needed
              />
              <Box sx={{ flex: 1 }}>
                {/* Adjust flex value as needed */}
                <FormControl fullWidth required variant="standard">
                  <InputLabel>Gender</InputLabel>
                  <Select
                    name="gender" // Ensure name attribute is set for handleChange to work
                    value={formData.gender}
                    label="Gender"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                type="date"
                helperText="Date Of Birth"
                name="dateOfBirth"
                variant="outlined"
                margin="normal"
                inputProps={{
                  max: `${new Date().getFullYear()}-${prependZero(
                    new Date().getMonth() + 1
                  )}-${prependZero(new Date().getDate())}`,
                  min: `${new Date().getFullYear() - 300}-${prependZero(
                    new Date().getMonth() + 1
                  )}-${prependZero(new Date().getDate())}`,
                }}
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                sx={{ flex: 1 }}
              />

              <TextField
                label="Blood Group"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleBloodGroupChange}
                variant="outlined"
                margin="normal"
                required
                sx={{ flex: 1 }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
              <TextField
                label="Blood Pressure"
                name="bloodPressure"
                value={formData.bloodPressure}
                onChange={handleChange}
                variant="standard"
                margin="normal"
                required
                sx={{ flex: 1 }}
              />
              <TextField
                label="Temperature"
                name="temperature"
                value={formData.temperature}
                onChange={handleChange}
                variant="standard"
                margin="normal"
                required
                sx={{ flex: 1 }}
              />
              <TextField
                label="Pulse"
                name="pulse"
                value={formData.pulse}
                onChange={handleChange}
                variant="standard"
                margin="normal"
                required
                sx={{ flex: 1 }}
              />
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <FormControl
                fullWidth
                margin="normal"
                variant="outlined"
                sx={{ flex: 1 }}
              >
                <Autocomplete
                  freeSolo
                  options={doctors.map((option) => option.title)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Assigned Doctor"
                      name="assignedDoctor"
                      value={formData.assignedDoctor}
                      onChange={handleChange}
                      required
                    />
                  )}
                />
              </FormControl>
              <FormControl
                fullWidth
                margin="normal"
                variant="outlined"
                sx={{ flex: 1 }}
              >
                <InputLabel>Status</InputLabel>
                <Select
                  required
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  label="Status"
                >
                  <MenuItem value="discharged">Discharged</MenuItem>
                  <MenuItem value="inpatient">In-Patient</MenuItem>
                  <MenuItem value="outpatient">Out-Patient</MenuItem>
                  <MenuItem value="emergency">Emergency</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="standard"
                margin="normal"
                fullWidth
                inputProps={{
                  pattern: "[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+\\.com",
                }}
                sx={{ flex: 1 }}
              />
              <TextField
                type="tel"
                label="Phone"
                inputProps={{ pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}" }}
                name="phone"
                variant="standard"
                margin="normal"
                value={formData.phone}
                onChange={handlePhoneChange}
                required
                fullWidth
                sx={{ flex: 1 }}
              />
            </Box>

            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              variant="standard"
              margin="normal"
              fullWidth
            />
            <DialogActions>
              <Button
                className="confirm-btn"
                variant="contained"
                onClick={handleSubmit}
                sx={{
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
                Create
              </Button>
              <Button
                className="cancel-btn"
                variant="outlined"
                onClick={onClose}
                sx={{
                  color: "#5932EA",
                  borderColor: "#5932EA",
                }}
              >
                Cancel
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </ThemeProvider>
    </Dialog>
  );
};

export default CreatePatient;
