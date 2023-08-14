import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from './motion'

const SectionWrapper = (Component: React.FC, idName: string | undefined) => 
    function HOC() {
        return (
            <motion.section 
            variants={staggerContainer(0.1, 0.05)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, amount: 0.25}} 
            className={'sm:px-16 px-6 max-w-7xl mx-auto relative z-0'}>
                <span className='hash-span' id={idName}> &nbsp; </span>
                <Component />
            </motion.section>
        )
}

export default SectionWrapper
