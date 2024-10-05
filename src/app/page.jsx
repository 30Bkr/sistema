// "use client"
import  Comprador  from '../../components/Comprador'
import  Cliente  from '../../components/Cliente'
import { usePedidos } from '@/context/ComidaContext'
import Fichas from '../../components/Fichas'
import { createClient } from '@supabase/supabase-js'

export default async function Home() {
  const supabaseUrl ="https://nqwnsmggtwyybivhiicr.supabase.co";
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  const supabase =  createClient(supabaseUrl,supabaseKey)
  let {data: productos} = await supabase.from('productos').select('*')
  // console.log(productos);
  let comida = productos.filter( (producto) => {
    if(producto.que==='comida'){
      return producto
    } 
  });
  let bebida = productos.filter( (producto) => {
    if(producto.que==='bebida') return producto
  });
  let chucheria = productos.filter( (producto) => {
    if(producto.que==='chucheria') return producto
  });
  console.log(bebida);
  
  
  return (
    <div className='mx-4 mt-4'>
      <h1 className='flex w-full-screen justify-center mb-4'>Mordisco y Sabor.</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center'>
        {comida.map( producto => (
          <Fichas 
          key={producto.id}
          id={producto.nombre}
          precio={producto.precio}
          img={`/${producto.nombre}.jpeg`}
          />
        ))}
        {chucheria.map( producto => (
          <Fichas 
          key={producto.id}
          id={producto.nombre}
          precio={producto.precio}
          img={`/${producto.nombre}.jpeg`}
          />
        ))}
        {bebida.map( producto => (
          <Fichas 
          key={producto.id}
          id={producto.nombre}
          precio={producto.precio}
          img={`/${producto.nombre}.jpeg` }
          />
        ))}
      </div>
    </div>
  )
}
export async function get() {
  

  return productos;
  
}