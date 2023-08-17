import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/utils/motion'
import Image from 'next/image';
import Link from 'next/link';


interface CharacterCardProps {
    image: string;
    name: string;
    dateOfBirth: string;
    id: string;
    house: string;
   
  }
  
  const imageStyle = {
    borderRadius: '15px',
    border: '1px solid #fff',
  }
  const CardTemplate: React.FC<CharacterCardProps> = ({ image, name, dateOfBirth, id, house }) => {

  return (
    <motion.div variants={fadeIn("right", "spring", 0.5 , 0.75)} className='w-full p-[1px] rounded-[20px]'>
        <Tilt
            options={{
                max: 45,
                scale: 1,
                speed: 450
              }}
            className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-5 rounded-2xl sm:w-[360px] w-full"
        >
            <div className='relative flex items-center box-shadow'>
            <Image 
                src={image}
                width={300}
                height={15}
                alt={name}
                style={imageStyle}
            />
            </div>
            <div className='m-5'>
          <h1 className='text-primary font-bold text-[24px]'>Name :</h1>
          <h3 className='mt-2 text-secondary text-[14px] p-5px'>{name}</h3>
          <h1 className='text-primary font-bold text-[24px]'>Date of Birth:</h1>
          <h3 className='mt-2 text-secondary text-[14px] p-5px'>{dateOfBirth}</h3>
        </div>
        
        <Link 
          href={`/components/CharacterCard/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className=' text-white font-bold black-gradient w-[300px] h-[50px] rounded-t-lg flex justify-center items-center cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 '>
              View
  
        </Link>
        </Tilt>
    </motion.div>
  )
}

export default CardTemplate
