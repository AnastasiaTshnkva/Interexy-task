import { combineReducers } from 'redux';
import CharactersReducer from 'store/reducers/charactersReducer';

const RootReducer = combineReducers({
    characters: CharactersReducer,
    // users: usersReducer,
});

export default RootReducer;