import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Button, Card, CardContent, CardHeader, styled as s, Typography, useMediaQuery} from '@mui/material';
import { LyraTheme } from './theme/lyra/Theme';
import styled, { ThemeProvider } from 'styled-components';

const StyledCard = styled(Card).attrs<{$isMobile: boolean;}>((props) => ({$isMobile: props.$isMobile}))(({theme, $isMobile}) => ({
  background: $isMobile ? theme.palette.primary.light : theme.palette.secondary.light,
  textAlign: 'center',
  border: `${theme.spacing(0.125)} solid ${theme.palette.grey[100]}`,
  padding: theme.spacing(10),
  borderRadius: 0
}));

const FlexRow = styled(Box)(({
  display: 'flex',
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export default function App() {
  const isMobile = useMediaQuery(LyraTheme.breakpoints.down('sm'))

  return (
    <ThemeProvider theme={{...LyraTheme}}>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <StyledCard $isMobile={isMobile} elevation={0}>
            <CardHeader title={<Typography variant='h3'>Sample App</Typography>} sx={{color: 'common.white'}}>
            </CardHeader>
            <CardContent>
              <FlexRow sx={{height: '100%'}}>
                {/* with variant */}
                <Button variant='contained'>Hello World !</Button>
                {/* override color by sending theme color thru sxProps */}
                <Button variant='outlined' sx={{color: 'common.white', borderColor: 'common.white'}}>Hello World !</Button>
              </FlexRow>
              </CardContent>
          </StyledCard>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
