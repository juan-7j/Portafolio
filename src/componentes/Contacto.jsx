import React from 'react'
import { CONTACT } from '../constants'

const Contacto = () => {
    return (
        <div className='border-b border-neutral-900 pb-20'>
            <h2 className='my-10 text-center text-4xl'>Contacto</h2>
            <div className='text-center tracking-tighter'>
                <p className='my-4'>{CONTACT.address}</p>
                <p className='my-4'>{CONTACT.phoneNo}</p>
                <p href='#' className='border-b'>{CONTACT.address}</p>


            </div>
        </div>
    )
}

export default Contacto