"use client"
import { createContext, useContext, useState, useEffect } from "react"

export const PedidosContext = createContext();

export const usePedidos = () => {
    const context = useContext(PedidosContext);
    if(!context)throw new Error("usePedidos must used within a provider")
    return context;
}

export const PedidosProvider = ({children}) => {
    const [comida, setComida] = useState([
        {
            id: 'Pasticho',
            price: 7,
            img:'/pasticho.jpeg'
        },
        {
            id: 'Pabellon',
            price: 7,
            img:'/pabellon.jpeg'
        },
        {
            id: 'Cachapa',
            price: 6,
            img:'/cachapa.jpeg'
        },
        {
            id: 'Menu',
            price: 6,
            img:''
        },
        {
            id: 'Empandas',
            price: 1.5,
            img:''
        },

    ]);
    const [bebidas, setBebidas] = useState([
        {
            id:'Gatorade',
            price: 2.5,
            img:'/gatorade.jpeg',
            
        },
        {
            id:'Malta',
            price: 1.5,
            img:'',
            
        },
        {
            id:'Agua 500ml',
            price: 1.5,
            img:'/agua.jpeg',
            
        },
        {
            id:'Refresco',
            price: 1.5,
            img:'/refrescoP.jpeg',
            
        },
        {
            id:'Refresco 1L',
            price: 3,
            img:'/refrescoL.jpeg',
            
        },
        {
            id:'Speed',
            price: 1.5,
            img:'/speed.jpeg',
            
        },
        {
            id:'Yukery',
            price: 1.5,
            img:'',
            
        },
        {
            id:'Cafe',
            price:1.5,
            img: ''
        }
    ]);

    const [chucherias, setChucherias] = useState([
        {
            id:'Pringles',
            price: 2,
            img:'/pringlesP.jpeg'
        },
        {
            id:'Pringles XL',
            price: 3.5,
            img:'/pringlesG.jpeg'
        }
    ]);

    const [orden, setOrden] = useState([]);

    const [abierto, setAbierto ] = useState(false)
    return(
        <PedidosContext.Provider
        value={{
            comida,
            bebidas,
            orden,
            chucherias,
            abierto,
            setComida,
            setChucherias,
            setBebidas,
            setOrden,
            setAbierto,
        }}
        >
            {children}
        </PedidosContext.Provider>
    )
}