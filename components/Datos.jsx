import React from 'react'

const Datos = props => {
    const {ano, dia, mes, productos, ventas} = props
  return (
    <div className='h-40 w-40 border border-solid'>
        <h1>{dia}/{mes}/{ano}</h1>
        <p>{ventas}</p>
    </div>
  )
}

export default Datos