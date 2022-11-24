import React from 'react';
import styled from 'styled-components';
import {REVIEW_USER_CARD} from 'constants/reviews/reviewUserCard';

const UserCard = (props) => {
    return (
        <div className={'home-page__user-card'}>
            <h2 className={'character-name'}>Name</h2>
            <p className={'status'}>status</p>
            <div>
                <p className={'last-location__caption'}>{REVIEW_USER_CARD.LAST_LOCATION}</p>
                <p className={'last-location__answer'}></p>
            </div>
            <div>
                <p className={'first-seen__caption'}>{REVIEW_USER_CARD.FIRST_SEEN}</p>
                <p className={'first-seen__answer'}></p>
            </div>
        </div>
    )
};

export default UserCard;