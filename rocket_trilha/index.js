const { json } = require('express')
const express = require('express')

const app = express()

app.listen('3000')
 // Tudo que é solicitado no get é dado como resposta RES //
app.route('/').get((req,res)=>res.send("Olá usuário"))

app.route('/sobre').get((req,res)=>res.send("Esmaily Negreiros Peixoto"))
 // Tudo que é enviado no post é recebido no req no caso abaixo no corpo da requisição //
 //Por padrão o navegador não faz POST, apenas GET

 //midleware - ponte entre a requisiçao e o express

 app.use(express.json())
app.route('/').post( (req,res) => res.send(req.body))
app.use(express.json())
app.route('/nome').post((req,res)=>console.log(req.body.nome))
//PUT o objetivo do put é editar
let autor = "Esmaily"

app.route('/autor').get( (req, res) => res.send(autor) )

app.route('/edit').put((req,res) => {
    autor = req.body.autor
    res.send(autor)
})

//Delete

app.route('/del/:id').delete( (req,res) => {
    
    

    res.send(req.params.id)
    
})
