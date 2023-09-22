'use client'
import { usePedidos } from '@/context/ComidaContext'
import { precioTotal } from '@/utils'
import React from 'react'
import Comandas from './Comandas'
import '../src/app/globals.css'

const Orden= () => {
  const {abierto, orden, cerrar, setOrden, comanda, setComanda} = usePedidos()
  const eliminarPedido = (id) => {
    const filteredProducts = orden.filter(product => product.id != id)
    setOrden(filteredProducts)
    const filteredProducts2 = comanda.filter(product => product.id != id)
    setComanda(filteredProducts2)
  }
  return (
<aside className={`${abierto? 'flex' : 'hidden'} ckeckout-side-menu flex-col fixed right-4 top-0  border border-black rounded-lg  bg-white`}
    >
      <div  className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>
          Orden 
        </h2>
        <div 
        className='flex items-center justify-center rounded-full w-8  h-8 cursor-pointer bg-indigo-200'
        onClick= {()=> cerrar()}
        >
          <h1>X</h1>
        </div>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
        {
            orden.map(product => (
                <Comandas 
                    key={product.id}
                    id={product.id}
                    img={product.img}
                    price={product.precio}
                    eliminar={eliminarPedido}
                />
            ))
        }        
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>
            Total:
          </span>
          <span className='font-medium text-2xl'>
            ${precioTotal(comanda)}
          </span>
        </p>

      </div>
    </aside>
  )
}

export default Orden