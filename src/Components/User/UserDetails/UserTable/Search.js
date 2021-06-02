import React, { useState } from 'react';

const Search = ({onSearch}) => {
  
    const [searchText, setSearchText] = useState('')

    const onInputChange = (value) => {
        setSearchText(value);
        onSearch(value)
    }

    return (
        <div className='search-section'>
            <div className="text-right my-3">
                <input type="search" value={searchText} onChange={(e) => onInputChange(e.target.value)} className="form-control" placeholder='search'/>
            </div>
        </div>
    );
};

export default Search;