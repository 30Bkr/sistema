import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex m-4'>
    <h1>Mordisco y Sabor</h1>
    <ul className='flex mx-4'>
      <li className='mx-4'>
      <Link href='/'>Inicio</Link>
        
      </li>
      <li className='mx-4'>
        <Link href='/platos'>Platos</Link>
      </li>
      <li className='mx-4'>
        <Link href='/bebidas'>Bebidas</Link>
      </li>
      <li className='mx-4'>
        <Link href='/chucherias'>Chucherias</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar