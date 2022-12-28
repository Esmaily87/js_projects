/*Aula 1*/
/*const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'
https.get(API,res =>{
    console.log(res.statusCode)
})
console.log('conectando API')*/
/*Aula -2*/
/*let aceitar = false
console.log ('Pedir UBER')
const promessa = new Promise((resolve, reject) => {
    
    if(aceitar){
        return resolve('pedido aceito!')
    }
    return reject('pedido negado')
})
console.log('aguardando')

promessa
.then(result => console.log(result))
.catch(erro => console.log(erro))
.finally(() => console.log('Finalizado'))*/



fetch('https://api.github.com/users/esmaily87')
    .then(response => response.json()) 
    .then(data => fetch(data.repos_url)) 
    .then(res => res.json())
    .then( d => console.log(d))
        .catch(err => console.log(err))