import React from "react";
import { GamesFilter } from "../../components/pages/GamesFilter";
import { GamesContent } from "../../components/pages/GamesContent";
import { GamesPagination } from "../../components/pages/GamesPagination";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { GamesProvider } from "../../contexts/gamesList";
import { GamesPaginationProvider } from "../../contexts/gamesPagination";

export const GamesPage = () => {
  return (
    <>
      <DefaultLayout>
        <GamesProvider>
          <GamesPaginationProvider>
            <GamesFilter />
            <GamesContent />
            <GamesPagination />
          </GamesPaginationProvider>
        </GamesProvider>
      </DefaultLayout>
    </>
  );
};
