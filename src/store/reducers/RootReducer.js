import { combineReducers } from 'redux';
import CharactersReducer from 'store/reducers/charactersReducer';
import CurrentCharacterReducer from 'store/reducers/currentCharcterReducer';

const RootReducer = combineReducers({
    characters: CharactersReducer,
    currentCharacter: CurrentCharacterReducer,
    // users: usersReducer,
});

export default RootReducer;