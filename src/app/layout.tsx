import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryProvider from './components/react_query_provider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import "./globals.css";
import NavBar from "./components/navbar";
import { Grid, Typography, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from '@mui/material/OverridableComponent';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eco Status",
  description: "Improve yourself and the environment!",
};

interface Side_Item_Props {
  icon?: OverridableComponent<SvgIconTypeMap>,
  title: string
}

export function Side_Item(props: Side_Item_Props) {
  return <>
    <Grid item container direction="row" className="mb-4 cursor-pointer">
      { props.icon &&
        <props.icon className="side_item__icon mr-2 text-eco-green text-3xl" />
      }
      <Typography className="side_item__text font-bold text-lg mt-1 mobile-hide">
        {props.title}
      </Typography>
    </Grid>
  </>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <NavBar />
        
        <ReactQueryProvider>
          {children}
          <ReactQueryDevtools />
        </ReactQueryProvider>
        
        <Grid container direction="column" id="side-bar" className="fixed left-0 top-14 h-full p-5 ">
          <Side_Item icon={HomeIcon} title="For You" />
          <Side_Item icon={ExploreIcon} title="Discover" />
          <Side_Item icon={BookmarkIcon} title="Following" />
          <Side_Item icon={PersonIcon} title="Profile" />
          <Side_Item icon={AddIcon} title="Create" />
          <div className="side-bar__break border-b-slate-300 w-full"></div>
        </Grid>
      </body>
    </html>
  );
}
