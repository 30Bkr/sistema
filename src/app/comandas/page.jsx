'use client'
import { usePedidos } from '@/context/ComidaContext'
import React from 'react'
import Facturas from '../../../components/Facturas'
import { precioTotal } from '@/utils'

const Ventas = () => {
    const {comandas} = usePedidos()
    console.log(comandas);

    const observar = comandas.map(product => product.productos)
    console.log('aqui',observar);
  return (
    <>
    <h1 className='mx-4 mt-4'>Comandas</h1>
    <div className='flex  relative'>
        <div className='grid grid-cols-3 w-full'>
            <section 
            className='col-span-2 grid grid-cols-3 mb-14 border-solid border-2 mx-4'
            >
                {comandas.map((producto, index) => (
                    <Facturas 
                    key= {index}
                    id={index}
                    cantidad ={producto.productosTotales}
                    precio={producto.precio}
                    articulos= {producto.productos}
                    />
                ))}           
            </section>
            <section className='border-solid border-2 w-max h-full'>
                <h1>mirame</h1>
            </section>            
        </div>


        <section className='flex justify-around fixed my-4 bottom-0 bg-white w-full'>
            <h1 className=' mr-4 text-gray-500'>
                ref.Ventas Totales: {precioTotal(comandas)}$
            </h1>
            <h1 className='mr-4 text-green-500'>
                ref.Ventas Efectivo: {precioTotal(comandas)}$
            </h1>
            <h1 className='text-sky-500'>
                ref.Ventas Punto de Ventas: {precioTotal(comandas)}$
            </h1>
            <h1 className='text-red-500'>
                ref.Ventas Bolivares: {precioTotal(comandas)}$
            </h1>
        </section>
    </div>    
    </>

  )
}

export default Ventas