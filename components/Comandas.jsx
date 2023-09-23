import { usePedidos } from '@/context/ComidaContext'
import Image from 'next/image'
import React, { useState } from 'react'

const Comandas = props => {
  const { id, img, price, eliminar, nombre} = props
  const [unidad, setUnidad] = useState(1)
  const {orden, setOrden, comanda, setComanda} = usePedidos()
  


  const sumarPedido = (event, peso) => {
    event.preventDefault()
    const identificar = orden.find((product) => product.id === peso)
    setComanda([...comanda, identificar].flat())
    setUnidad(unidad + 1)
  }
  const restarPedido = (event, id) => {
    event.preventDefault()
    let filteredProducts2 = comanda.filter(product => product.id != id)
    let seleccionar = comanda.filter(product => product.id === id)
    seleccionar.splice(0,1)
    let listo = filteredProducts2.concat(seleccionar)
    setComanda(listo)
    setUnidad(unidad - 1)
  }


  return (
    <div className='flex mb-2 items-center relative'>
        <Image 
        src={(img == ''? `/pabellon.jpeg`: img)}
        alt= {`imagen de ${id}`}
        className='object-cover w-30 h-40 rounded-lg'
        width={120}
        height={100}
        />
        <div className='flex ml-4 '>
          <h1 className='font-bold'>{id}</h1>
          <h2 className='ml-1 text-green-600'>{price}$</h2>
        </div>
        <div className='absolute flex bottom-8 left-48 font-bold'>
          <p 
          className={`${unidad==1 ? 'hidden' : 'flex'} mr-1 w-4 h-4 items-center justify-center bg-red-200 rounded-full cursor-pointer`}
          onClick={(event)=> restarPedido(event, id)}
          >-</p>
          <h1 className='flex mx-1 w-4 h-4 items-center justify-center'>{unidad}</h1>
          <p 
          className='flex ml-1 w-4 h-4 items-center justify-center bg-red-200 rounded-full cursor-pointer'
          onClick={(event)=> sumarPedido(event, id)}
          >+</p>
        </div>



        <div
        onClick={()=> eliminar(id)}
        className='flex w-8 h-8 items-center justify-center absolute right-0 bg-indigo-200 rounded-full cursor-pointer '
        >
          <h1>X</h1>
        </div>

    </div>
  )
}

export default Comandas