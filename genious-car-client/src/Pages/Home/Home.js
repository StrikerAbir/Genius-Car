import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import State from './States/State';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <State></State>
        </div>
    );
};

export default Home;