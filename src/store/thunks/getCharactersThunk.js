import { urlCharacters } from 'api/Api';
import {
    setCharactersRequestAction,
    getCharactersSuccessAction,
    getCharactersErrorAction
} from 'store/actions/charactersAction';

const getCharactersThunk = () => {
    return dispatch => {
        dispatch(setCharactersRequestAction);

        fetch(urlCharacters)
            .then(data => {
                return data.json()
                    .then(data => dispatch(getCharactersSuccessAction(data.results)))})
            .catch(err => dispatch(getCharactersErrorAction(err)))
    };
};

export default getCharactersThunk;