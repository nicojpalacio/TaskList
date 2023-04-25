import React from 'react'
import { AgregarItem } from './AgregarItem'

export const ListaTarea = ({listas,handleBorrarLista,handleCompleteLista,handleEditarLista}) => {
  return (
    <ul>
      {listas.map(lista=><AgregarItem key={lista.id}
        lista={lista}
          handleBorrarLista ={handleBorrarLista}
          handleCompleteLista = {handleCompleteLista}
          handleEditarLista = {handleEditarLista} />)}
       
    </ul>
  )
}
