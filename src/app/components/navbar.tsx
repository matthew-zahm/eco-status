
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function NavBar() {
  return (
    <AppBar position="fixed" className='bg-eco-green text-slate-900 shadow-none' >
      <Container>
        <Toolbar>
          <Typography> Nav Bar </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
