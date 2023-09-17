import Image from 'next/image'
import React from 'react'

const Comandas = (props) => {
  return (
    <div>
        <h1>{props.id}$</h1>
        <h2>{props.price}</h2>
        <Image 
        src={(props.img == ''? `/pabellon.jpeg`: props.img)}
        width={120}
        height={120}
        />
    </div>
  )
}

export default Comandas