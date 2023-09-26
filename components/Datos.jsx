import React from 'react'

const Datos = props => {
    const {ano, dia, mes, productos, ventas} = props
    const aca = productos.map(productos => productos[1])
    const recude = aca.reduce((suma,element1) => suma + element1, 0)
  return (
    <div className=' flex flex-col items-center justify-center h-24 w-40 border-2 border-solid border-red-400 m-4 rounded-lg'>
        <h1 className='text-stone-500 font-bold'>{dia}/{mes}/{ano}</h1>
        <div className='flex'>
          <p className='font-semibold mr-1'>Ventas:</p>
          <p className='text-green-600'>{ventas}$</p>
        </div>
        <p>Productos: {recude}</p>
    </div>
  )
}

export default Datos