'use client'
import React from 'react';
import useFetch from '@/app/api/useFetch';
import { useRouter } from 'next/router';
import { BsArrowLeftCircle } from 'react-icons/bs';
import Link from 'next/link';


type Character = {
  id: number;
  name: string;
  image: string;
  dateOfBirth: string;
  yearOfBirth: string;
  wizard: string;
  species: string;
  gender: string;
  house: string;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  alternate_names: any;
};


const CharacterPage = () => {
  const router = useRouter();
  const id = router.query.id as string; 
  const { data, error } = useFetch(id);
  

  if (error) {
    return <div className="text-center py-8">Error: {error}</div>;
  }

  const character: Character = data[0];

  return (
    <div >
      <div>
      <Link href="/" className='cursor-pointer p-10px custom-button'>
      <BsArrowLeftCircle className='py-[10px] pl-[10px] text-black text-[60px]'/>
      </Link>
      </div>
      {character ? (
        <div className="max-w-3xl p-8 bg-black rounded shadow">
          <div className="md:flex justify-center">
            <img
              src={character.image}
              alt={character.name}
              className="w-48 h-auto rounded-lg"
            />
          </div>
          <div className="text-center md:text-left md:mt-0 mt-4">
            <h1 className="char-name text-2xl font-bold mb-2 text-white">{character.name}: </h1>
            {character.alternate_names && character.alternate_names.length > 0 && (
              <p className="char-details char-alt-name text-gray-600">
                <span className="char-label-background">Alternate Names: </span> {character.alternate_names.join(", ")}
              </p>
            )}
            <p className="char-details char-dob text-gray-600">
              <span className="char-label-background">Date of Birth: </span> {character.dateOfBirth}
            </p>
            <p className="char-details char-yob text-gray-600">
              <span className="char-label-background">Year of Birth </span> {character.yearOfBirth}
            </p>
            <p className="char-details char-wizard text-gray-600">
              <span className="char-label-background">Wizard: </span> {character.wizard ? character.wizard.toString() : "Unknown"}
            </p>
            <p className="char-details char-species text-gray-600">
              <span className="char-label-background">Species: </span> {character.species}
            </p>
            <p className="char-details char-gender text-gray-600">
              <span className="char-label-background">Gender: </span> {character.gender}
            </p>
            <p className="char-details char-house text-gray-600">
              <span className="char-label-background">House: </span> {character.house}
            </p>
            <p className="char-details char-ancestry text-gray-600">
              <span className="char-label-background">Ancestry: </span> {character.ancestry}
            </p>
            <p className="char-details char-eyeColour text-gray-600">
              <span className="char-label-background">Eye Colour: </span> {character.eyeColour}
            </p>
            <p className="char-details char-hairColour text-gray-600">
              <span className="char-label-background">Hair Colour: </span> {character.hairColour}
            </p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CharacterPage;