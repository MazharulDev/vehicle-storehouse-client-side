import React from 'react';
import NewsLetter from '../../pages/NewsLetter/NewsLetter';
import Banner from '../Banner/Banner';
import CountSection from '../CountSection/CountSection';
import Footer from '../Header/Footer/Footer';
import Header from '../Header/Header';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Items/>
            <CountSection/>
            <NewsLetter/>
            <Footer/>
        </div>
    );
};

export default Home;