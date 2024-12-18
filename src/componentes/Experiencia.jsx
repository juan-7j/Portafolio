import React from 'react'
import { EXPERIENCIAS } from '../constants'
import { motion } from 'motion/react';


const Experiencia = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 0.5}} className='my-20 text-center text-4xl'>Experiencia</motion.h1>

            <div>
                {EXPERIENCIAS.map((experience, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-neutral-400'>{experience.año}</p>
                        </motion.div>
                        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}} className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>{experience.rol} - <span className='text-sm text-purple-100'>{experience.lugar}</span>
                            </h6>
                            <p className='mb-4 text-neutral-400'>{experience.descripcion}</p>
                            {experience.tecnologias.map((tec, index) =>
                                (<span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tec}</span>))}
                        </motion.div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Experiencia