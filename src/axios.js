import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-fa79a.cloudfunctions.net/api' 
})

export default instance; 