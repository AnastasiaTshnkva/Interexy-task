import React from 'react';
import UsersList from 'Sceens/HomePage/Components/UsersList';

const HomePage = () => {
    return (
            <main className={'home-page'}>
                <h1 className={'home-page__title'}>List of characters</h1>
                <UsersList/>
            </main>
    )
};

export default HomePage;