'use client'
import { usePedidos } from '@/context/ComidaContext'
import React from 'react'
import Facturas from '../../../components/Facturas'
import { precioTotal } from '@/utils'
import '../globals.css'
import Comanda from '../../../components/Comanda'


const Ventas = () => {
    const {comandas, historia, setHistoria, setComandas } = usePedidos();
    let fecha = new Date();
    let pi = fecha.getDate();
    let pe = fecha.getMonth() +1;
    let po = fecha.getFullYear();
    let segundo = fecha.getSeconds();

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

    const cerrar = () => {
        const caja = {
            dia: pi,
            mes: pe,
            ano: po,
            sec: segundo,
            todo: final,
            ventasDiarias: resultado,
        }
        setHistoria([...historia, caja])
        setComandas([])
    }
  return (
    <>
    <div className='flex justify-between items-center mx-4 h-12'>
        <h1 className='mx-4'>Comandas</h1>
        <p className='text-slate-400'>{pi}/{pe}/{po}</p>
        <button 
        className='mx-8 bg-red-600 text-white rounded-lg w-32 h-8'
        onClick={()=> cerrar()}>Cerrar Caja</button>
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
                ref.Ventas Efectivo: {resultado}$
            </h1>
            <h1 className='text-sky-500'>
                ref.Ventas Punto de Ventas: {resultado}$
            </h1>
        </section>
    </div>    
    </>

  )
}

export default Ventas