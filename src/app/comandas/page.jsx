'use client'
import { usePedidos } from '@/context/ComidaContext'
import React from 'react'
import Facturas from '../../../components/Facturas'
import { precioTotal } from '@/utils'
import '../globals.css'


const Ventas = () => {
    const {comandas} = usePedidos()
    const observar = comandas.map(product => product.productos)
    const contar = observar.flat()
    const contador = contar
    .map(item => item.id)
    .reduce((obj,item)=>{
        if(!obj[item]){
            obj[item] =1;
        }else {
            obj[item] = obj[item] + 1;
        }
        return obj;
    }, {});
    const final = Object.entries(contador)
  return (
    <>
    <h1 className='mx-4 mt-4'>Comandas</h1>
    <div className='flex  relative'>
        <div className='grid grid-cols-3 w-full'>
            <section 
            className=' comandas col-span-2 overflow-y-scroll grid grid-cols-5 mb-14 border-solid border-2 mx-4'
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
            <section className=' lista border-solid border-2 w-max h-full'>
                <h1 className='m-4'>
                    {final.map(([key,value]) => (
                            <div className='border-bottom flex justify-between mb-4 w-full'>
                                <p className='font-bold mr-4'>{key}: </p>
                                <div className='flex'>
                                    <p className='mr-1 text-red-500'>{value}</p>
                                    <p>Unidades</p>
                                </div>
                            </div>
                    ))}
                </h1>
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
        </section>
    </div>    
    </>

  )
}

export default Ventas