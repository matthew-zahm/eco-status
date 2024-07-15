
import { Grid, TextField } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export default function NavBar() {
  return (
    <AppBar position="fixed" className='h-14 text-slate-900 shadow-none border-b-2 border-b-slate-300' >
      <Container className='w-full m-0 p-0 max-h-14 max-w-full'>
        <Toolbar className='w-full max-h-14 min-h-14 border-b-2 border-b-slate-300'>
          <Grid container justifyContent="space-between" className='w-full'>
            <Grid item xs={3} container className='items-center h-12'>
              <Image
                className='h-10 w-10'
                width={40}
                height={40}
                src="/Eco-Status.png"
                alt='Eco Status'
              />
              <Typography className='text-eco-green ml-4 w-fit text-2xl font-bold font-sans mobile-hide'>
                Eco Status
              </Typography>
            </Grid>
            <Grid item xs={6} container justifyContent="space-around" className='items-center'>
              <Grid item>
                <Grid container className='bg-eco-green-light p-1 pl-5 pr-5 rounded-3xl'>
                  <Typography
                    className='m-2 mobile-hide max-w-full bg-eco-green-light'
                  >
                    Search:
                  </Typography>
                  <input
                    className='border-2 border-slate-300 rounded-lg h-10 p-2 focus:outline-none'
                    type='text'
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} container className='items-center flex-row-reverse'>
              <Typography
                className='bg-eco-green-light p-2 pr-5 pl-5 rounded-2xl border-2 border-slate-300'
              >
                Login
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
