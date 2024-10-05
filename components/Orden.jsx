'use client'
import { usePedidos } from '@/context/ComidaContext'
import { precioTotal } from '@/utils'
import React from 'react'
import Comandas from './Comandas'
import '../src/app/globals.css'
import Link from 'next/link'

const Orden= () => {
  const {abierto, abiertoPrew, abrirPrew, orden, cerrar, abrir, setOrden, comanda, setComanda,  preview, setPreview, cerrarPrew} = usePedidos()

  const eliminarPedido = (id) => {
    const filteredProducts = orden.filter(product => product.id != id)
    setOrden(filteredProducts)
    const filteredProducts2 = comanda.filter(product => product.id != id)
    setComanda(filteredProducts2)
  }

  const facturar = () => {
    // const vendido = {
    //   productos: comanda,
    //   productosTotales: comanda.length,
    //   precio: precioTotal(comanda),
    // }
    // setComandas([...comandas, vendido])

    const mira = {
      productos: comanda,
      productosTotales: comanda.length,
      precio: precioTotal(comanda),
    }
    setPreview([...preview, mira])
    setComanda([])
    setOrden([])
    cerrar();
    cerrarPrew();
  }
  return (
    // flex ckeckout-side-menu flex-col fixed right-4 top-0  border border-black rounded-lg  bg-white' 
    <aside className={`${abiertoPrew? 'checkout-side-menu-preview  flex-col fixed right-4 top-0  border border-black rounded-lg  bg-yellow-500'
      : abierto? 'flex ckeckout-side-menu flex-col fixed right-4 top-0  border border-black rounded-lg  bg-white' 
      :'1'}`}
    >
      <div  className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>
          Orden 
        </h2>
        <div 
        className={`${abiertoPrew? 'flex bg-yellow-200 ': ' flex rotate-180 bg-indigo-200'} items-center justify-center rounded-full w-8  h-8 cursor-pointer  `}
        onClick= {()=> {
          if(abiertoPrew){
            cerrarPrew()
            abrir()
          }else {
            abrirPrew()
          }}}
        >
          ^
        </div>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
        {
            orden.map((product, index) => (
                <Comandas 
                    key={`${product.id}${index}`}
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
        <Link href='/pago' >
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