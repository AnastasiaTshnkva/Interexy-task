export const SET_CHARACTERS_REQUEST = 'SET_CHARACTERS_REQUEST';
export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_ERROR = 'SET_CHARACTERS_ERROR';

export const SET_CURRENT_CHARACTER_REQUEST = 'SET_CHARACTERS_ERROR';
export const GET_CURRENT_CHARACTER_SUCCESS = 'SET_CHARACTERS_ERROR';
export const GET_CURRENT_CHARACTER_ERROR = 'GET_CURRENT_CHARACTER_ERROR';

export const setCharactersRequestAction = (value) => {
    return {
        type: SET_CHARACTERS_REQUEST,
        payload: value,
    };
};

export const getCharactersSuccessAction = (value) => {
    return {
        type: GET_CHARACTERS_SUCCESS,
        payload: value,
    };
};

export const getCharactersErrorAction = (value) => {
    return {
        type: GET_CHARACTERS_ERROR,
        payload: value,
    };
};

export const setCurrentCharacterRequestAction = (value) => {
    return {
        type: SET_CURRENT_CHARACTER_REQUEST,
        payload: value,
    };
};

export const getCurrentCharacterSuccessAction = (value) => {
    return {
        type: GET_CURRENT_CHARACTER_SUCCESS,
        payload: value,
    };
};

export const getCurrentCharacterErrorAction = (value) => {
    return {
        type: GET_CURRENT_CHARACTER_ERROR,
        payload: value,
    };
};