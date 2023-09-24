import React from 'react'

const Comanda = (props) => {
  return (
    <div className='border-bottom flex justify-between mb-4 w-full'>
        <p className='font-bold mr-4'>{props.producto}: </p>
        <div className='flex'>
            <p className='mr-1 text-red-500'>{props.cantidad}</p>
            <p>Unidades</p>
        </div>
    </div>  
  )
}

export default Comanda