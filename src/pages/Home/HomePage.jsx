import React from "react";
import { Hero } from "../../components/hero";
import { Experience } from "../../components/experience";
import { Video } from "../../components/video";
import { Comments } from "../../components/comments";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { Values } from "../../components/values";

export const HomePage = () => {
  return (
    <>
      <DefaultLayout>
        <Hero />
        <Experience />
        <Video />
        <Comments />
        <Values />
      </DefaultLayout>
    </>
  );
};
