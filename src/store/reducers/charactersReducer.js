import {
    SET_CHARACTERS_REQUEST,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_ERROR,
    SET_CURRENT_CHARACTER_REQUEST,
    GET_CURRENT_CHARACTER_SUCCESS,
    GET_CURRENT_CHARACTER_ERROR,
} from 'store/actions/charactersAction';

const initState = {
    CharactersLoading: false,
    CharactersData: [],
    CharactersError: null,
    CurrentCharacterLoading: false,
    CurrentCharacterData: {},
    CurrentCharacterError: null,
};

const CharactersReducer = (state = initState, action) => {
    switch (action.type) {

        case SET_CHARACTERS_REQUEST:
            return {
                ...state,
                CharactersLoading: true,
            };

        case GET_CHARACTERS_SUCCESS:
            return {
                ...state,
                CharactersLoading: false,
                CharactersData: action.payload,
            };

        case GET_CHARACTERS_ERROR:
            return {
                ...state,
                CharactersLoading: false,
                CharactersError: action.payload,
            };

        case SET_CURRENT_CHARACTER_REQUEST:
            return {
                ...state,
                CurrentCharacterLoading: true,
            };

        case GET_CURRENT_CHARACTER_SUCCESS:
            return {
                ...state,
                CurrentCharacterLoading: false,
                CurrentCharacterData: action.payload,
            };

        case GET_CURRENT_CHARACTER_ERROR:
            return {
                ...state,
                CurrentCharacterLoading: false,
                CurrentCharacterError: action.payload,
            };

        default:
            return {
                ...state
            };
    }
};

export default CharactersReducer;