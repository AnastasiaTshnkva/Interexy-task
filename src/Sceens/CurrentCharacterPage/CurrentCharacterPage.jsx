import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {REVIEW_USER_CARD} from 'constants/reviews/reviewCurrentCharacterPage';
import {
    getCurrentCharacterErrorAction,
    getCurrentCharacterSuccessAction,
    setCurrentCharacterRequestAction
} from 'store/actions/currentCharacterActions';
import {
    showCurrentCharacterError,
    showCurrentCharacterLoading,
    showCurrentCharacterSuccess
} from 'store/selectors';

const CurrentCharacterPage = (props) => {
    const dispatch = useDispatch();
    const id = useParams();

    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');
    const [currentCharacter, setCurrentCharacter] = useState({});

    const currentCharacterIsLoading = useSelector(showCurrentCharacterLoading);
    const currentCharacterData = useSelector(showCurrentCharacterSuccess);
    const currentCharacterError = useSelector(showCurrentCharacterError);

    useEffect(() => {
        dispatch(setCurrentCharacterRequestAction);

        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(data =>
                {return data.json()
                    .then(data => {
                        dispatch(getCurrentCharacterSuccessAction(data))
                    })}
            )
            .catch(err => dispatch(getCurrentCharacterErrorAction(err)))
    }, [])

    useEffect(() => {
        setCurrentCharacter(currentCharacterData)
    }, [currentCharacterData])

    const dotColor = () => {
        if (currentCharacter.status === 'Alive') {
            return (
                <div className={'green dot'}></div>
            )
        } else if (currentCharacter.status === 'Dead') {
            return (
                <div className={'red dot'}></div>
            )
        } else {
            return (
                <div className={'grey dot'}></div>
            )
        }
    }

    const gerCurrentCharacter = () => {
        if(currentCharacterIsLoading) {return <div>Loading...</div>}
        if(currentCharacterError) {return <div>Oops! Something went wrong.</div>}
        if(!!Object.keys(currentCharacter).length) {
            return (
                <div className={'current-character'}>
                    <div className={'current-character__card'}>
                        <img src={currentCharacter.image} alt={currentCharacter.name} className={'current-character__img'}/>
                        <div className={'current-character__info'}>
                            <h2 className={'current-character__name'}>{currentCharacter.name}</h2>
                            <div className={'current-character__state'}>
                                {dotColor()}
                                <p className={'currentCharacter__state-description'}>{`${currentCharacter.status} - ${currentCharacter.species}`}</p>
                            </div>
                            <div className={'current-character__gender'}>
                                <p className={'current-character__gender caption'}>{REVIEW_USER_CARD.GENDER}</p>
                                <p className={'current-character__gender answer'}>{currentCharacter.gender}</p>
                            </div>
                            <div className={'current-character__origin'}>
                                <p className={'current-character__origin caption'}>{REVIEW_USER_CARD.ORIGIN}</p>
                                <p className={'current-character__origin answer'}>{currentCharacter.origin.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
                )
        }
        return <div>No data yet</div>
    };

    return (
        <React.Fragment>
            {gerCurrentCharacter()}
        </React.Fragment>
        // <div className={'current-character'}>
        //     <h2 className={'current-character__name'}>User Name</h2>
        //     <p className={'currentCharacter__state'}>User status</p>
        //     <div className={'current-character__last-location'}>
        //         <p className={'current-character__last-location-caption'}>{REVIEW_USER_CARD.LAST_LOCATION}</p>
        //         <p className={'current-character__last-location-answer'}>Last location</p>
        //     </div>
        //     <div className={'current-character__first-seen'}>
        //         <p className={'current-character__first-seen-caption'}>{REVIEW_USER_CARD.FIRST_SEEN}</p>
        //         <p className={'current-character__first-seen-answer'}>Last location</p>
        //     </div>
        //
        // </div>
    )
};

export default CurrentCharacterPage;