'use client';
import React, { useEffect, useState } from 'react';
import CardTemplate from './CardTemplate';
import Search from './Search';
import Loader from './Loader';

const RenderCards = ({ data }) => {
  console.log("RenderCards data:", data);
  if (data?.length > 0) {
    return data.map(character => (
      <CardTemplate
        key={character.id}
        image={character.image}
        name={character.name}
        dateOfBirth={character.dateOfBirth}
        id={character.id}
        house={character.house}
      />
    ));
  }
  return <p>No Search Results Found</p>;
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allCards, setAllCards] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const fetchCards = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://hp-api.onrender.com/api/characters');
      if (response.ok) {
        const result = await response.json();
        setAllCards(result);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  useEffect(() => {
    console.log("Characters state:", characters); // Add this line
  }, [characters]);

  const handleSearchChange = (e) => {
    const searchTextValue = e.target.value.toLowerCase();
    setSearchText(searchTextValue);
  
    clearTimeout(searchTimeout);
  
    setSearchTimeout(
      setTimeout(() => {
        if (searchTextValue === "") {
          setSearchedResults(null); // Set to null or an empty array
        } else {
          const searchResult = allCards.filter(
            (character) =>
              character.name.toLowerCase().includes(searchTextValue)
          );
          console.log("Searched Results:", searchResult);
          setSearchedResults(searchResult);
        }
      }, 500)
    );
  };

  return (
    <div className="mt-[130px] mx-[130px] sm:w-auto">
      <Search
        type="text"
        name="text"
        placeholder="Search character"
        value={searchText}
        handleChange={handleSearchChange}
      />
      <div>
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
            {searchText ? (
              <RenderCards data={searchedResults} />
            ) : (
              characters.map(character => (
                <CardTemplate
                  image={character.image}
                  key={character._id}
                  name={character.name}
                  dateOfBirth={character.dateOfBirth}
                  id={character._id}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Characters;
