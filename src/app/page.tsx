"use client";

import React, { ReactNode } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import Player from 'next-video/player';

import Follow_Icon from "../icons/follow";
import Like_Icon from "../icons/like";
import Comment_Icon from "../icons/comment";
import Add_Bookmark_Icon from "../icons/add_bookmark";
import Share_Icon from "../icons/share";

interface Toolbar_Props {
  // icon: OverridableComponent<SvgIconTypeMap>,
  children?: ReactNode,
  count?: number
}

interface Feed_Props {
  innerRef?: (node ?: Element | null | undefined) => void
}

export function Toolbar_Item(props: Toolbar_Props) {
  return <>
    <div className="feed-item__toolbar-item flex flex-col w-12 h-12 rounded-full bg-eco-green-light relative mb-8 cursor-pointer">
      <div className="feed-item__toolbar-icon m-auto bg-eco-green-light text-eco-green">
        {props.children}
      </div>
      {props.count != undefined &&
        <p className="feed-item__toolbar-count mt-12 w-full text-center">{props.count}</p>
      }
    </div>
  </>
}

export function Feed_Item(props: Feed_Props) {
  return <>
    <div ref={props.innerRef} className="feed-item flex w-full h-dvh justify-around ">
      <div className="w-full relative feed-item__contents flex border-2 bg-eco-green-light border-slate-300 max-w-screen-md rounded-lg">

        <Player src={"https://lzzdsujckveigwyz.public.blob.vercel-storage.com/PXL_20240705_034314398-MkZx6V2VP4a7hajrZwoI337XdmQKVo.mp4"} />

        <div className="feed-item__toolbar flex flex-col absolute">
          <Toolbar_Item>
            <Follow_Icon />
          </Toolbar_Item>
          
          <Toolbar_Item count={40}>
            <Like_Icon />
          </Toolbar_Item>
          
          <Toolbar_Item count={50}>
            <Comment_Icon />
          </Toolbar_Item>
          
          <Toolbar_Item count={24}>
            <Add_Bookmark_Icon />
          </Toolbar_Item>
          
          <Toolbar_Item count={11}>
            <Share_Icon />
          </Toolbar_Item>
        </div>

      </div>
    </div>
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
      <main id="main" className="flex min-h-screen flex-col items-center pb-4 pt-4 pl-8 pr-8">
        <div id="feed" className="flex flex-col w-full">
          
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

        </div>
      </main>
    </>
  );
}
