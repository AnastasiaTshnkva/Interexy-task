import React, { useEffect, useState } from 'react';
import UserCard from 'Sceens/HomePage/Components/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import {showCharactersData, showCharactersError, showCharactersLoading} from 'store/selectors';
import {
    getCharactersErrorAction,
    getCharactersSuccessAction,
    setCharactersRequestAction
} from "../../../store/actions/charactersActions";

const UsersList = (props) => {
    const dispatch = useDispatch();
    const [characters, setCharacters] = useState([]);
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character')

    const charactersIsLoading = useSelector(showCharactersLoading);
    const charactersDataFromStore = useSelector(showCharactersData);
    const charactersError = useSelector(showCharactersError);

    useEffect(() => {
        dispatch(setCharactersRequestAction);

        fetch(url)
            .then(data => {
                return data.json()
                    .then(data => {
                        dispatch(getCharactersSuccessAction(data.results))
                    })})
            .catch(err => dispatch(getCharactersErrorAction(err)))
    }, [])


    useEffect(() => {
        setCharacters(charactersDataFromStore);
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

    return (
        <div>
            <div className={'home-page__user-list'}>
                {getCharacters()}
            </div>
           {/*<div className={'home-page__switch-dots'}>*/}
           {/*     <div>1</div>*/}
           {/*     <div>2</div>*/}
           {/*     <div>3</div>*/}
           {/*     <div>4</div>*/}
           {/*     <div>5</div>*/}
           {/*</div>*/}
        </div>

    )
};

export default UsersList;