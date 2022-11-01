import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const Form = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Form;