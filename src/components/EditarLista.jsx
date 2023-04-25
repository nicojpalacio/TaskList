import React, { useRef, useState } from 'react'
import {AiFillEdit} from 'react-icons/ai'
import { useForm } from '../hooks/useForm'

export const EditarLista = ({lista,handleEditarLista}) => {

  const {updateDescription, inputChange} = useForm({
    updateDescription : lista.description
  })

  const [disable, setDisable] = useState(true)
  const focusInputRef = useRef()

  const onSubmitUpdate = e =>{
    e.preventDefault()

    const id = lista.id
    const description = updateDescription

    handleEditarLista(id, description)
    setDisable(!disable)

    focusInputRef.current.focus()
  }
  return (
    <form onSubmit={onSubmitUpdate}>
        <input type="text" className={`editar-input ${lista.done ? 'text-decoration-dashed' : '' }`} name='updateDescription' value={updateDescription} onChange={inputChange} placeholder='Tarea a Realizar' readOnly={disable} ref={focusInputRef}/>
        <button className='editar-boton' type='submit'><AiFillEdit/> </button>
    </form>
  )
}
