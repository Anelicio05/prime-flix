import axios from "axios";
// base url https://api.themoviedb.org/3/

//chave key e05b949b2a9b2520e50b9182523068b2

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api