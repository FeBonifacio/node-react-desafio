import axios from 'axios';

axios.get('http://localhost:3000/')
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log('Erro ao conectar', error);
    })