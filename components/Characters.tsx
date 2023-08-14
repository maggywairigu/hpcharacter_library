'use client';
import React, {useEffect, useState}from 'react'
import CardTemplate from './CardTemplate';

function Characters() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://hp-api.onrender.com/api/characters')
        .then(response => response.json())
        .then(data => setData(data));
    }, [])
  return (
    <div className='sm:px-16 px-6 max-w-7xl mx-auto relative z-0 mt-[1000px]' >
        <CardTemplate />
    </div>
  )
}

export default Characters
