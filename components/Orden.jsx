'use client'
import { usePedidos } from '@/context/ComidaContext'
import { precioTotal } from '@/utils'
import React, { useState } from 'react'
import Comandas from './Comandas'
import '../src/app/globals.css'
import Link from 'next/link'

const Orden= () => {
  const {abierto, abiertoPrew, abrirPrew, orden, cerrar, abrir, setOrden, comanda, setComanda,  preview, setPreview, cerrarPrew} = usePedidos()
  const [bolivares, setBolivares] = useState('')
  const [punto, setPunto] = useState('')
  const [pagoMovil, setPagoMovil] = useState('')
  const [divisas, setDivisas] = useState(0)
  const [dolar, setDolar] = useState('')
  const [referencia, setReferencia] = useState('')

  const eliminarPedido = (id) => {
    const filteredProducts = orden.filter(product => product.id != id)
    setOrden(filteredProducts)
    const filteredProducts2 = comanda.filter(product => product.id != id)
    setComanda(filteredProducts2)
  }
  const acumulado = (dinero) => {
    let sum = 0;
    sum += bolivares / dinero
    sum += punto / dinero
    sum += pagoMovil / dinero
    sum += divisas

    return sum
  }
  // let aparece = true;
  let aparece =  acumulado(dolar) === precioTotal(comanda);

  const bf = () => {
    let sum = referencia * dolar
    return sum 
  }

  const facturar = () => {
    const mira = {
      productos: comanda,
      productosTotales: comanda.length,
      precio: precioTotal(comanda),
    }
    setPreview([...preview, mira])
    setComanda([])
    setOrden([])
    cerrar();
    cerrarPrew();
  }
  return (
    // flex ckeckout-side-menu flex-col fixed right-4 top-0  border border-black rounded-lg  bg-white' 
    <aside className={`${abiertoPrew? 'checkout-side-menu-preview  flex-col fixed right-4 top-0  border border-black rounded-lg  bg-yellow-500'
      : abierto? 'flex ckeckout-side-menu flex-col fixed right-4 top-0  border border-black rounded-lg  bg-white' 
      :'hidden'}`}
    >
      <div  className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>
          Orden 
        </h2>
        <div 
        className={`${abiertoPrew? 'flex bg-yellow-200 ': ' flex rotate-180 bg-indigo-200'} items-center justify-center rounded-full w-8  h-8 cursor-pointer  `}
        onClick= {()=> {
          if(abiertoPrew){
            cerrarPrew()
            abrir()
          }else {
            abrirPrew()
          }}}
        >
          ^
        </div>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
        {
            orden.map((product, index) => (
                <Comandas 
                    key={`${product.id}${index}`}
                    id={product.id}
                    img={product.img}
                    price={product.precio}
                    eliminar={eliminarPedido}
                />
            ))
        }        
      </div>
      <div>
        <form 
        onSubmit={
          ev=>{

          }
        }
        >
          <div className=' flex items-center right-4'>
            <p className='mr-4'>Precio del dolar: </p>
            <input value={dolar} placeholder='Ref.Divisas' type='number' name='dolar'
            className='border-solid border-2 rounded-lg p-1 w-40 ' 
            onChange={ev => setDolar(Number(ev.target.value))}        
            />          
          </div>
          <div className=' flex items-center right-4'>
            <p className='mr-4'>Calculadora de $ a Bf: </p>
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
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>
            Total:
          </span>
          <span className='font-medium text-2xl text-green-600'>
            ${precioTotal(comanda)}
          </span>
        </p>
        <Link href='/pago' >
          <button 
            className='w-full h-12 bg-black rounded-lg'
            onClick={()=> facturar()}
          >
            <p className='text-white'>Facturar</p>
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default Orden