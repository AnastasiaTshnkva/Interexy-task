import React, { useEffect, useState } from 'react';
import UserCard from 'Sceens/HomePage/Components/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import getCharactersThunk from 'store/thunks/getCharactersThunk';
import {showCharactersData, showCharactersError, showCharactersLoading} from 'store/selectors';

const UsersList = () => {
    const dispatch = useDispatch();
    const [character, setCharacters] = useState();

    const charactersIsLoading = useSelector(showCharactersLoading);
    const charactersDataFromStore = useSelector(showCharactersData);
    const charactersError = useSelector(showCharactersError);

    useEffect(() => {
        dispatch(getCharactersThunk);
    }, [])

    return (
        <ul className={'home-page__user-list'}>
            <li>
                <UserCard/>
            </li>
            <li>
                <UserCard/>
            </li>
            <li>
                <UserCard/>
            </li>
            <li>
                <UserCard/>
            </li>
            <li>
                <UserCard/>
            </li>
        </ul>
    )
};

export default UsersList;