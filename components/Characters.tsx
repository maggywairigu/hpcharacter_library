'use client';
import React, {useEffect, useState}from 'react'
import CardTemplate from './CardTemplate';

function Characters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://hp-api.onrender.com/api/characters')
        .then(response => response.json())
        .then(data => setCharacters(data));
    }, [])
  return (
    <>
    <div className='flex justify-between items-center sm:px-16 px-6 max-w-7xl mx-6 relative z-0 mt-[130px] grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3' >
        {characters.map(character => (
            <CardTemplate
            image={character.image} 
            key={character.name}
            name={character.name} 
            dateOfBirth={character.dateOfBirth}
            id={character.id} />
        ))}
        
    </div>
    </>
  )
}

export default Characters
