import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = (props) => {
    const navigate = useNavigate();

    const dotColor = () => {
        if (props.status === 'Alive') {
            return (
                <div className={'green dot'}></div>
            )
        } else if (props.status === 'Dead') {
            return (
                <div className={'red dot'}></div>
            )
        } else {
            return (
                <div className={'grey dot'}></div>
            )
        }
    }

    return (
        <div className={'home-page__user-card'} onClick={() => navigate(`/characterID/${props.idProps}`)}>
            <img src={props.image} alt={props.name} className={'home-page__img'}/>
            <div className={'home-page__info'}>
                <h2 className={'home-page__name'}>{props.name}</h2>
                <div className={'home-page__bio'}>
                    {dotColor()}
                    <p className={'home-page__description'}>{`${props.status} - ${props.species}`}</p>
                </div>
            </div>
        </div>
    )
};

export default UserCard;