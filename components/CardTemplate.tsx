import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '@/utils/motion';
import Image from 'next/image';
import Link from 'next/link';

interface CharacterCardProps {
  image: string;
  name: string;
  dateOfBirth: string;
  id: string;
}

const CardTemplate: React.FC<CharacterCardProps> = ({ image, name, dateOfBirth, id }) => {

  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5, 0.05)}
      className='w-full p-1 md:p-2 lg:p-3 xl:p-4 rounded-lg relative flex flex-col md:flex-row items-center shadow-md'
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 p-5 rounded-2xl md:w-[360px] w-full"
      >
        <div>
          <Image src={image} width={300} height={150} alt={name} className='rounded m-auto' />
        </div>
        <div className='mt-5 md:ml-5'>
          <h1 className='p-4 text-primary font-bold text-xl md:text-2xl'>Name:</h1>
          <h3 className='m-2 p-4 text-white text-sm md:text-base'>{name}</h3>
          <h1 className='p-4 text-primary font-bold text-xl md:text-2xl mt-5'>Date of Birth:</h1>
          <h3 className='m-2 p-4 text-white text-sm md:text-base'>{dateOfBirth}</h3>
        </div>
        <Link
          href={`/character/${encodeURIComponent(id)}`}
          
          className='text-white font-bold black-gradient w-full md:w-[300px] h-10 md:h-12 rounded-md flex justify-center items-center cursor-pointer bg-primary hover:bg-tertiary mt-5 md:mt-0'

        >
          
          View
        </Link>
      </Tilt>
    </motion.div>
  );
};

export default CardTemplate;
