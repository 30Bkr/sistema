'use client'
import { usePedidos } from '@/context/ComidaContext'
import Link from 'next/link'
import React, { useState } from 'react'
import { precioTotal } from '@/utils'


const Pago = () => {
  const { setOrden, comanda, comandas, setComanda, setComandas} = usePedidos()
  const [bolivares, setBolivares] = useState('')
  const [punto, setPunto] = useState('')
  const [pagoMovil, setPagoMovil] = useState('')
   
  const pagado = () => {
    const vendido = {
      productos: comanda,
      productosTotales: comanda.length,
      precio: precioTotal(comanda),
      bolivares: bolivares,
      puntoV: punto,
      pagoMovil: pagoMovil
    }
    setComandas([...comandas, vendido])
    setComanda([])
    setOrden([])
  }
  console.log('comanda:',comanda);
  console.log('comandas:',comandas);
  console.log(bolivares);

  return (
    <div>
      <h1>Pagadosa</h1>
      <form
        onSubmit={ev=> {
          ev.preventDefault()
          const mira = Number(ev.target.bolivares.value)
          const esto = Number(ev.target.movil.value)
          const aqui = Number(ev.target.puntoV.value)
          console.log('importa:', mira);
          setBolivares(mira)
          setPagoMovil(esto)
          setPunto(aqui)
          pagado()
          
        }}  
      >
        <input value={bolivares} placeholder='Bolivares' type='number' name='bolivares' onChange={ev=> setBolivares(Number(ev.target.value))}/>
        <input value={pagoMovil} type='number' placeholder='Pago Movil' name='movil' onChange={ev=> setPagoMovil(Number(ev.target.value))}/>
        <input value={punto} type='number' placeholder='Punto de Venta' name='puntoV' onChange={ev=> setPunto(Number(ev.target.value))}/>
          <button type='submit' className='w-40 h-16 bg-red-500'
          >
            listo
          </button>
      </form>
     
    </div>

  )
}

export default Pago