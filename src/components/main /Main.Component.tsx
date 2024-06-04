import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import Form from '../form/Form.Component';
import Results from '../results/Results.Component';
import PreviousResults from '../previousResults/PreviousResults.Component';

const Main: React.FC = () => {

    const title = useSelector((state: RootState) => state.search.value);

    return (
        <main className='container p-6 mx-auto flex'>
            <span>test</span>
            <section className='basis-9/12'>
                <Form />
                {title && <Results />}
            </section>
            <aside className='flex-1 ps-4'>
                <PreviousResults />
            </aside>
        </main>
    )
}

export default Main;