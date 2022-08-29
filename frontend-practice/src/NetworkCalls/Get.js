import axios from 'axios'

const baseurl = `http://localhost:3002/`

export const GetProducts = ()  =>{
    return new Promise((resolve,reject)=>{
        axios.get(`${baseurl}product/getProducts`)
        .then((res)=>resolve(res))
        .catch((e)=>reject(e))
    })
} 