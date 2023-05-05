import { useState, useEffect, useContext } from 'react'

import { getDeafultGames } from '../services'
import { GamesContext } from '../contexts/gamesList'

const useHandleGameCards = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false)
  const { games, setGames } = useContext(GamesContext)

  useEffect(() => {
    const savedGames = JSON.parse(localStorage.getItem('games'))
    savedGames
      ? setGames(savedGames)
      : getDeafultGames().then((defaultGames) => {
          localStorage.setItem('games', JSON.stringify(defaultGames))
          setGames(defaultGames)
        })
  }, [setGames])

  const onAddNewCard = () => {
    setIsDialogVisible(true)
  }

  const addNewCard = (newGame) => {
    const updatedGames = [...games, newGame]
    setGames(updatedGames)
    localStorage.setItem('games', JSON.stringify(updatedGames))
    setIsDialogVisible(false)
  }

  return { onAddNewCard, isDialogVisible, setIsDialogVisible, addNewCard }
}

export { useHandleGameCards }
