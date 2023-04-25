export const listareducer = (initialState , action)  => {

    switch (action.type) {
        case 'Agregar Lista':
            return [...initialState, action.payload]
            
        case 'Borrar Lista':
            return initialState.filter(lista => lista.id !== action.payload)
        
        case 'Completa Lista':
            return initialState.map(lista =>{
                if (lista.id === action.payload){
                    return {
                        ...lista,
                        done: !lista.done,
                    }
                }
                return lista;
            })
            
        case 'Editar Lista':
            return initialState.map(lista =>{
                if (lista.id === action.payload.id){
                    return {
                        ...lista,
                        description: action.payload.description,
                    }
                }
                return lista;
            })
        
    
        default:
            return initialState
    }

}