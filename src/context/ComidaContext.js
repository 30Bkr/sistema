"use client"
import { createContext, useContext, useState, useEffect } from "react"

export const PedidosContext = createContext();

export const usePedidos = () => {
    const context = useContext(PedidosContext);
    if(!context)throw new Error("usePedidos must used within a provider")
    return context;
}

export const PedidosProvider = ({children}) => {
 
    const [orden, setOrden] = useState([]);
    const cerrar = () => setAbierto(false);
    const abrir = () => setAbierto(true);
    const cerrarPrew = () => setAbiertoPrew(false);
    const abrirPrew = () => setAbiertoPrew(true);

    const [comanda, setComanda] = useState([]);
    const [comandas, setComandas] = useState([]);
    const [historia, setHistoria] = useState([]);
    const [preview, setPreview] = useState([]) 

    
    const [abierto, setAbierto ] = useState(false)
    const [abiertoPrew, setAbiertoPrew ] = useState(false)
    return(
        <PedidosContext.Provider
        value={{
            orden,
            abierto,
            comanda,
            comandas,
            historia,
            preview,
            cerrar,
            abrir,
            abrirPrew,
            cerrarPrew,
            abiertoPrew,
            setAbierto,
            setOrden,
            setComanda,
            setComandas,
            setHistoria,
            setPreview,
        }}
        >
            {children}
        </PedidosContext.Provider>
    )
}