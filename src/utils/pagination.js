const getPagination = (array, notesOnPage, active, setActive) => {

  const pagination = Array.from(
    { length: Math.ceil(array.length / notesOnPage) },
    (_, i) => {
      const isActive = active === i + 1
      return (
        <li key={i + 1} className="pagination__list-btn">
          <button
            className={`pagination__list-btn-page ${
              isActive ? 'active-btn' : null
            }`}
            onClick={() => setActive(i + 1)}
          >
            {i + 1}
          </button>
        </li>
      )
    }
  )

  const getPaginatedArray = () => {
    const startIndex = (active - 1) * notesOnPage
    const endIndex = startIndex + notesOnPage
    return array.slice(startIndex, endIndex)
  }

  const nextPage = () => {
    if (active < Math.ceil(array.length / notesOnPage)) {
      setActive(active + 1)
    }
  }

  const prevPage = () => {
    if (active > 1) {
      setActive(active - 1)
    }
  }

  return { pagination, getPaginatedArray, nextPage, prevPage }
}

export { getPagination }
