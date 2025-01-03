import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import { Button, styled as s} from '@mui/material';
import styled from 'styled-components';

const ButtonX = s(Button)(({theme}) => ({
  background: theme.palette.primary.main,
  color: theme.palette.common.white
}))

const ButtonY = styled(Button)(() => ({
  background: 'red',
  color: 'white'
}))

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Create React App example with styled-components in TypeScript
        </Typography>
        <ProTip />
        <Copyright />
        <Box sx={{display: 'flex', alignSelf: 'stretch', justifyContent: 'space-between'}}>
          <ButtonX>Hello Chinmay !</ButtonX>
          <ButtonY>Hello Chinmay !</ButtonY>
        </Box>
      </Box>
    </Container>
  );
}
