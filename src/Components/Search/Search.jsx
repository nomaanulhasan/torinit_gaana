import React, { useState } from 'react';
import Cookies from 'js-cookie';

import './styles.scss';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState(Cookies.get('searchQuery') || '');

    return (
        <div className="search-bar">
            <form action="/home" method="get">
                <label htmlFor="search">
                    <span className="visually-hidden">Search Songs</span>
                </label>
                <input
                    type="text"
                    id="search"
                    name="search" 
                    placeholder="Search Songs"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </form>
        </div>
    );
};

export default Search;
