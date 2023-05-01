import React from "react";

import { GamesFilter } from "../../components/pages/games-filter";
import { GamesContent } from "../../components/pages/games-content";
import { GamesPagination } from "../../components/pages/games-pagination";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { GamesProvider } from "../../contexts/games-list";
import { GamesPaginationProvider } from "../../contexts/games-pagination";

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
