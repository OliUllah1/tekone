import React from 'react';
import Banner from '../Banner/Banner';
import Partner from '../Partner/Partner';
import MainServices from '../MainServices/MainServices';
import About from '../About/About';
import Work from '../Work/Work';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partner></Partner>
            <MainServices></MainServices>
            <About></About>
            <Work></Work>
            <Services></Services>
        </div>
    );
};

export default Home;