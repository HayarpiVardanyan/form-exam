import {$authHost, $host} from "./index";
import { jwtDecode as jwt_decode, } from 'jwt-decode';


export const registration = async (name,email, password) => {
    const {data} = await $host.post('api/user/registration', {name,email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    if (window.location.hostname === 'localhost' && window.location.port === '3000') {
        console.log('Running on localhost:3000. API request not sent.');
        return null; 
    }
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

