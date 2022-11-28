import React, { useEffect, useState } from 'react';
import UserCard from 'Sceens/HomePage/Components/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {
    showCharactersData,
    showCharactersError,
    showCharactersLoading,
    showNextPage,
    showPrevPage
} from 'store/selectors';
import {
    getCharactersErrorAction,
    getCharactersSuccessAction,
    setCharactersRequestAction
} from 'store/actions/charactersActions';
import { API_GET_DATA } from 'constants/constant'

const UsersList = (props) => {
    const dispatch = useDispatch();

    const [characters, setCharacters] = useState([]);
    // const [url, setUrl] = useState(API_GET_DATA);

    const charactersIsLoading = useSelector(showCharactersLoading);
    const charactersDataFromStore = useSelector(showCharactersData);
    const charactersError = useSelector(showCharactersError);
    const prevPage = useSelector(showPrevPage);
    const nextPage = useSelector(showNextPage);

    console.log(prevPage, nextPage);

    const getData = (param) => {
        dispatch(setCharactersRequestAction);

        fetch(param)
            .then(data => {
                return data.json()
                    .then(data => {
                        console.log(data)
                        dispatch(getCharactersSuccessAction(data))
                    })})
            .catch(err => dispatch(getCharactersErrorAction(err)))
    };

    useEffect(() => {
        getData(API_GET_DATA);
    }, [])

    useEffect(() => {
        setCharacters(charactersDataFromStore);
    }, [charactersDataFromStore])

    console.log(charactersDataFromStore)

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
                    getData(prevPage);
                }}>Previous page</p>
            )
        }
    };

    const getNextPage = () => {
        if(nextPage) {
            return (
                <p className={'home-page__pageSwitcher-next'} onClick={() => {
                    console.log('next');
                    getData(nextPage);
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