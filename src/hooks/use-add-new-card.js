import { useState, useRef } from 'react'

import { getImageUrl } from '../services/images'

const useAddNewCard = (addNewCard) => {
  const [nameError, setNameError] = useState('')
  const [descriptionError, setDescriptionError] = useState('')
  const [reviewError, setReviewError] = useState('')

  const nameInputRef = useRef(null)
  const descriptionInputRef = useRef(null)
  const reviewInputRef = useRef(null)
  const imageSelectRef = useRef(null)

  const handleLimitInput = (field, setError) => {
    const MIN_LENGTH = 6
    const MAX_LENGTH = 40

    if (field.length < MIN_LENGTH || field.length > MAX_LENGTH) {
      setError(
        `*${field} must be between ${MIN_LENGTH} to ${MAX_LENGTH} characters long.`,
      )
      setTimeout(() => setError(''), 3000)
      return false
    }

    setError('')
    return true
  }

  const resetForm = () => {
    nameInputRef.current.value = ''
    descriptionInputRef.current.value = ''
    reviewInputRef.current.value = ''
    imageSelectRef.current.selectedIndex = 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = nameInputRef.current.value
    const description = descriptionInputRef.current.value
    const review = reviewInputRef.current.value
    const imageValue = imageSelectRef.current.value

    if (
      handleLimitInput(name, setNameError) &&
      handleLimitInput(description, setDescriptionError) &&
      handleLimitInput(review, setReviewError)
    ) {
      const imageUrl = getImageUrl(imageValue)
      const id = Math.floor(Math.random() * 1000)
      const newGame = { id, name, description, review, img: imageUrl }

      const storedGames = JSON.parse(localStorage.getItem('games'))
      if (storedGames) {
        const existingGame = storedGames.find((game) => game.img === imageUrl)
        
        if (existingGame) {
          resetForm()
          return
        }
      }

      addNewCard(newGame)
      resetForm()
    }
  }

  const value = {
    nameError,
    descriptionError,
    reviewError,
    handleLimitInput,
    handleSubmit,
    nameInputRef,
    descriptionInputRef,
    reviewInputRef,
    imageSelectRef,
  }

  return value
}

export { useAddNewCard }
