'use client'
import React from 'react'
import Image from 'next/image';
import { data } from 'autoprefixer';
import { usePedidos } from '@/context/ComidaContext';

const Fichas = (props) => {
  const {setAbierto, setOrden, orden} = usePedidos()

  const agregarProducto = (event, datap) => {
    event.preventDefault()
    setAbierto(true);
    setOrden([...orden, datap])
    console.log(orden)
  }
  return (
    <div className='grid grid-cols-2 w-80 h-44 bg-stone-200 rounded-lg relative'>
      <div className='m-2'>
        <Image 
        src={(props.img == ''? `/pabellon.jpeg`: props.img)}
        alt= 'imagen'
        className='object-cover w-40 h-40 rounded-lg'
        width={140}
        height={140}
        />
      </div>

      <div className='flex flex-col items-center mt-4'>
        <h1 className='text-2xl ml-1'>{props.id}</h1>
        <h2 className='text-lg ml-1 text-green-500 mt-4' >{props.precio}$</h2>

        <div className='flex items-center justify-end mr-4 ml-1 absolute bottom-2 right-0 rounded-lg'>
          <button className='bg-fuchsia-500 w-24 h-8 rounded-lg text-white'
          onClick={(event) => agregarProducto(event, props)}
          >
            Agregar +
          </button>
        </div>  
      </div>
    </div>
    )
};

export default Fichas;