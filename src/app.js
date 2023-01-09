import express from "express";
import cors from "cors";

const server = express(); //cria um servidor
server.use(cors());
server.use(express.json());

const users= [];
const tweets = [];

server.post("/sing-up", (req, res) => {
const userData = req.body;

users.push(userData);
res.status(201).send("OK");
});


server.post("/tweets", (req, res) => {
  const tweetData = req.body;

  if(users.find((n) => n.username === tweetData.username)){
    tweets.push(tweetData)
    res.status(201).send("OK");
  }else{
    res.status(401).send("UNAUTHORIZED");
  }
});
//configura uma função pra ser executada quando bater um GET na rota "/menu"
server.get("/tweets", (req, res) => {

  let lastTweets = [];
  if(tweets.length <= 10 )
    //mando como resposta
  res.send("ola sou o servidor da T9")
})

server.listen(5000, () => {
    console.log('Servidor deu bom!')
});