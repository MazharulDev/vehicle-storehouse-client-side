import React from 'react';
import NewsLetter from '../../pages/NewsLetter/NewsLetter';
import Banner from '../Banner/Banner';
import BgHeaderDown from '../BgHeaderDown/BgHeaderDown';
import BgItem from '../BgItem/BgItem';
import Choose from '../Choose/Choose';
import CountSection from '../CountSection/CountSection';
import Footer from '../Header/Footer/Footer';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            
            <Banner/>
            <Items/>
            <BgItem/>
            <CountSection/>
            <Choose/>
            <BgHeaderDown/>
            <NewsLetter/>
            <Footer/>
        </div>
    );
};

export default Home;