'use client'
import React from 'react'
import Image from 'next/image';

const BebidasDeMordisco = (props) => {
  return (
    <div className='grid grid-cols-2 w-80 h-44 bg-orange-100 rounded-lg relative border-2 border-orange-400'>
      <div className='ml-1 py-1'>
        <Image 
        src={(props.img== ''? `/pabellon.jpeg`: props.img)}
        alt= 'imagen'
        className='object-cover w-40 h-40 rounded-lg'
        width={140}
        height={140}
        />
      </div>

      <div className='flex flex-col items-center'>
        <h1 className='text-2xl ml-1'>{props.id}</h1>
        <h2 className='text-lg ml-1 text-green-500' >{props.precio}$</h2>

        <div className='flex items-center justify-end mr-4 ml-1 absolute bottom-2 right-0 border border-green-700 rounded-lg'>
          <button className='bg-green-400 w-24 h-8 rounded-lg'>Agregar +</button>
        </div>  
      </div>



    </div>
    )
};

export default BebidasDeMordisco;