import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';


interface Toolbar_Props {
  icon: OverridableComponent<SvgIconTypeMap>,
  count?: number
}

export function Toolbar_Item(props: Toolbar_Props) {
  return <>
    <Grid item container direction="column" className="feed-item__toolbar-item w-12 h-12 rounded-full  bg-eco-green-light relative mb-8">
      <props.icon className="feed-item__toolbar-icon m-auto bg-eco-green-light text-eco-green" />
      {props.count != undefined &&
        <Typography className="feed-item__toolbar-count mt-12 w-full text-center">{props.count}</Typography>
      }
    </Grid>
  </>
}


export default function Home() {

  return (
    <>
      <main id="main" className="flex min-h-screen flex-col items-center pb-4 pt-20 pl-8 pr-8">
        <Grid id="feed" container direction="column" className="w-full h-dvh">
          <Grid item container direction="row" className="feed-item w-full h-dvh justify-around ">
            <Grid item container className="relative feed-item__contents border-2 bg-eco-green-light border-slate-300 max-w-screen-md rounded-lg">

              <Grid item container direction="column" className="feed-item__toolbar absolute">
                <Toolbar_Item icon={PersonIcon} />
                <Toolbar_Item icon={EnergySavingsLeafIcon} count={40} />
                <Toolbar_Item icon={CommentIcon} count={50} />
                <Toolbar_Item icon={BookmarkIcon} count={24} />
                <Toolbar_Item icon={ShareIcon} count={11} />
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </main>
    </>
  );
}
