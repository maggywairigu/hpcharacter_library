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
      <div>
        <div>
          <Link href="/">
            <FaArrowLeft className='link' 
            style={{fontSize: 20, color: '#121212', cursor: 'pointer', padding: 20,
            position: 'absolute', left: "10%"}}/>
          </Link>
        </div>

        {character ? (
          <div 
          style={{background: 'linear-gradient(to right, #3c3b3f, #605c3c)', borderRadius: '15px 0 15px 0', 
            boxShadow: '21px 22px 5px 0px rgba(0,0,0,0.45)', width: '45%', margin: 'auto', padding: '10px'
          }} className='card'>

            <div style={{margin: 'auto', padding: "3px 1px", width: '34%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px'
            }} className='image'>
              <img
                src={character.image}
                alt={character.name}
                style={{borderRadius: '5px', width: '60%', height: '30%'}}
              />
            </div>

            <div style={{textAlign: 'left', color: 'white'}} className='container'>
              <h1 style={{ textAlign: 'center', color: '#cfaf0d', fontSize: '20px'}} >{character.name}: </h1>
              <hr style={{borderColor: '#cfaf0d', margin: 'auto', width: '60%'}}/>
              <div style={{marginLeft: '30%'}}>
              {character.alternate_names && character.alternate_names.length > 0 && (
                <div >
                  <b style={{ color: '#daa520', fontSize: '12px'}}>Alternate Names: </b> 
                  <p style={{ color: 'white', fontSize: '10px'}}>{character.alternate_names.join(", ")}</p>
                </div>
              )}
              <div>
                <b style={{ color: '#daa520', fontSize: '12px'}}><span >Date of Birth: </span> </b>
                <p style={{ color: 'white', fontSize: '10px'}}>{character.dateOfBirth}</p>
              </div>

              <div>
                <b style={{ color: '#daa520', fontSize: '12px'}}><span>Year of Birth </span></b>
                <p style={{color: 'white', fontSize: '10px'}}>{character.yearOfBirth}</p>
              </div>
              
              <div>
                <b style={{color: '#daa520', fontSize: '12px'}}><span >Wizard: </span></b>
                <p style={{color: 'white', fontSize: '10px'}}>{character.wizard ? character.wizard.toString() : "Unknown"}</p>
              </div>
              
              <div>
                <b style={{ color: '#daa520', fontSize: '12px'}}><span >Species: </span></b>
                <p style={{color: 'white', fontSize: '10px'}}>{character.species}</p>
              </div>
             
              <div>
                <b style={{color: '#daa520', fontSize: '12px'}}><span >Gender: </span></b>
                <p style={{ color: 'white', fontSize: '10px'}}>{character.gender}</p>
              </div>
              
              <div>
                <b style={{ color: '#daa520', fontSize: '12px'}}><span >House: </span></b>
                <p style={{color: 'white', fontSize: '10px'}}>{character.house}</p>
              </div>

              <div>
                <b style={{ color: '#daa520', fontSize: '12px'}}><span >Ancestry: </span></b>
                <p style={{color: 'white', fontSize: '10px'}}>{character.ancestry}</p>
              </div>
             
              <div>
                <b style={{ color: '#daa520', fontSize: '12px'}}><span >Eye Colour: </span></b>
                <p style={{color: 'white', fontSize: '10px'}}>{character.eyeColour}</p>
              </div>
              
              <div>
                <b style={{ color: '#daa520', fontSize: '12px'}}><span >Hair Colour: </span></b>
                <p style={{color: 'white', fontSize: '10px'}}>{character.hairColour}</p>
              </div>
             </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
  );
};

export default CharacterPage;