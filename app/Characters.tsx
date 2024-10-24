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
  data: Character[] | null;
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
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [allCards, setAllCards] = useState<Character[]>([]);
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | undefined>(
    undefined
  );
  const [searchedResults, setSearchedResults] = useState<Character[] | null>(null);

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
          setSearchedResults(null);
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
    <div className="mt-[55px] mb-[85px] p-8 sm:p-2 mx-4 md:mx-10 lg:mx-20 xl:mx-32 ">
      <div className='fixed z-40' style={{position: 'fixed', backgroundColor: '#121212',
        width: '100vw', padding: '40px'
      }}>
        <Search
          type="text"
          name="text"
          placeholder="Search character"
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>
      

      <div className="pt-28 mt-8">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 overflow-y-auto max-h-500 ">
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
