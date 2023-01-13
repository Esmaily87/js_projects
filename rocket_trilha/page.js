//AULA PARÂMENTROS NAS REQUISIÇÕES BODY, ROUTE E QUERY
const express = require('express')
const app = express()

app.listen('3000',() =>console.log("Playing"))

//middleware

app.use(express.json())

app.route('/').get( (req,res) => res.send(req.query) )

//
app.route('/').put((req,res)  => res.send(req.body.autor))

//Body Params - o método post não é enviado pelo header da requisição, mas pelo body (escondido)
app.route('/').post((req,res)  => {
    const {autor, cidade, livros_favoritos} = req.body
    res.send(`O nome do autor é ${autor} e mora em ${cidade} e gosta de ler ${livros_favoritos}`)    
    })
//Route Params - Passa informações pelo metodo GET via URL considerando o nome da rota após a / como variável
//app.route('/:parametro').get((req,res) => res.send(req.params.parametro))

//QUERY Params - Permite criar as variáveis direto na URL por exemplo http://localhost:3000/?nome=esmaily&cidade=Fortaleza-CE
app.route('/').get( (req,res) => res.send(req.query.autor) )
app.route('/about').get( (req,res) => res.send(req.query.autor) )
app.route('/about/user').get( (req,res) => res.send(req.query.nome) )
app.route('/about/user/sexo').get( (req,res) => res.send(req.query.sexo) )
