'use client'
import React from 'react';
import useFetch from '@/app/api/useFetch';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import './character.css'



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
    <>
      <div style={{padding: '3%'}} >
        <div>
          <Link href="/" >
            <FaArrowLeft style={{fontSize: 30, color: '#121212', cursor: 'pointer', padding: 20, position: 'absolute', left: "20%"}}/>
          </Link>
        </div>

        {character ? (
          <div style={{margin: 'auto', background: 'linear-gradient(to right, #3c3b3f, #605c3c)',
          width: "30%", padding: 30, borderRadius: '15px 0 15px 0', boxShadow: '21px 22px 5px 0px rgba(0,0,0,0.45)'}}>
            <div style={{margin: 'auto', background: '#cfaf0d', padding: "3px 1px", width: '34%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px'
            }}>
              <img
                src={character.image}
                alt={character.name}
                style={{borderRadius: '5px'}}
              />
            </div>

            <div style={{textAlign: 'left', color: 'white'}} className='container'>
              <h1 style={{textAlign: 'center', color: '#cfaf0d'}} >{character.name}: </h1>
              <hr style={{borderColor: '#cfaf0d', margin: '20px'}}/>
              {character.alternate_names && character.alternate_names.length > 0 && (
                <div >
                  <b>Alternate Names: </b> 
                  <p>{character.alternate_names.join(", ")}</p>
                </div>
              )}
              <div>
                <b><span >Date of Birth: </span> </b>
                <p>{character.dateOfBirth}</p>
              </div>

              <div>
                <b><span>Year of Birth </span></b>
                <p>{character.yearOfBirth}</p>
              </div>
              
              <div>
                <b><span >Wizard: </span></b>
                <p>{character.wizard ? character.wizard.toString() : "Unknown"}</p>
              </div>
              
              <div>
                <b><span >Species: </span></b>
                <p>{character.species}</p>
              </div>
             
              <div>
                <b><span >Gender: </span></b>
                <p>{character.gender}</p>
              </div>
              
              <div>
                <b><span >House: </span></b>
                <p>{character.house}</p>
              </div>

              <div>
                <b><span >Ancestry: </span></b>
                <p>{character.ancestry}</p>
              </div>
             
              <div>
                <b><span >Eye Colour: </span></b>
                <p>{character.eyeColour}</p>
              </div>
              
              <div>
                <b><span >Hair Colour: </span></b>
                <p>{character.hairColour}</p>
              </div>
             
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default CharacterPage;