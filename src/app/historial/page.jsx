'use client'
import { usePedidos } from '@/context/ComidaContext'
import React from 'react'
import Datos from '../../../components/Datos'
import Link from 'next/link'

const Historial = () => {
    const {historia} = usePedidos()
    console.log('historial',historia);
  return (
    <div className='m-4'>
      {historia.map((producto, index) => (
        <Link key={index} href={`/datos/${index}`}>
          <Datos
          key={index}
          ano={producto.ano}
          dia={producto.dia}
          mes={producto.mes}
          ventas={producto.ventasDiarias}
          productos={producto.todo}
          />        
        </Link>
      ))}
    </div>
  )
}

export default Historial