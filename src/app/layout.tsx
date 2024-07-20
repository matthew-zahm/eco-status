import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import ReactQueryProvider from './components/react_query_provider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import NavBar from "./components/navbar";
import Link from 'next/link';

import Home_Icon from "../icons/home";
import Explore_Icon from "../icons/explore";
import Bookmark_Icon from "../icons/bookmark";
import Profile_Icon from "../icons/profile";
import Create_Icon from "../icons/create";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eco Status",
  description: "Improve yourself and the environment!",
};

interface Side_Item_Props {
  children?: ReactNode,
  title: string,
  path: string
}

export function Side_Item(props: Side_Item_Props) {
  return <>
    <Link href={props.path} className="flex mb-4 cursor-pointer">
      { props.children &&
        <div className="side_item__icon mr-2 text-eco-green text-sm fill-current stroke-current">
          {props.children}
        </div>
        // <props.icon className="side_item__icon mr-2 text-eco-green text-3xl" />
      }
      <p className="side_item__text font-bold text-lg mt-1 mobile-hide">
        {props.title}
      </p>
    </Link>
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
        
        <ReactQueryProvider>
          {children}
          <ReactQueryDevtools />
        </ReactQueryProvider>
        
        <NavBar />
        
        <div id="side-bar" className="flex flex-col fixed left-0 top-14 h-full p-5 ">
          <Side_Item title="For You" path="/for-you">
            <Home_Icon />
          </Side_Item>

          <Side_Item title="Discover" path="/discover">
            <Explore_Icon />
          </Side_Item>

          <Side_Item title="Following" path="/following">
            <Bookmark_Icon />
          </Side_Item>

          <Side_Item title="Profile" path="/profile">
            <Profile_Icon />
          </Side_Item>

          <Side_Item title="Create" path="/create">
            <Create_Icon />
          </Side_Item>
          
          <div className="side-bar__break border-b-slate-300 w-full"></div>
        </div>
      </body>
    </html>
  );
}
