'use client'
import React from 'react'
import Image from 'next/image';
import { usePedidos } from '@/context/ComidaContext';

const Fichas = (props) => {
  const {abrirPrew, setOrden, orden, setComanda, comanda} = usePedidos()

  const agregarProducto = (event, datap) => {
    event.preventDefault()
    abrirPrew();
    setOrden([...orden, 
      {
        ...datap,
      }
    ]);
    setComanda([...comanda,
    {
      ...datap,
    }
    ])
  }
  const esta = (id) => {
    const si = orden.filter(product => product.id === id).length > 0
    if(si){
      return(
        <div className='flex items-center justify-end mr-4 ml-1 absolute bottom-2 right-0 rounded-lg'>
          <button className='bg-green-500 w-24 h-8 rounded-lg text-white'
          >
            Agregado 
          </button>
        </div>         
      )
    }else {
      return(
      <div className='flex items-center justify-end mr-4 ml-1 absolute bottom-2 right-0 rounded-lg'>
            <button className=' group flex items-center justify-center bg-indigo-500 w-24 h-8 rounded-lg text-white'
            onClick={(event) => agregarProducto(event, props)}
            >
              <p className='group-hover:text-green-300'>
                Agregar 
              </p>
              <span className='ml-2 group-hover:animate-bounce group-hover:text-green-400'>+</span>
            </button>
      </div>         
      )
    }

  }
  return (
    <div className='grid grid-cols-2 w-80 h-44 bg-sky-50 shadow-2xl shadow-gray-400 rounded-lg  relative'>
      <div className=''>
        <Image 
        src={(props.img == ''? `/pabellon.jpeg`: props.img)}
        alt= {`imagen de ${props.id}`}
        className='object-cover w-40 h-44 rounded-lg'
        width={140}
        height={130}
        />
      </div>

      <div className='flex flex-col items-center mt-4'>
        <h1 className='text-2xl ml-1'>{props.id}</h1>
        <h2 className='text-lg ml-1 text-green-500 mt-4' >{props.precio}$</h2>

        {esta(props.id)}
      </div>
    </div>
    )
};

export default Fichas;