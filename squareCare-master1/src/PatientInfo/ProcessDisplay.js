import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Card,Link,Typography } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

export default function ProcessDisplay() {

  const navigate = useNavigate()

  const toProcess = () => {
    let path = "/process"
    navigate(path)
  }

  return (
    <Card  
    sx={{ width: '98%' }} >
        <Typography  fontSize="xl" sx={{ mb: 0.5 }} fontWeight= "bold">
    Treatment Process
  </Typography>
        <Grid container direction = "column" justifyContent="space-evenly"
  alignItems="center"
        sx = {{minHeight : 300 }}
        >
    
    <Grid >
          <Typography  fontSize="xl" textAlign='left'  style={{ whiteSpace: "pre-wrap" }}
          component={Link}
          onClick = {toProcess}
          >
    Head & Neck Surgery    in pre progress (2/5 done) schedule surgery time  07/12/2024   3:00 pm  </Typography>
        </Grid>
        
    

      </Grid>

    </Card>
  );
}