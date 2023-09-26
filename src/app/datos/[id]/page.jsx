'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { usePedidos } from '@/context/ComidaContext'
import Comanda from '../../../../components/Comanda'
const Datos = () => {
  const {historia} = usePedidos();
  const router = usePathname()
  let index = router.substring(router.lastIndexOf('/') + 1)
  const esto = historia[index]
  const lista = esto.todo;
  console.log(lista);
  console.log(`datos de: ${index}`,esto);
  return (
    <div className='mx-4'>
      <section className='my-4'>
        <h1 className='text-stone-500'>Ventas del:  {esto.dia}/{esto.mes}/{esto.ano}</h1>
      </section>
      <section className=' lista overflow-y-scroll border-solid border-2'>
        <h1 className='m-4'>
          {lista.map(([key,value]) => (
            <Comanda 
            key= {key}
            producto = {key}
            cantidad ={value}
            />
            ))}
        </h1>
      </section>  
      <section className='flex mt-4'>
        <h1 className='font-bold'>{`ref. Ventas Divisas (Ventas del dia):`}</h1>
        <p className='ml-4 text-green-500'>{esto.ventasDiarias}$</p>
      </section>
    </div>


  )
}

export default Datos