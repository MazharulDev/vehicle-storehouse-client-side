import React from 'react';
import NewsLetter from '../../pages/NewsLetter/NewsLetter';
import Banner from '../Banner/Banner';
import Footer from '../Header/Footer/Footer';
import Header from '../Header/Header';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Items/>
            <NewsLetter/>
            <Footer/>
        </div>
    );
};

export default Home;