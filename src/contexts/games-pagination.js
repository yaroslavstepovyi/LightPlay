import { createContext, useState, useContext } from 'react'

import { GamesContext } from './games-list'
import { getPagination } from '../utils/pagination'

const GamesPaginationContext = createContext()

const GamesPaginationProvider = ({ children }) => {
  const { games } = useContext(GamesContext)
  const [active, setActive] = useState(1)
  const notesOnPage = 3

  const { pagination, getPaginatedArray, nextPage, prevPage } = getPagination(
    games,
    notesOnPage,
    active,
    setActive,
  )

  const value = {
    active,
    setActive,
    notesOnPage,
    pagination,
    getPaginatedGames: getPaginatedArray,
    nextPage,
    prevPage,
  }

  return (
    <GamesPaginationContext.Provider value={value}>
      {children}
    </GamesPaginationContext.Provider>
  )
}

export { GamesPaginationContext, GamesPaginationProvider }
