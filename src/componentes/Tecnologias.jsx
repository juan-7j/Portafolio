import React from 'react'
import { DiCss3, DiGit, DiMysql, DiPython } from 'react-icons/di';
import { PiFileCSharpBold, PiFileSql } from 'react-icons/pi';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandJavascript } from 'react-icons/tb';

const Tecnologias = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h1 className='my-20 text-center text-4xl'>Tecnologias</h1>
            <div className='flex flex-wrap items-center justify-center gap-4'><div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </div>

                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiCss3 className='text-7xl text-blue-600' />
                </div>

                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiGit className='text-7xl text-orange-600' />
                </div>

                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiPython className='text-7xl text-green-500' />
                </div>

                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiMysql className='text-7xl text-cyan-400' />
                </div>

                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <PiFileSql className='text-7xl ' />
                </div>

                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <PiFileCSharpBold className='text-7xl ' />
                </div>

                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TbBrandJavascript className='text-7xl text-cyan-400' />
                </div>

            </div>

        </div>
    )
}

export default Tecnologias