//o express vai pegar todo o js e exibir no browser
const express = require('express')
const app = express();

//setando o express para exibir com o ejs
app.set("view engine", "ejs");

//configurando rotas
app.get("/", function(req, res){
    var inc = 0;
    var itens = [
        
        {
            title:"A", 
            message: "lém do horizonte ",inc: inc=inc+1,
        },
        {
            title:"M", 
            message: "e mostre um lugar", inc: inc=inc+1,
        },
        {
            title:"O", 
            message: "blíquo e traquilo", inc: inc=inc+1,
        },
        {
            title:"R", 
            message: "asgando o vento", inc: inc=inc+1,
    },

    ];
    const subtitle = "Uma musica é sempre uma canção!"

    res.render("pages/index",{
        qualidades: itens,
        subtitulo: subtitle
    });
})

app.get("/sobre", function(req, res){
    res.render("pages/about");
})

//ouvindo a porta 8080 para executar o app
app.listen(8080);
console.log("Server running...");