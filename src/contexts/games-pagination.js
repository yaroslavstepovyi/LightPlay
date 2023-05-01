import { createContext, useState, useContext } from 'react';
import { GamesContext } from './games-list';

const GamesPaginationContext = createContext();

const GamesPaginationProvider = ({ children }) => {
    const { games } = useContext(GamesContext);
    const [notesOnPage] = useState(3);
    const [active, setActive] = useState(1);

    const handlePageClick = (pageNumber) => {
        setActive(pageNumber);

        const startIndex = (pageNumber - 1) * notesOnPage;
        const endIndex = startIndex + notesOnPage;
        return games.slice(startIndex, endIndex);

    };

    const pagination = () => {
        const amountElementOnPage = Math.ceil(games.length / notesOnPage);

        let items = [];

        for (let i = 1; i <= amountElementOnPage; i++) {
            const liClassNames = ["pagination__list-btn"];
            const listItem = (
                <li key={i} className={liClassNames.join(" ")}>
                    <button
                        className={`pagination__list-btn-page ${active === i ? "active-btn" : null
                            }`}
                        onClick={() => handlePageClick(i)}
                    >
                        {i}
                    </button>
                </li>
            );

            items.push(listItem);
        }

        return items;
    };

    const getPaginatedGames = () => {
        const startIndex = (active - 1) * notesOnPage;
        const endIndex = startIndex + notesOnPage;
        return games.slice(startIndex, endIndex);
    };

    const nextPage = () => {
        if (active < Math.ceil(games.length / notesOnPage)) {
            setActive(active + 1);
        }
    }

    const prevPage = () => {
        if (active > 1) {
            setActive(active - 1);
        }
    }

    const value = {
        active,
        setActive,
        notesOnPage,
        pagination,
        getPaginatedGames,
        nextPage,
        prevPage,
    };

    return (
        <GamesPaginationContext.Provider value={value}>
            {children}
        </GamesPaginationContext.Provider>
    );
}

export { GamesPaginationContext, GamesPaginationProvider };