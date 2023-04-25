import { useState } from "react"


export const useForm = (initialForm = {})=>{
    const [formState, setformState] = useState(initialForm)

    const inputChange = (e) =>{
        const name = e.target.name
        const value = e.target.value

        setformState({
            ...formState,
            [name]: value
        })
        
    }

    const resetForm = ()=>{
        setformState(initialForm)
    }
    return{
        ...formState,
        formState,
        inputChange,
        resetForm,
    }
}