import React from 'react';
import {Grid} from '@mui/material';

function GridFormatter({format,content}) {
  return (
    <Grid lg={format} md={format} sm={format} xs={format}>
        {content}
    </Grid>
  )
}

export default GridFormatter