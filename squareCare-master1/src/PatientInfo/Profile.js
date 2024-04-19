import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Card,Typography } from '@mui/joy';


export default function Profile() {
  return (
    <Card  
    sx={{ width: '98%' }} >
        <Grid container direction = "column" justifyContent="space-evenly"
  alignItems="flex-start">
    <Typography  fontSize="xl" sx={{ mb: 0.5 }} fontWeight= "bold">
    Profile
  </Typography>
    <Grid container direction="row" justifyContent="space-evenly">
    <Grid >
          <Typography  fontSize="xl" textAlign='left'>
    Name : John Smith 
  </Typography>
        </Grid>
        <Grid >
        <Typography  fontSize="xl" sx={{ mb: 0.5 }} align='right'>
    Temperature
  </Typography>
        </Grid>
        <Grid >
        <Typography  fontSize="xl" sx={{ mb: 0.5 }}>
    Blood Pressure 
  </Typography>
        </Grid>
        <Grid >
        <Typography  fontSize="xl" sx={{ mb: 0.5 }}>
    Pulse Rate
  </Typography>
        </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="space-evenly">
    <Grid >
          <Typography  fontSize="xl" textAlign='left'>
    Gender : male 
  </Typography>
        </Grid>
        <Grid >
        <Typography  fontSize="xl" sx={{ mb: 0.5 }} color="success" fontFamily="monospace"  level="title-lg">
        98° F
  </Typography>
        </Grid>
        <Grid >
        <Typography  fontSize="xl" sx={{ mb: 0.5 }} color="success" fontFamily="monospace"  level="title-lg">
    125/85 
  </Typography>
        </Grid>
        <Grid >
        <Typography  fontSize="xl" sx={{ mb: 0.5 }} color="success" fontFamily="monospace"  level="title-lg">
     68 
  </Typography>
        </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="space-evenly">
    <Grid >
          <Typography  fontSize="xl" textAlign='left'>
    Height : 170 cm  
  </Typography>
        </Grid>
        <Grid >
        <Typography  fontSize="xl" sx={{ mb: 0.5 }}>
        Weight : 100kg
  </Typography>
        </Grid>
        <Grid >
        <Typography  fontSize="xl" sx={{ mb: 0.5 }}>
    Doctor : John Locker 
  </Typography>
        </Grid>
        <Grid >
        <Typography  fontSize="xl" sx={{ mb: 0.5 }}>
     Room : 100  
  </Typography>
        </Grid>
        </Grid>

      </Grid>

    </Card>
  );
}
