import * as React from 'react';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import { Chip, Stack } from '@mui/material';



const Singlesearchcard=( {data})=>{


    return(
        <div>

<Card sx={{ display: 'flex' }}>

     <CardMedia
    
        component="img"
        sx={{ width: 161 }}
        image= {data.Poster !== "N/A" ? data.Poster : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"}
        alt="Live from space album cover"
      />
    
           <CardContent >
           <Stack  spacing={1} alignItems="flex-start" justifyContent="flex-start">
          
          <Typography component="div" variant="h5">
            {data.Title}
          </Typography>
       
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Release {data.Year}
          </Typography>
          <Chip label={data.Type} />
       </Stack>
    </CardContent>
    </Card>
     
        </div>
    );
}
    
export default Singlesearchcard;
