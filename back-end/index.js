const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

let savedQuestions = [];
fs.readFile('./data/questions.json', 'utf8', (readError, data) => {
  if (!readError) {
    savedQuestions = JSON.parse(data);
  }
});

app.post('/question', (req, res) => {
  const body = req.body;

  const newQuestion = {
    // id: Date.now().toString(),
    text: body.text,
    answer: body.answer,
  };

  savedQuestions.push(newQuestion);

  fs.writeFile('./data/questions.json', JSON.stringify(savedQuestions), (writeError) => {
    if (writeError) {
      res.json({
        status: 'error',
        message: 'Failed to write to file',
      });
    } else {
      res.json({
        status: 'success',
        data: savedQuestions,
      });
    }
  });
});

app.get("/questions", (req, res) => {
  fs.readFile("./data/questions.json", (readError, data) => {
    if (readError) {
      res.json({
        status: "read file error"
      });
    } else {
      const users = JSON.parse(data);
      res.json({
        status: "success",
        data: users,
      })
    }
  });
});

// app.get("/users/:id", (req, res) => {
//   const userId = req.params.id;

//   let data = getData(userId);
//   res.send(data);
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
