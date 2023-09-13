import React from 'react';
import Banner from '../Banner/Banner';
import Partner from '../Partner/Partner';
import MainServices from '../MainServices/MainServices';
import About from '../About/About';
import Work from '../Work/Work';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import Testimonials from '../Testimonials/Testimonials';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partner></Partner>
            <MainServices></MainServices>
            <About></About>
            <Work></Work>
            <Services></Services>
            <Projects></Projects>
            <Testimonials></Testimonials>
            <Blog></Blog>
        </div>
    );
};

export default Home;