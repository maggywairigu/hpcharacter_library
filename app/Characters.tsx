'use client';
import React, { useEffect, useState } from 'react';
import CardTemplate from '../components/CardTemplate';
import Search from '../components/Search';
import Loader from '../components/Loader';

interface Character {
  image: string;
  name: string;
  dateOfBirth: string;
  id: string;
 
}

interface RenderCardsProps {
  data: Character[];
}

const RenderCards: React.FC<RenderCardsProps> = ({ data }: { data: Character[] | null }) => {
  console.log("RenderCards data:", data);
  if (data && data.length > 0) {
    return data.map(character => (
      <CardTemplate
        key={character.id}
        image={character.image}
        name={character.name}
        dateOfBirth={character.dateOfBirth}
        id={character.id}
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
  const [searchTimeout, setSearchTimeout] = useState<number | undefined>(undefined);
  const [searchedResults, setSearchedResults] = useState(null);

  const fetchCards = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://hp-api.onrender.com/api/characters');
      if (response.ok) {
        const result = await response.json();
        console.log("Fetched data:", result);
        setAllCards(result);
        setCharacters(result);
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
    console.log("Characters state:", characters); 
  }, [characters]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          <div className="pt-[10px] grid lg:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-6 style={{ overflowY: 'auto', maxHeight: '500px' }}">
            {searchText ? (
              <RenderCards data={searchedResults} />
            ) : (
              characters.map(character => (
                <CardTemplate
                  image={character.image}
                  key={character.id}
                  name={character.name}
                  dateOfBirth={character.dateOfBirth}
                  id={character.id}
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
