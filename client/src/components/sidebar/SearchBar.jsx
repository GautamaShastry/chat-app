import React from 'react'

const SearchBar = () => {
    return (
        <form className='flex items-center gap-2'>
            <input 
                type="text" 
                placeholder='Search...'
                className='input input-bordered rounded-full'
            />
        </form>
    ) 
}

export default SearchBar
