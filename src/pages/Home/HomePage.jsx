import React from 'react'
import { Hero } from "../../components/Hero";
import { Experience } from "../../components/Experience";
import { Video } from "../../components/Video";
import { Comments } from "../../components/Comments";
import { Values } from "../../components/Values";
import { DefaultLayout } from "../../layouts/DefaultLayout";

export const HomePage = () => {
  return (
    <>
        <div className="header__radius"></div>
        <DefaultLayout>
            <Hero />
            <Experience />
            <Video />
            <Comments />
            <Values />
        </DefaultLayout>
    </>
  )
}
