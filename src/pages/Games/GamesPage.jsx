import React from "react";

import { GamesFilter } from "../../components/pages/games-filter";
import { GamesContent } from "../../components/pages/games-content";
import { GamesPagination } from "../../components/pages/games-pagination";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { GamesProvider } from "../../contexts/gamesList";
import { GamesPaginationProvider } from "../../contexts/gamesPagination";

const GamesPage = () => {
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

export { GamesPage }
