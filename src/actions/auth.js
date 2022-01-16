
import { fetchConToken, fetchSinToken } from "../helpers/fetch"

import { types } from "../types/types"

import { snackbar } from "../helpers/snackbar"





export const startLogin = ({emailUsername, password}) =>{
    
    
   
    
    return async  ( dispatch ) =>{
        const resp = await fetchSinToken('auth/login','',{ emailUsername, password }, 'POST');
        const data = await resp.json()
        
        if(!data.ok){

            snackbar.error(data.msg)
            return 
        }
        

      

        localStorage.setItem('token', data.token)
        localStorage.setItem('token-init-date', new Date().getTime());

        dispatch(login(data.user))

        snackbar.success('Login exitoso');
        
    }
}


export const startCheking = () =>{
    return async ( dispatch ) =>{

        const resp = await fetchConToken('auth/renew');

        const body = await resp.json();

        if(!resp){

            snackbar.error('Error en backend');

            return
        }

        if(!body.ok){
            dispatch(checkingFinish())
        }

        
        localStorage.setItem('token', body.token)
        localStorage.setItem('token-init-date', new Date().getTime());

        dispatch(login(body.user))


    }
}



const login = (user) =>({
    type: types.authLogin,
    payload: user
})

const checkingFinish = () =>({
    type: types.authCheckingFinish
})