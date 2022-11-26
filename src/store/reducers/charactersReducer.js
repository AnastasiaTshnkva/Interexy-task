import {
    SET_CHARACTERS_REQUEST,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_ERROR
} from 'store/actions/charactersActions';

const initState = {
    CharactersLoading: false,
    CharactersData: [],
    CharactersError: null,
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

        default:
            return {...state};
    }
};

export default CharactersReducer;