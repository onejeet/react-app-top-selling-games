import { combineReducers } from 'redux';

const queryReducer = (query='', action) => {
    if(action.type === 'UPDATE_QUERY'){
        return action.payload;
    }
    return query;
}

const sortingReducer = (sorting={value: '', sort:''}, action) => {
    if(action.type === 'UPDATE_SORTING'){
        sorting = {
            value: action.payload.value,
            sort: action.payload.sort
        };
    }
    return sorting;
}

const themeReducer = (theme='light-theme', action) => {
    if(action.type === 'UPDATE_THEME'){
        return action.payload;
    }
    return theme;
}

const currentGameReducer = (game={}, action) => {
    if(action.type === 'UPDATE_CURRENT_GAME'){
        return action.payload;
    }
    return game;
}

export default combineReducers({
    query : queryReducer,
    sorting: sortingReducer,
    theme: themeReducer,
    game: currentGameReducer
});
