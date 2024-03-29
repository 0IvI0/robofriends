import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
        <input
            className='p3 ba b--green bg-lightest-blue'
            type='search'
            placeholder='search friends'
            onChange={searchChange}
        />
        </div>
    );
}

export default SearchBox;
