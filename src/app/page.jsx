"use client"
import Image from 'next/image'
import { usePedidos } from '@/context/ComidaContext'
import BebidasDeMordisco from '../../components/BebidasDeMordisco';

export default function Home() {
  const {bebidas} = usePedidos();
  return (
    <div className='mx-4 mt-4'>
      <h1 className='flex w-full-screen justify-center mb-4'>Mordisco y Sabor.</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center'>
        {bebidas.map( bebidas1 => (
          <BebidasDeMordisco 
          key={bebidas1.id}
          id={bebidas1.id}
          precio={bebidas1.price}
          img={bebidas1.img}
          />
        ))}
      </div>

    </div>

  )
}
