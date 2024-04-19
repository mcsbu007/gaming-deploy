import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Card,Typography } from '@mui/joy';



export default function LabDisplay() {


  return (
    <Card  
    sx={{ width: '98%' }} >
        <Typography  fontSize="xl" sx={{ mb: 0.5 }} fontWeight= "bold">
    Lab Result
  </Typography>

      
        <Grid container direction = "column" justifyContent="space-evenly"
  alignItems="center"
  sx = {{minHeight : 200 }}>
    
    <Grid >
          <Typography  fontSize = "xl" textAlign='left' style={{ whiteSpace: "pre-wrap" }} >
    MRI of the Cervical SPine Without Contrast           06/05/2010 </Typography>
        </Grid>
        <Grid >
        <Typography  fontSize="xl" sx={{ mb: 0.5 }} align='right' style={{ whiteSpace: "pre-wrap" }}>
        MRI of the Cervical SPine Without Contrast           04/05/2012 
  </Typography>
        </Grid>
        <Grid >
        <Typography  fontSize="xl" sx={{ mb: 0.5 }} style={{ whiteSpace: "pre-wrap" }}>
        MRI of the Cervical SPine Without Contrast           08/13/2013  
  </Typography>
        </Grid>
        <Grid >
        <Typography  fontSize="xl" sx={{ mb: 0.5 }} style={{ whiteSpace: "pre-wrap" }}>
        MRI of the Cervical SPine Without Contrast           07/01/2014 
  </Typography>
        </Grid>
    

      </Grid>
      
    </Card>
  );
}