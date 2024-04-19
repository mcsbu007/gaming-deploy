import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Card,Typography } from '@mui/joy';


export default function MedDisplay() {
  return (
    <Card  
    sx={{ width: '98%' }} >
        <Typography  fontSize="xl" sx={{ mb: 0.5 }} fontWeight= "bold">
    Medicine
  </Typography>
        <Grid container direction = "column" justifyContent="space-evenly"
  alignItems="center"
  sx = {{minHeight : 300 }}>
    
    <Grid >
          <Typography  fontSize="xl" textAlign='left'  style={{ whiteSpace: "pre-wrap" }}>
    Cymbalta         2 pills/day     last one month           06/05/2010 </Typography>
        </Grid>
        <Grid >
        <Typography  fontSize="xl" sx={{ mb: 0.5 }} align='right' style={{ whiteSpace: "pre-wrap" }}>
        Cymbalta         3 pills/day     last two month           06/05/2012 
  </Typography>
        </Grid>
        <Grid >
        <Typography  fontSize="xl" sx={{ mb: 0.5 }} style={{ whiteSpace: "pre-wrap" }}>
        Cymbalta         4 pills/day     last three month           06/05/2014  
  </Typography>
        </Grid>
        <Grid >
        <Typography  fontSize="xl" sx={{ mb: 0.5 }} style={{ whiteSpace: "pre-wrap" }}>
        Cymbalta         2 pills/day     last four month           06/05/2016
  </Typography>
        </Grid>
    

      </Grid>

    </Card>
  );
}