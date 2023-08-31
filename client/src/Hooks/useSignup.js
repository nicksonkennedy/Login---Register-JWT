import { useState } from "react";
import {useAuthContext} from './useAuthContext'

export const  useSignup = () =>{
const [error, setError] = useState(null)
const [isLoading, setIsLoading] = useState(null)
const {dispatch} = useAuthContext()

const signup = async (email, password) =>{
    setIsLoading(true)
    setError(null)

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const json = await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(json)
        }
        if(response.ok){
            //saving to localstorage
            localStorage.setItem('user', JSON.stringify(json))
    
            dispatch({type: 'LOGIN', payload:json})
            setIsLoading(false)
        }
    } catch (error) {
        setIsLoading(false)
        setError('An Error Occurred, Try Again....')
    }
}
return {signup, isLoading, error}
}