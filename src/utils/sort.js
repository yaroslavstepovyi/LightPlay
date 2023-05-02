const sortFunctions = {
  role: {
    admin: (a, b) => 
        (a.role === 'admin' ? -1 : b.role === 'admin' ? 1 : 0),
    moderator: (a, b) =>
        (a.role === 'moderator' ? -1 : b.role === 'moderator' ? 1 : 0),
    user: (a, b) => 
        (a.role === 'user' ? -1 : b.role === 'user' ? 1 : 0),
  },
  games: {
    'new-first': (a, b) => a.id - b.id,
    'new-second': (a, b) => b.id - a.id,
  },
}

export { sortFunctions }
