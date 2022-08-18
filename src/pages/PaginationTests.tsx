import React from 'react';
import { Pagination } from '../components';

const PaginationTests : React.FC = () => {
    return (
        <>
            <Pagination 
                pageCount={3}
                type="contextual"
                itemCount={50}
            />
        </>
    );
};

export default PaginationTests;