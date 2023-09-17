'use client'
import { usePedidos } from '@/context/ComidaContext'
import { precioTotal } from '@/utils'
import React from 'react'
import Comandas from './Comandas'
import '../src/app/globals.css'

const Orden= () => {
  const {abierto, orden} = usePedidos()
  return (
<aside className={`${abierto? 'flex' : 'hidden'} ckeckout-side-menu flex-col fixed right-4 top-0  border border-black rounded-lg  bg-white`}
    >
      <div  className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>
          My Order 
        </h2>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
        {
            orden.map(product => (
                <Comandas 
                    key={product.id}
                    id={product.id}
                    img={product.img}
                    price={product.precio}
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
            ${precioTotal(orden)}
          </span>
        </p>

      </div>
    </aside>
  )
}

export default Orden