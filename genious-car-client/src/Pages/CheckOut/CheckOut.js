import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const service = useLoaderData();
    const { title } = service;
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default CheckOut;