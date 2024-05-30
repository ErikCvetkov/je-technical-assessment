import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/header/Header.Component';

const Movie: React.FC = () => {
    const params = useParams();
    console.log(params);
    return (
        <>
            <Header text='🎬 Movie page' />
        </>
    )
}

export default Movie; 