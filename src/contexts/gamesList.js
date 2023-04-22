import { createContext, useState, useEffect } from 'react';

const GamesContext = createContext();

const GamesProvider = ({ children }) => {
  const [games, setGames] = useState(JSON.parse(localStorage.getItem("games")) || []);
  const [sortOption, setSortOption] = useState('default');

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  }

  let sortedGames = [...games];

  switch (sortOption) {
    case 'new-first':
      sortedGames.sort((a, b) => a.id - b.id);
      break;
    case 'new-second':
      sortedGames.sort((a, b) => b.id - a.id);
      break;
    default:
      break;
  }

  const value = {
    games: sortedGames,
    setGames,
    sortOption,
    handleSortChange,
  };

  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
  }, []);

  return (
    <GamesContext.Provider value={value}>
      {children}
    </GamesContext.Provider>
  );
}

export { GamesContext, GamesProvider };
