import Image from "next/image";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Grid>
          <Typography> Some Text Here </Typography>
        </Grid>
      </main>
    </>
  );
}
