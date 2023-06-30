'use client';

import React, { useState } from 'react'

const ProjectSearch = ({ getSearchResults }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`/api/projects/search?query=${query}`);
        const projects = await res.json();
        getSearchResults(projects);

    }
    return (
        <form onSubmit={handleSubmit} className='search-form'>
            <input
                type='text'
                className='search-input'
                placeholder='Search Projects...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <button className='search-button' type='submit'>
                Search
            </button>

        </form>
    )
}

export default ProjectSearch