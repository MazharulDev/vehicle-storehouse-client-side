import React from 'react';
import PageTitle from '../../../PageTitle/PageTitle';
import NewsLetter from '../../pages/NewsLetter/NewsLetter';
import Banner from '../Banner/Banner';
import BgHeaderDown from '../BgHeaderDown/BgHeaderDown';
import BuyDes from '../BuyDes/BuyDes';
import Choose from '../Choose/Choose';
import Footer from '../Header/Footer/Footer';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            <Banner/>
            <Items/>
            <Choose/>
            <BuyDes/>
            <BgHeaderDown/>
            <NewsLetter/>
            <Footer/>
        </div>
    );
};

export default Home;