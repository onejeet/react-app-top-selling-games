// Action Creators

export const updateQuery = (query) => {
    return {
        type: 'UPDATE_QUERY',
        payload: query
    }
}

export const updateSorting = (value, sort) => {
    return {
        type: 'UPDATE_SORTING',
        payload: {
            value: value,
            sort: sort
        }
    }
}

export const updateTheme = (theme) => {
    return {
        type: 'UPDATE_THEME',
        payload: theme
    }
}

export const updateCurrentGame = (game) => {
    return {
        type: 'UPDATE_CURRENT_GAME',
        payload: game
    }
}
