
import express from "express";
import cors from "cors";

const server = express(); 
server.use(cors());
server.use(express.json());

const users= [];
const tweets = [];

server.post("/sign-up", (req, res) => {
const userData = req.body;
users.push(userData);
res.send("OK");
});


server.post("/tweets", (req, res) => {
  const tweetData = req.body;

  if(users.find((n) => n.username === tweetData.username)){
    tweets.push(tweetData)
    res.send("OK");
  }else{
    res.send("UNAUTHORIZED");
  }
});


server.get("/tweets", (req, res) => {

  let lastTweets = [...tweets].reverse().slice(0, 10);
  let sendTweet = lastTweets.map( t => {
    const userAvatar = users.find(n => n.username === t.username);
    return {username: t.username, tweet: t.tweet, avatar: userAvatar.avatar }
  })
  console.log(sendTweet)
  res.send(sendTweet)
})

server.listen(5000, () => {
    console.log('Servidor funcionando!')
});