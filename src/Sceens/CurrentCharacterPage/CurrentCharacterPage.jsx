import React from 'react';
import {REVIEW_USER_CARD} from 'constants/reviews/reviewUserCard';

const CurrentCharacterPage = (props) => {
    return (
        <div className={'current-character'}>
            <h2 className={'current-character__name'}>User Name</h2>
            <p className={'currentCharacter__state'}>User status</p>
            <div className={'current-character__last-location'}>
                <p className={'current-character__last-location-caption'}>{REVIEW_USER_CARD.LAST_LOCATION}</p>
                <p className={'current-character__last-location-answer'}>Last location</p>
            </div>
            <div className={'current-character__first-seen'}>
                <p className={'current-character__first-seen-caption'}>{REVIEW_USER_CARD.FIRST_SEEN}</p>
                <p className={'current-character__first-seen-answer'}>Last location</p>
            </div>
        </div>
    )
};

export default CurrentCharacterPage;