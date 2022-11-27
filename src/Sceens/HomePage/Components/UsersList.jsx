import React, { useEffect, useState } from 'react';
import UserCard from 'Sceens/HomePage/Components/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {showCharactersData, showCharactersError, showCharactersLoading} from 'store/selectors';
import {
    getCharactersErrorAction,
    getCharactersSuccessAction,
    setCharactersRequestAction
} from 'store/actions/charactersActions';

const UsersList = (props) => {
    const dispatch = useDispatch();

    const [characters, setCharacters] = useState([]);
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/?page=1');
    const [prevPage, setPrevPage] = useState('');
    const [nextPage, setNextPage] = useState('')

    const charactersIsLoading = useSelector(showCharactersLoading);
    const charactersDataFromStore = useSelector(showCharactersData);
    const charactersError = useSelector(showCharactersError);

    useEffect(() => {
        dispatch(setCharactersRequestAction);

        fetch(url)
            .then(data => {
                return data.json()
                    .then(data => {
                        dispatch(getCharactersSuccessAction(data))
                    })})
            .catch(err => dispatch(getCharactersErrorAction(err)))
    }, [])


    useEffect(() => {
        dispatch(setCharactersRequestAction);

        fetch(url)
            .then(data => {
                return data.json()
                    .then(data => {
                        dispatch(getCharactersSuccessAction(data))
                    })})
            .catch(err => dispatch(getCharactersErrorAction(err)))
    }, [url])

    useEffect(() => {
        setCharacters(charactersDataFromStore.results);
    }, [charactersDataFromStore])

    useEffect(() => {
        setPrevPage(charactersDataFromStore.info.prev);
        setNextPage(charactersDataFromStore.info.next);
    }, [charactersDataFromStore])

    const getCharacters = () => {
      if (charactersIsLoading) {return <div>Loading...</div>}
      if (charactersError) {
          console.log('error', error);
          return <div>Oops! Something went wrong.</div>
      }
      if (!!characters.length) {
          return characters.map((elem) => {
              return (
                  <UserCard key={elem.id}
                            idProps={elem.id}
                            name={elem.name}
                            status={elem.status}
                            species={elem.species}
                            image={elem.image}
                  />
              )
          })
      }
      return <div>No data yet</div>
    };

    const getPrevPage = () => {
        if(prevPage) {
            return (
                <p className={'home-page__pageSwitcher-prev'} onClick={() => {
                    console.log('prev');
                    setUrl(prevPage);
                }}>Previous page</p>
            )
        }
    };

    const getNextPage = () => {
        if(nextPage) {
            return (
                <p className={'home-page__pageSwitcher-next'} onClick={() => {
                    console.log('next');
                    setUrl(nextPage);
                }}>Next page</p>
                )
        }
    };

    return (
        <React.Fragment>
            <div className={'home-page__user-list'}>
                {getCharacters()}
            </div>
            <div className={'home-page__pageSwitcher'}>
                {getPrevPage()}
                {getNextPage()}
            </div>
        </React.Fragment>

    )
};

export default UsersList;