import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import Navi from 'features/common/components/Navi';
import {Header} from 'features/common';
import {Footer} from 'features/common';
import {Home} from 'features/common'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const LayOut = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}  >
          <Item><Header/></Item>
        </Grid>
        <Grid item xs={12} >
          <Item>{props.children}</Item>
        </Grid>
        <Grid item xs={12} >
          <Item><Footer/></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
export default LayOut
