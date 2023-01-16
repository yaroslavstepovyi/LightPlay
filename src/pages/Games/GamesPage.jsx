import React from 'react'
import { GamesFilter } from "../../components/pages/GamesFilter"
import { GamesContent } from "../../components/pages/GamesContent"
import { GamesPagination } from "../../components/pages/GamesPagination"
import { DefaultLayout } from '../../layouts/DefaultLayout'

export const GamesPage = () => {
  return (
      <div>
        <div className="header__radius"></div>
          <DefaultLayout>
            <GamesFilter />
            <GamesContent />
            <GamesPagination />
          </DefaultLayout>
      </div>
  )
}

