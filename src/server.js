//!Importando o Express
const express = require("express")
//!Executar o express para criação do server
const server = express()
//O Require se liga ao exportes conectando ele aqui
const routes = require("./routes.js")

server.set('view engine', 'ejs')

server.use(express.static("public"))



//routes
server.use(routes)
server.listen(3000, () => console.log("rodando"))

