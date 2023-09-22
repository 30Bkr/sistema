import { usePedidos } from '@/context/ComidaContext'
import Image from 'next/image'
import React, { useState } from 'react'

const Comandas = props => {
  const { id, img, price, eliminar, nombre} = props
  const [unidad, setUnidad] = useState(1)
  const [preComanda, setPreComanda] = useState([])
  const {orden, setOrden, comanda, setComanda} = usePedidos()
  console.log('segundo:', comanda);
  


  const sumarPedido = (peso) => {
    const identificar = comanda.find((product) => product.id === peso)
    setPreComanda(identificar)
    const sumar = preComanda
    console.log(sumar);
    setComanda([...comanda, sumar].flat())
    // console.log('orden:', identificar);
    console.log('comanda:', comanda);
    setUnidad(unidad + 1)

  }
  const restarPedido = (id) => {

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
          onClick={()=> restarPedido()}
          >-</p>
          <h1 className='flex mx-1 w-4 h-4 items-center justify-center'>{unidad}</h1>
          <p 
          className='flex ml-1 w-4 h-4 items-center justify-center bg-red-200 rounded-full cursor-pointer'
          onClick={()=> sumarPedido(id)}
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