const express = require('express')
const app = express()
var token = ""
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all('/', (req, res) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
})

app.post('/api', function(req, res) {


(async() => {
    if (req.body.auth == true){
    characterAI.unauthenticate()
    token = await characterAI.authenticateAsGuest();
    }
    const characterId = "v3lyisRb7INyd5BUdUKEKS1-MUTBom9dY9qV9-2ioTE"
    const chat = await characterAI.createOrContinueChat(characterId);
    const response = await chat.sendAndAwaitResponse(req.body.msg, true)

  res.send({
    'Answer': response.text,
  });
})();

});

app.listen(process.env.PORT || 3000)
