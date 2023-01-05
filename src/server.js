import express from "express";
import cors from "cors";

const server = express(); //cria um servidor

//biblioteca que vai liberar o acesso pra td mundo 
server.use(cors())

//configura uma funlão pra ser executada quando bater um GET na rota "/menu"
server.get("/menu", (req, res) => {
    //mando como resposta
  res.send("ola sou o servidor da T9")
})

//configura o servido para rodr na porta 4001
//server.listen(4000);
server.listen(4001, () => {
    console.log('Servidor deu bom!')
})