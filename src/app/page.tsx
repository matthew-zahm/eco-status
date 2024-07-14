import Image from "next/image";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box, Paper } from "@mui/material";


export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Grid container direction="row" className="w-full justify-between">
          <Grid item container direction="column" xs={2} className="border-2 border-indigo-600 rounded">
            <Grid item className="h-96">
              
            </Grid>
            <Grid item>
              <Typography className="text-center p-5">Valley of Reflection</Typography>
            </Grid>
          </Grid>
          <Grid item container xs={2} className="border-2 border-indigo-600 rounded">
            <Typography>Grove of Growth</Typography>
          </Grid>
          <Grid item container xs={2} className="border-2 border-indigo-600 rounded">
            <Typography>Summit of Strength</Typography>
          </Grid>
          <Grid item container xs={2} className="border-2 border-indigo-600 rounded">
            <Typography>Waters of Renewal</Typography>
          </Grid>
        </Grid>
      </main>
    </>
  );
}
