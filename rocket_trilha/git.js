const express = require('express') //express não manipula API
const axios = require('axios')

const app = express()

app.listen('3000')

app.route('/').get( (req,res) => {

    axios.get('https://api.github.com/users/Esmaily87')
    //.then( result => res.send(result.data.name) )
    .then( result => res.send(`<img src="${result.data.avatar_url}">`) )
    .catch(error => console.error(error))

})