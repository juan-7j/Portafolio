import React from 'react'
import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center textt-4xl'>Sobre <span className='text-neutral-500'>Mi</span>
            </h1>
            <div className='flex flex-wrap'>

                <div className='w-full lg:w-1/2 lg:p-8'>

                <div className='flex items-center justify-center'>
                    <img className='rounded-2xl' src={aboutImg} alt="Sobre mi" />
                </div>
                
                </div>
                
                <div className='flex justify-center lg:justify-start'>
                    <p>{ABOUT_TEXT}</p>
                </div>
            
            </div>
        
        </div>
        
    )
}

export default About