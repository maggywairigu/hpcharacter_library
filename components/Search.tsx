import React from 'react';

const Search = ({type, name, placeholder, value, handleChange}) => {
    return(
        <div>
             <input
                type={type}
                id={name}
                name={name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-[1000px] p-3 "
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
        />
        </div>
    )
}

export default Search;