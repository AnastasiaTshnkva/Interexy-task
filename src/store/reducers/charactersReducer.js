import {
    SET_CHARACTERS_REQUEST,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_ERROR
} from 'store/actions/charactersActions';

const initState = {
    isLoading: false,
    charactersData: [],
    previousUrl: null,
    nextUrl: null,
    error: null,
};

const CharactersReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CHARACTERS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };

        case GET_CHARACTERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                charactersData: action.payload.results,
                previousUrl: action.payload.info.prev,
                nextUrl: action.payload.info.next,
            };

        case GET_CHARACTERS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return {...state};
    }
};

export default CharactersReducer;