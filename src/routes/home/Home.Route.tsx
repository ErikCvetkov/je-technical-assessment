import React from 'react';

import Header from '../../components/header/Header.Component';
import Main from '../../components/main /Main.Component';

const Home: React.FC = () => {
    return (
        <>
            <Header text='👋🏼 Welcome to the movie search' />
            <Main />
        </>
    )
}

export default Home;