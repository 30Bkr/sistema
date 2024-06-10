import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between m-4'>
      <div className='flex'>
        <h1>Mordisco y Sabor</h1>
        <ul className='flex mx-4'>
          <li className='mx-4 transition-colors ease-in-out hover:text-red-400 duration-300'>
          <Link href='/'>Inicio</Link>
            
          </li>
          <li className='mx-4transition-colors ease-in-out hover:text-red-400 duration-300'>
            <Link href='/platos'>Platos</Link>
          </li>
          <li className='mx-4 transition-colors ease-in-out hover:text-red-400 duration-300'>
            <Link href='/bebidas'>Bebidas</Link>
          </li>
          <li className='transition-colors ease-in-out hover:text-red-400 duration-300'>
            <Link href='/chucherias'>Chucherias</Link>
          </li>
        </ul>
      </div>
      <div className=''>
        <ul className='flex'>
          <li className='mr-4 transition-colors ease-in-out hover:text-red-700 duration-300'>
            <Link href='/comandas'>Comandas</Link>
          </li>
          <li className='transition-colors ease-in-out hover:text-red-700 duration-300'>
            <Link href='/historial'>Historial</Link>
          </li>
        </ul>
      </div>

  </nav>
  )
}

export default Navbar