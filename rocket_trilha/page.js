const express = require('express')
const app = express()

app.listen('3000')

//middleware

app.use(express.json())

app.route('/').get( (req,res) => res.send(req.query) )
app.route('/about/user').get( (req,res) => res.send(req.query) )
//pp.route('/about/user').get( (req,res) => res.send(req.query.sexo) )//
app.route('/').put((req,res)  => res.send(req.body.author))

//Body Params - o método post não é enviado pelo header da requisição, mas pelo body (escondido)
app.route('/').post((req,res)  => {
    const {author, cidade, livros_favoritos} = req.body
    res.send(`O nome do autor é ${author} e mora em ${cidade} e gosta de ler ${livros_favoritos}`)    
    })
//Route Params - Passa informações pelo metodo GET via URL considerando o nome da rota após a / como variável
app.route('/:parametro').get((req,res) => res.send(req.params.parametro))

//QUERY Params
app.route('/').get( (req,res) => res.send(req.query.author) )
