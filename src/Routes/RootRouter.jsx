import React from 'react';
import {
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import HomePage from 'Sceens/HomePage/HomePage';
import Layout from 'Layout/Layout';
import Login from 'Sceens/Login/Login';
import CurrentCharacterPage from 'Sceens/CurrentCharacterPage/CurrentCharacterPage';

const RootRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/characterID'} element={<CurrentCharacterPage/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'*'} element={<Navigate to={'/'}/>}/>
        </Routes>
    )
};

export default RootRouter;