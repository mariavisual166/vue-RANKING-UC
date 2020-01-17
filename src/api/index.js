//api/index.js
import axios from 'axios'
import { URL_USER } from "@/common/constants";

export function fetchUsers() {
    return axios.get(`${URL_USER}/user`)
}

export function fetchUser(userId) {
    return axios.get(`${URL_USER}/user/${userId}`)
}

export function updateUser (userResponse) {
    return axios.put(`${URL_USER}/user/${userResponse.id}/`, userResponse)
}
  
export function saveUser (user, jwt) {
    return axios.post(`${URL_USER}/user`, user, { headers: { Authorization: `Bearer: ${jwt}` } })
}

export function deleteUser (userId) {
    return axios.delete(`${URL_USER}/user/${userId}`)
}

export function authenticate (userData) {
    return axios.post(`${URL_USER}/login`, userData)
}