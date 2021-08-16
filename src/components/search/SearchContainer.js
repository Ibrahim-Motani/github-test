import React from 'react';
import KeywordSearch from './KeywordSearch';
import UsernameSearch from './UsernameSearch';

import './SearchContainer.css';

function SearchContainer() {
    return (
        <div className="searchContainer">
            <UsernameSearch></UsernameSearch>
            <KeywordSearch></KeywordSearch>
        </div>
    )
}

export default SearchContainer
