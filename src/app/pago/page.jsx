'use client'
import { usePedidos } from '@/context/ComidaContext'
import React from 'react'

const Pago = () => {
  const {orden, comanda, comandas, setcomanda, setcomandas} = usePedidos()
  
  return (
    <div>Pagados</div>
  )
}

export default Pago