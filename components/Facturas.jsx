import React from 'react'

const Facturas = props => {
    const { cantidad, precio, id, articulos} = props
  return (
    <div className='m-4 border-solid border-2 w-40 rounded-lg'>
        <p className='mx-4 my-1'>Pedido: Nº{id + 1}</p>
        <p className='font-light mx-4 my-1'>Articulos: {cantidad}</p>
        <p className='font-bold mx-4 my-1'>Monto: {precio}$</p>
    </div>
  )
}

export default Facturas