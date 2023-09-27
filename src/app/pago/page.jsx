'use client'
import { usePedidos } from '@/context/ComidaContext'
import Link from 'next/link'
import React, { useState } from 'react'
import { precioTotal, lista } from '@/utils'
import Comanda from '../../../components/Comanda'


const Pago = () => {
  const { setOrden, comanda, comandas, setComanda, setComandas, preview, setPreview} = usePedidos()
  const [bolivares, setBolivares] = useState('')
  const [punto, setPunto] = useState('')
  const [pagoMovil, setPagoMovil] = useState('')
  const [divisas, setDivisas] = useState('')
  const [dolar, setDolar] = useState('')
  const [referencia, setReferencia] = useState('')




  const aca = lista(preview)
  console.log('preview:', preview);
  // console.log(precioTotal(preview));

   
  const pagado = () => {
    const vendido = {
      productos: epa,
      productosTotales: epa.length,
      precio: precioTotal(preview),
      bolivares: Number(bolivares),
      puntoV: Number(punto),
      pagoMovil: Number(pagoMovil),
      divisas: Number(divisas),
    }
    setComandas([...comandas, vendido])
    setComanda([])
    setOrden([])
  }
  // console.log('comanda:',comanda);
  // console.log('comandas:',comandas);
  // console.log(bolivares);
  const acumulado = (dinero) => {
    let sum = 0;
    sum += bolivares / dinero
    sum += punto / dinero
    sum += pagoMovil / dinero
    sum += divisas
    return sum
  }
  const bf = () => {
    let sum = referencia * dolar
    return sum 
  }
  let aparece =  acumulado(dolar) === precioTotal(preview);
  const aqui = preview.map(item => item.productos)
  const epa = aqui.flat()
  return (
    <div className='grid grid-cols-2 m-4 '>
      <form
        className='flex flex-col lista border-solid border-2 p-4 relative'
        onSubmit={ev=> {
          ev.preventDefault()
          pagado()
          setBolivares('')
          setPagoMovil('')
          setPunto('')
          setDivisas('')
          setDolar('')
          setReferencia('')
          setPreview([])
        }}  
      > 
        <div className=' flex items-center right-4'>
          <p className='mr-4'>Divisas: </p>
          <input value={dolar} placeholder='Ref.Divisas' type='number' name='dolar'
          className='border-solid border-2 rounded-lg p-1 w-40 ' 
          onChange={ev => setDolar(Number(ev.target.value))}        
          />          
        </div>
        <div className=' flex items-center right-4'>
          <p className='mr-4'>Referencia: </p>
          <input value={referencia} placeholder='Ref.Divisas' type='number' name='referencia'
          className='border-solid border-2 rounded-lg p-1 w-20 ' 
          onChange={ev => setReferencia(Number(ev.target.value))}        
          />         
          <p className='ml-4'>{bf()}VEF</p> 
        </div>


        <p className='mt-4'>Bolivares:</p>
        <input value={bolivares} placeholder='Bolivares' type='number' name='bolivares' 
        className='border-solid border-2 rounded-lg p-1 mb-4 w-40' 
        onChange={ev=> setBolivares(Number(ev.target.value))}
        />

        <p className='mt-4'>Pago Movil:</p>
        <input value={pagoMovil} type='number' placeholder='Pago Movil' name='movil' 
        className='border-solid border-2 rounded-lg p-1 mb-4 w-40' 
        onChange={ev=> setPagoMovil(Number(ev.target.value))}
        />

        <p className='mt-4'>Punto de Venta:</p>
        <input value={punto} type='number' placeholder='Punto de Venta' name='puntoV'
        className='border-solid border-2 rounded-lg p-1 mb-4 w-40'  
        onChange={ev=> setPunto(Number(ev.target.value))}
        />

        <p className='mt-4'>Divisas:</p>
        <input value={divisas} type='number' placeholder='Divisas' name='puntoV'
        className='border-solid border-2 rounded-lg p-1 mb-4 w-40' 
        onChange={ev=> setDivisas(Number(ev.target.value))}
        />

        <p className='font-bold'>Pagado: {acumulado(dolar)} </p>
        <button type='submit' className={`${aparece? 'flex' :'hidden'} w-40 h-16 bg-red-500 rounded-lg`}
          >
            listo
        </button>
        
      </form>
      <section className='flex flex-col  justify-between lista overflow-y-scroll border-solid border-2'>
        <h1 className='m-4'>
          {aca.map(([key,value]) => (
            <Comanda
            key= {key}
            producto = {key}
            cantidad ={value}
            />
           ))}
        </h1>
        <div className='flex m-4'>
          <p className='font-bold mr-4'>ref.Precio total a pagar:</p>
          <p className='font-bold text-green-600'>{precioTotal(preview)}$</p>
        </div>
      </section>
     
    </div>

  )
}

export default Pago