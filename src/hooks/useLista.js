import { useEffect, useReducer } from "react"
import { listareducer } from "../listareducer"

export const useLista = () => {
    const initialState = []

    const init =()=>{
        return JSON.parse(localStorage.getItem('listas')) || []
    }

    const [listas, dispatch] = useReducer(listareducer, initialState, init)

    const listasContador = listas.length
    const pendientesContador = listas.filter(lista => !lista.done).length

    useEffect(() => {
      localStorage.setItem('listas', JSON.stringify(listas))
    }, [listas])
    

    const handleNuevaLista = lista => {
        const action = {
            type: "Agregar Lista",
            payload: lista,
        }
        dispatch(action)
    }

    const handleBorrarLista = id =>{
        const action = {
            type: "Borrar Lista",
            payload: id,
        }
        dispatch(action);
    }

    const handleCompleteLista = id =>{
        const action = {
            type: "Completa Lista",
            payload: id
        }
        dispatch(action)
    }

    const handleEditarLista =(id, description) => {
        const action = {
            type: "Editar Lista",
            payload: {id,description}
        }
    
    dispatch(action)
}
    return {
        listas,
        listasContador,
        pendientesContador,
        handleNuevaLista,
        handleBorrarLista,
        handleCompleteLista,
        handleEditarLista
    }
}