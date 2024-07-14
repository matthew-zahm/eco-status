import Image from "next/image";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box, Paper } from "@mui/material";




export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Grid>
          <Grid container direction="row">
            <Grid item>
              <Grid container direction="column">
                <Grid item>1</Grid>
                <Grid item>2</Grid>
                <Grid item>3</Grid>
                <Grid item>4</Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>2</Grid>
            <Grid item>3</Grid>
            <Grid item>4</Grid>
          </Grid>
          <Typography> Some Text Here </Typography>
        </Grid>
      </main>
    </>
  );
}
