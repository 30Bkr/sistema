'use client'
import { usePedidos } from '@/context/ComidaContext'
import { precioTotal } from '@/utils'
import React from 'react'
import Comandas from './Comandas'
import '../src/app/globals.css'
import Link from 'next/link'

const Orden= () => {
  const {abierto, orden, cerrar, setOrden, comanda, setComanda, comandas, setComandas} = usePedidos()
  const eliminarPedido = (id) => {
    const filteredProducts = orden.filter(product => product.id != id)
    setOrden(filteredProducts)
    const filteredProducts2 = comanda.filter(product => product.id != id)
    setComanda(filteredProducts2)
  }

  const facturar = () => {
    const vendido = {
      productos: comanda,
      productosTotales: comanda.length,
      precio: precioTotal(comanda),

    }
    setComandas([...comandas, vendido])
    setComanda([])
    setOrden([])
    cerrar()
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
          <span className='font-medium text-2xl text-green-600'>
            ${precioTotal(comanda)}
          </span>
        </p>
        <Link href='/comandas' >
          <button 
            className='w-full h-12 bg-black rounded-lg'
            onClick={()=> facturar()}
          >
            <p className='text-white'>Facturar</p>
          </button>
        </Link>
      </div>

    </aside>
  )
}

export default Orden