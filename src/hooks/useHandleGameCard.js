import { useState, useEffect, useContext } from 'react'

import { getDeafultGames } from '../services'
import { GamesContext } from '../contexts/gamesList'
import { getItemFromLocalStorage, setItemLocalStorage } from '../utils/localStorageUtils'

const useHandleGameCards = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false)
  const { games, setGames } = useContext(GamesContext)

  useEffect(() => {
    const savedGames = getItemFromLocalStorage('games')
    if (savedGames) {
      setGames(savedGames)
    } else {
      getDeafultGames().then((defaultGames) => {
        setItemLocalStorage('games', defaultGames)
        setGames(defaultGames)
      })
    }
  }, [setGames])

  const onAddNewCard = () => {
    setIsDialogVisible(true)
  }

  const addNewCard = (newGame) => {
    const updatedGames = [...games, newGame]
    setGames(updatedGames)
    setItemLocalStorage('games', updatedGames)
    setIsDialogVisible(false)
  }

  return { onAddNewCard, isDialogVisible, setIsDialogVisible, addNewCard }
}

export { useHandleGameCards }
