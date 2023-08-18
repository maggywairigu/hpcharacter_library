import React from 'react';

interface SearchProps {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

const Search: React.FC<SearchProps> = ({ type, name, placeholder, value, handleChange }) => {
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