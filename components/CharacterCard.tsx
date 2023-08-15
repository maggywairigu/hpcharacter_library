import React, { useEffect, useState }from 'react'
import { useRouter } from 'next/router';

const CharacterCard: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [character, setCharacter] = useState<any>({}); // Change the type if needed

  useEffect(() => {
    if (id) {
      fetch(`https://hp-api.onrender.com/api/characters`)
        .then(response => response.json())
        .then(data => setCharacter(data));
    }
  }, [id]);

  return (
    <div>
      <h1>{character.name}</h1>
      <p>Role: {character.role}</p>
      <p>House: {character.house}</p>
      {/* Display other character details here */}
    </div>
  );
};

export default CharacterCard
