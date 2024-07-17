"use client";

import React from 'react'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap, Box, List, ListItem } from '@mui/material';
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'


interface Toolbar_Props {
  icon: OverridableComponent<SvgIconTypeMap>,
  count?: number
}

interface Feed_Props {
  innerRef?: (node ?: Element | null | undefined) => void
}

export function Toolbar_Item(props: Toolbar_Props) {
  return <>
    <Grid item container direction="column" className="feed-item__toolbar-item w-12 h-12 rounded-full bg-eco-green-light relative mb-8 cursor-pointer">
      <props.icon className="feed-item__toolbar-icon m-auto bg-eco-green-light text-eco-green" />
      {props.count != undefined &&
        <Typography className="feed-item__toolbar-count mt-12 w-full text-center">{props.count}</Typography>
      }
    </Grid>
  </>
}

export function Feed_Item(props: Feed_Props) {
  return <>
    <Grid ref={props.innerRef} item container direction="row" className="feed-item w-full h-dvh justify-around ">
      <Grid item container className="relative feed-item__contents border-2 bg-eco-green-light border-slate-300 max-w-screen-md rounded-lg">

        <Grid item container direction="column" className="feed-item__toolbar absolute">
          <Toolbar_Item icon={PersonAddIcon} />
          <Toolbar_Item icon={EnergySavingsLeafIcon} count={40} />
          <Toolbar_Item icon={CommentIcon} count={50} />
          <Toolbar_Item icon={BookmarkIcon} count={24} />
          <Toolbar_Item icon={ShareIcon} count={11} />
        </Grid>

      </Grid>
    </Grid>
  </>
}

const page_size = 5;

async function getPokemons({pageParam} : {pageParam : number}) {
  const res = await fetch(`https://pokeapi.co/api/v2/ability?limit=${page_size}&offset=${pageParam}`)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  let filtered = await data.results.map((pokemon : {

  }, index : number) => {
    let paddedIndex = pageParam === 0 ? ('00' + (index + 1)).slice(-3) : ('00' + (index + 1 + pageParam)).slice(-3)
    
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedIndex}.png`
    return {
      ...pokemon,
      imageUrl: image
    }
  }) 
  return filtered
}

export default function Home() {
  const {ref, inView} = useInView();

  const {
    data : pokemons,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage.length === page_size ? allPages.length * page_size : undefined;
      return nextPage;
    },
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <>
      <main id="main" className="flex min-h-screen flex-col items-center pb-4 pt-20 pl-8 pr-8">
        <Grid id="feed" container direction="row" className="w-full h-dvh">
          
          <Feed_Item />
          <Feed_Item />
          <Feed_Item />

          {pokemons?.pages?.map(page => 
            page.map((pokemon : {
              imageUrl: string,
              name: string
            }, index : number) => 
            {
              if (page.length == index + 1){
                
                return <Feed_Item 
                  innerRef={ref}
                />
              } else {
                return <Feed_Item />
              }
            }

            ))}

        </Grid>
      </main>
    </>
  );
}
