import React, { useEffect, useState } from 'react';
import UserCard from 'Sceens/HomePage/Components/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import getCharactersThunk from 'store/thunks/getCharactersThunk';
import {showCharactersData, showCharactersError, showCharactersLoading} from 'store/selectors';

const UsersList = (props) => {
    const dispatch = useDispatch();
    const [character, setCharacters] = useState([]);

    // const charactersIsLoading = useSelector(showCharactersLoading);
    // const charactersDataFromStore = useSelector(showCharactersData);
    // const charactersError = useSelector(showCharactersError);

    // useEffect(() => {
    //     dispatch(getCharactersThunk);
    // }, [])
    //
    // useEffect(() => {
    //     setCharacters(state => state.characters.CharactersLoading);
    // }, [])

    return (
        <ul className={'home-page__user-list'}>
            <li className={'home-page__user-item'}>
                <UserCard/>
            </li>
            <li className={'home-page__user-item'}>
                <UserCard/>
            </li>
            <li className={'home-page__user-item'}>
                <UserCard/>
            </li>
            <li className={'home-page__user-item'}>
                <UserCard/>
            </li>
            <li className={'home-page__user-item'}>
                <UserCard/>
            </li>
        </ul>
    )
};

export default UsersList;