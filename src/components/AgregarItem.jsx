import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import { EditarLista } from './EditarLista'


export const AgregarItem = ({lista,handleBorrarLista,handleCompleteLista,handleEditarLista}) => {
  return (
    <li>
        <span onClick={()=>handleCompleteLista(lista.id)}>
            <label htmlFor="" className={`hecho ${lista.done ? 'active' : ''}`}></label>
        </span>
        <EditarLista lista={lista} handleEditarLista={handleEditarLista}/>
        <button className='btn-delete' onClick={()=>handleBorrarLista(lista.id)}><FaTrashAlt/></button>
    </li>
  )
}
