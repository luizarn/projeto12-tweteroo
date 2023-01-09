
import express from "express";
import cors from "cors";

const server = express(); 
server.use(cors());
server.use(express.json());

const users= [];
const tweets = [];

server.post("/sing-up", (req, res) => {
const userData = req.body;
users.push(userData);
res.send("OK");
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


server.get("/tweets", (req, res) => {

  let lastTweets = [];
  if(tweets.length <= 10 )
    //mando como resposta
  res.send(lastTweets)
})

server.listen(5000, () => {
    console.log('Servidor funcionando!')
});