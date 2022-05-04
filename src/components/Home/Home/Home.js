import React from 'react';
import NewsLetter from '../../pages/NewsLetter/NewsLetter';
import Banner from '../Banner/Banner';
import Choose from '../Choose/Choose';
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
            <Choose/>
            <NewsLetter/>
            <Footer/>
        </div>
    );
};

export default Home;