import {
    SET_CURRENT_CHARACTER_REQUEST,
    GET_CURRENT_CHARACTER_SUCCESS,
    GET_CURRENT_CHARACTER_ERROR,
} from 'store/actions/currentCharacterActions';

const initState = {
    CurrentCharacterLoading: false,
    CurrentCharacterData: {},
    CurrentCharacterError: null,
};

const CurrentCharacterReducer = (state = initState, action) => {
    switch (action.type) {
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
            return {...state};
    }
};

export default CurrentCharacterReducer;