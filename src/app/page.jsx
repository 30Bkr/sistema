"use client"
import  Comprador  from '../../components/Comprador'
import  Cliente  from '../../components/Cliente'
import { usePedidos } from '@/context/ComidaContext'
import Fichas from '../../components/Fichas'


export default function Home() {
  const {chucherias, comida, bebidas} = usePedidos()
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
        {chucherias.map( producto => (
          <Fichas 
          key={producto.id}
          id={producto.id}
          precio={producto.price}
          img={producto.img}
          />
        ))}
        {bebidas.map( producto => (
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
