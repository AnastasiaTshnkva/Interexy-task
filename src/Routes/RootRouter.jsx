import React from 'react';
import {
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import HomePage from 'Sceens/HomePage/HomePage';
import Login from 'Sceens/Login/Login';
import CurrentCharacterPage from 'Sceens/CurrentCharacterPage/CurrentCharacterPage';

const RootRouter = () => {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/characterID/:id'} element={<CurrentCharacterPage/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'*'} element={<Navigate to={'/'}/>}/>
        </Routes>
    )
};

export default RootRouter;