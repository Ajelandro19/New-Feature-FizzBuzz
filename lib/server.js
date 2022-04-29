const ExplorerController = require("./controllers/Explorercontroller");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score=request.params.score;
    const trick= ExplorerController.getfuzzservice(score);
    response.json({score: score, trick: trick});
});