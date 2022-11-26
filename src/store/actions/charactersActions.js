export const SET_CHARACTERS_REQUEST = 'SET_CHARACTERS_REQUEST';
export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR';



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