import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import { Button, Card, styled as s, useMediaQuery} from '@mui/material';
import styled, { ThemeProvider } from 'styled-components';
import { LyraTheme } from './theme/lyra/Theme';

const CardX = styled(Card).attrs<{$isMobile: boolean;}>((props) => ({$isMobile: props.$isMobile}))(({theme, $isMobile}) => ({
  background: $isMobile ? theme.palette.primary.main : theme.palette.secondary.main,
  // background: $isMobile ? 'red' : 'white'
}))


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
  const isMobile = useMediaQuery(LyraTheme.breakpoints.down('sm'))

  return (
    <ThemeProvider theme={{...LyraTheme}}>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Material UI Create React App example with styled-components in TypeScript
          </Typography>
          <ProTip />
          <Copyright />
          <CardX $isMobile={isMobile} sx={{ height: '200px', textAlign: 'center', border: '1px solid #eee', margin: 2, p: 2}} elevation={0}>
            <Box sx={{display: 'flex', alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between', height: '100%'}}>
              <ButtonX>Hello World !</ButtonX>
              <ButtonY>Hello World !</ButtonY>
            </Box>
          </CardX>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
