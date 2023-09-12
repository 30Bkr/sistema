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
            img:''
        },
        {
            id: 'Pabellon',
            price: 7,
            img:''
        },
        {
            id: 'Cachapa',
            price: 7,
            img:''
        },
        {
            id: 'Menu',
            price: 7,
            img:''
        },
        {
            id: 'Empandas',
            price: 7,
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
            price: 2.5,
            img:'',
            
        },
        {
            id:'Agua 500ml',
            price: 2.5,
            img:'/agua.jpeg',
            
        },
        {
            id:'Refresco Pequeño',
            price: 2.5,
            img:'/refrescoP.jpeg',
            
        },
        {
            id:'Refresco Grande',
            price: 2.5,
            img:'/refrescoL.jpeg',
            
        },
        {
            id:'Speed',
            price: 2.5,
            img:'/speed.jpeg',
            
        },
        {
            id:'Yukery',
            price: 2.5,
            img:'',
            
        },
    ]);

    const [chucherias, setChucherias] = useState([
        {
            id:'Pringles',
            price: 2.5,
            img:''
        }
    ]);
    return(
        <PedidosContext.Provider
        value={{
            comida,
            bebidas,
            chucherias,
            setComida,
            setChucherias,
            setBebidas,
        }}
        >
            {children}
        </PedidosContext.Provider>
    )
}