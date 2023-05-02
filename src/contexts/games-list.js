import { createContext, useState, useEffect } from 'react'
import { sortFunctions } from '../utils/sort'

const GamesContext = createContext()

const GamesProvider = ({ children }) => {
  const [games, setGames] = useState(
    JSON.parse(localStorage.getItem('games')) || [],
  )
  const [sortOption, setSortOption] = useState('default')
  const [sortedGames, setSortedGames] = useState(games)

  const handleSortChange = (event) => {
    const sortOption = event.target.value
    setSortOption(sortOption)

    if (sortFunctions.games.hasOwnProperty(sortOption)) {
      const sorted = [...games].sort(sortFunctions.games[sortOption])
      setSortedGames(sorted)
    }
  }

  useEffect(() => {
    localStorage.setItem('games', JSON.stringify(games))
    setSortedGames(games)
  }, [games])

  const value = {
    games: sortedGames,
    setGames,
    sortOption,
    handleSortChange,
  }

  return <GamesContext.Provider value={value}>{children}</GamesContext.Provider>
}

export { GamesContext, GamesProvider }
