import React from 'react';
import Banner from '../Banner/Banner';
import Partner from '../Partner/Partner';
import MainServices from '../MainServices/MainServices';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partner></Partner>
            <MainServices></MainServices>
            <About></About>
        </div>
    );
};

export default Home;