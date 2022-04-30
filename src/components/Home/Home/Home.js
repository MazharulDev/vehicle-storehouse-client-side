import React from 'react';
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
            <Footer/>
        </div>
    );
};

export default Home;