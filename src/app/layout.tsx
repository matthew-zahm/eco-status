import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";
import { Grid, Typography, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from '@mui/material/OverridableComponent';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
    <Grid item container direction="row" className="mb-4">
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
        <Grid container direction="row">
          <Grid item direction="column" id="side-bar" className="h-full p-5 ">
            <Side_Item icon={HomeIcon} title="For You" />
            <Side_Item icon={ExploreIcon} title="Discover" />
            <Side_Item icon={BookmarkIcon} title="Following" />
            <Side_Item icon={AccountCircleIcon} title="Profile" />
            <Side_Item icon={AddIcon} title="Create" />
          </Grid>
          <Grid item id="page">
            {children}
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
