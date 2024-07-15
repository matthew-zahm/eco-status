import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import * as React from 'react';

// export default function IconButtons() {
//   return (
//     <Stack direction="row" spacing={1}>
//     </Stack>
//   );
// }


export default function Home() {

  return (
    <>
      <main className="flex min-h-screen flex-col items-center pb-4 pt-24 pl-12 pr-12">
        <Grid id="feed" container direction="column" className="w-full h-dvh">
          <Grid item container direction="row" className="feed-item w-full h-dvh justify-around ">
            <Grid item container className="relative feed-item__contents border-2 bg-eco-green-light border-slate-300 max-w-screen-md rounded-lg">

              <Grid item container direction="column" className="feed-item__toolbar absolute">
                <Grid item container direction="column" className="feed-item__toolbar-item w-12 h-12 rounded-full  bg-eco-green-light relative mb-8">
                  <PersonIcon className="feed-item__toolbar-icon m-auto bg-eco-green-light text-eco-green" />
                </Grid>
                <Grid item container direction="column" className="feed-item__toolbar-item w-12 h-12 rounded-full  bg-eco-green-light relative mb-8">
                  <EnergySavingsLeafIcon className="feed-item__toolbar-icon m-auto bg-eco-green-light text-eco-green" />
                  <Typography className="feed-item__toolbar-count mt-12 w-full text-center">40</Typography>
                </Grid>
                <Grid item container direction="column" className="feed-item__toolbar-item w-12 h-12 rounded-full  bg-eco-green-light relative mb-8">
                  <CommentIcon className="feed-item__toolbar-icon m-auto bg-eco-green-light text-eco-green" />
                  <Typography className="feed-item__toolbar-count mt-12 w-full text-center">40</Typography>
                </Grid>
                <Grid item container direction="column" className="feed-item__toolbar-item w-12 h-12 rounded-full  bg-eco-green-light relative mb-8">
                  <BookmarkIcon className="feed-item__toolbar-icon m-auto bg-eco-green-light text-eco-green" />
                  <Typography className="feed-item__toolbar-count mt-12 w-full text-center">40</Typography>
                </Grid>
                <Grid item container direction="column" className="feed-item__toolbar-item w-12 h-12 rounded-full  bg-eco-green-light relative mb-8">
                  <ShareIcon className="feed-item__toolbar-icon m-auto bg-eco-green-light text-eco-green" />
                  <Typography className="feed-item__toolbar-count mt-12 w-full text-center">40</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </>
  );
}
