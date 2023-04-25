import React from 'react'
import { useForm } from '../hooks/useForm'
import { Button } from 'react-bootstrap'

export const AgregarTarea = ({handleNuevaLista}) => {
  const {description,inputChange, resetForm} = useForm({
    description: '',
  })
  
  const formSubmit = e =>{
    e.preventDefault()

    if(description.length <=1) return

    let newLista ={
      id: new Date().getTime(),
      description: description,
      done: false
    }
    handleNuevaLista(newLista)
    resetForm()
  }
  
  return (
    <form onSubmit={formSubmit}>
        <input type="text" className='agregar-input' name='description' value={description} onChange={inputChange} placeholder='Tarea a Realizar'/>
        <Button variant="outline-info" className='agregar-boton' type='submit'>Agregar </Button>
    </form>
  )
}
