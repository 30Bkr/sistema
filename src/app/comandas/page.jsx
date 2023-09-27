'use client'
import { usePedidos } from '@/context/ComidaContext'
import React, { useState } from 'react'
import Facturas from '../../../components/Facturas'
import { precioTotal } from '@/utils'
import '../globals.css'
import Comanda from '../../../components/Comanda'

const codigo = 'laspaolas'


const Ventas = () => {
    const {comandas, historia, setHistoria, setComandas } = usePedidos();
    const [verificar, setVerificar] = useState({
        confirmar: false,
        value: '',
    })
    console.log('esto:',comandas);
    let fecha = new Date();
    let pi = fecha.getDate();
    let pe = fecha.getMonth() +1;
    let po = fecha.getFullYear();

    const observar = comandas.map(product => product.productos);
    const contar = observar.flat();
    const contador = contar
    .map(item => item.id)
    .reduce((obj,item)=>{
        if(!obj[item]){
            obj[item] =1;
        }else {
            obj[item] = obj[item] + 1;
        }
        return obj;
    }, {});
    const final = Object.entries(contador)
    const resultado = precioTotal(comandas);
    const bolivares = (products) => {
        let sum = 0
        products.forEach(product => sum += product.bolivares)
        return sum
    }    
    const puntoV = (products) => {
        let sum = 0
        products.forEach(product => sum += product.puntoV)
        return sum
    }
    const pagoM = (products) => {
        let sum = 0
        products.forEach(product => sum += product.pagoMovil)
        return sum
    }
    const divisas = (products) => {
        let sum = 0
        products.forEach(product => sum += product.divisas)
        return sum
    }

    const confirmado = () => {
        const caja = {
            dia: pi,
            mes: pe,
            ano: po,
            todo: final,
            ventasDiarias: resultado,
            bolivares: bolivares(comandas),
            puntoV: puntoV(comandas),
            pagoM: pagoM(comandas),
            divisas: divisas(comandas)
        }
        setHistoria([...historia, caja])
        setComandas([])
        setVerificar({
            confirmar: false,
            value: '',
        })
    }
    const cerrar = () => {
        setVerificar({
            ...verificar,
            confirmar:true,
        })
    }
    const onWrite = (event) => {
        setVerificar({
            ...verificar,
            value: event
        })
    }
    const llave = () => {
        if(verificar.value === codigo){
            confirmado()
        } else {
            alert('Codigo invalido')
        }
    }
  return (
    <>
    <div className='flex justify-between items-center mx-4 h-12'>
        <h1 className='mx-4'>Comandas</h1>
        <p className='text-slate-400'>{pi}/{pe}/{po}</p>
        <div className='flex relative'>
            {verificar.confirmar && 
            <div className='flex absolute right-44 '>
                <input className='border border-red-600 mr-1  box-border px-2 w-48 rounded-lg'
                value={verificar.value} placeholder='Codigo de Seguridad' type='password'
                onChange={(event)=>{
                    onWrite(event.target.value);
                }}
                ></input>
                <button 
                className= 'border border-solid border-red-600 h-8 w-24 rounded-lg'
                onClick={()=>(
                    llave()
                )}
                >Cerrar</button>
            </div>
            }
            <button 
            className='mx-8 bg-red-600 text-white rounded-lg w-32 h-8'
            onClick={()=> cerrar()}>
                Cerrar Caja
            </button>
        </div>

    </div>
    <div className='flex  relative'>
        <div className='grid grid-cols-3 w-full'>
            <section 
            className=' comandas col-span-2 overflow-y-scroll grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-3 mb-14 border-solid border-2 mx-4'
            >
                {comandas.map((producto, index) => (
                    <Facturas 
                    key={`${index} + esto`}
                    id={index}
                    cantidad ={producto.productosTotales}
                    precio={producto.precio}
                    articulos= {producto.productos}
                    dia={producto.dia}
                    mes={producto.mes}
                    ano={producto.ano}
                    />
                ))}          
            </section>
            <section className=' lista overflow-y-scroll border-solid border-2'>
                <h1 className='m-4'>
                    {final.map(([key,value]) => (
                        <Comanda 
                        key= {key}
                        producto = {key}
                        cantidad ={value}
                        />
                    ))}
                </h1>
            </section>            
        </div>


        <section className='flex justify-around fixed my-4 bottom-0 bg-white w-full'>
            <h1 className=' mr-4 text-gray-500'>
                ref.Ventas Totales: {resultado}$
            </h1>
            <h1 className='mr-4 text-green-500'>
                ref.Ventas Efectivo: {bolivares(comandas)}VEF
            </h1>
            <h1 className='text-sky-500'>
                Punto de Ventas: {puntoV(comandas)}VEF
            </h1>
            <h1 className='text-sky-500'>
                Pago Movil: {pagoM(comandas)}VEF
            </h1>
        </section>
    </div>    
    </>

  )
}

export default Ventas