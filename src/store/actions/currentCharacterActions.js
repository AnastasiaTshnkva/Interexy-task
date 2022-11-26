export const SET_CURRENT_CHARACTER_REQUEST = 'SET_CURRENT_CHARACTER_REQUEST';
export const GET_CURRENT_CHARACTER_SUCCESS = 'GET_CURRENT_CHARACTER_SUCCESS';
export const GET_CURRENT_CHARACTER_ERROR = 'GET_CURRENT_CHARACTER_ERROR';

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