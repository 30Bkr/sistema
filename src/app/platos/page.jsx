'use client'
import React from 'react'
import { usePedidos } from '@/context/ComidaContext'
import Fichas from '../../../components/Fichas';




const Platos = () => {  
    // const {comida} = usePedidos()

  return (
    <div className='mx-4 mt-4'>
      <h1 className='flex w-full-screen justify-center mb-4'>Mordisco y Sabor.</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center'>
        {comida.map( producto => (
          <Fichas 
          key={producto.id}
          id={producto.id}
          precio={producto.price}
          img={producto.img}
          />
        ))}
      </div>

    </div>
  )
}

export default Platos