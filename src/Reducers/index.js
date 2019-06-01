import { combineReducers } from 'redux';

const queryReducer = (query='', action) => {
    if(action.type === 'UPDATE_QUERY'){
        return action.payload;
    }
    return query;
}

const sortingReducer = (sorting={value: '', sort:''}, action) => {
    if(action.type === 'UPDATE_SORTING'){
        console.log(action.payload.sort);
        if(action.payload.sort === 'dsc'){
            sorting = {
                value: action.payload.value,
                sort: action.payload.sort
            };
            return sorting;
        }else{
            sorting = {
                value: action.payload.value,
                sort: action.payload.sort
            };
            return sorting;
        }
    }
    return sorting;
}

const themeReducer = (theme='light-theme', action) => {
    console.log(action.payload);
    if(action.type === 'UPDATE_THEME'){
        return action.payload;
    }
    return theme;
}

const currentGameReducer = (game={}, action) => {
    if(action.type === 'UPDATE_CURRENT_GAME'){
        console.log(action.payload);
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
