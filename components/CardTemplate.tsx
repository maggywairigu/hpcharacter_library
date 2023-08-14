import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/utils/motion'
import Image from 'next/image';

function CardTemplate() {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
        <Tilt
            options={{
                max: 45,
                scale: 1,
                speed: 450
              }}
            className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-5 rounded-2xl sm:w-[360px] w-full"
        >
            <div className='relative w-full h-[230px]'>
            <Image 
                src='/hpLogo.png'
                width={100}
                height={500}
                alt='HP Library'
            />
            </div>
            <div className='mt-5'>
          <h3 className='text-primary font-bold text-[24px]'>Name:</h3>
          <p className='mt-2 text-secondary text-[14px]'></p>
          <h3 className='text-primary font-bold text-[24px]'>Date of Birth:</h3>
          <p className='mt-2 text-secondary text-[14px]'></p>
        </div>

        <button
            onClick={() => window.open("_blank")}
            className='black-gradient w-100 h-30 flex justify-center items-center cursor-pointer'>
              View
            </button>
        </Tilt>
    </motion.div>
  )
}

export default CardTemplate
