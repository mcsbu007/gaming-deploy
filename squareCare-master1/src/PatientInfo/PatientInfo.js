import { Card, Typography} from "@mui/joy";
import {Stack,Button} from '@mui/material'
import { Cancel, Delete,Edit, RampRight } from "@mui/icons-material";
import Profile from "./Profile";
import LabDisplay from "./LabDisplay";
import MedDisplay from "./MedDisplay";
import ProcessDisplay from "./ProcessDisplay";


function PatientInfo() {
  return (
    <div className="PatientInfo">
    <Card
    sx={{
        
        
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
        "--Card-padding" : "20px"
      }}>
    
      <Typography level="h1" className="MuiTypography-root MuiTypography-inherit" 
      
      >Patient Details</Typography>
      <Profile/>
      <LabDisplay/>
      <MedDisplay/>
      <ProcessDisplay/>
      {/* <Stack direction="row" spacing={2} justifyContent="flex-end">
      <Button variant="contained" startIcon={<Delete />}color = "error">
        Delete
      </Button>
      <Button variant="contained" endIcon={<Edit/>}>
        Save
      </Button>
    </Stack> */}
      </Card>
    </div>
  );
}

export default PatientInfo;