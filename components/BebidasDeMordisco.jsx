import React from 'react'
import Image from 'next/image';

const BebidasDeMordisco = (props) => {
  return (
    <div className='flex flex-col w-64 h-60 bg-gray-200 rounded-lg'>
        <div className='ml-1 mt-1'>
        <Image 
        src={(props.img== ''? `/pabellon.jpeg`: props.img)}
        alt= 'imagen'
        className='bg-white-200 rounded-lg'
        width={140}
        height={140}
        />
        </div>

        <h1>{props.id}</h1>
        <h2>{props.precio}</h2>
    </div>
  )
};

export default BebidasDeMordisco;