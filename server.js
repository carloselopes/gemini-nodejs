import express from "express";

const posts = [
    {
      descricao: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/300"
    },
    {
      descricao: "Gato fazendo yoga",
      imagem: "https://placecats.com/yoga/300/300"
    },
    {
      descricao: "Gatinho dormindo",
      imagem: "https://placecats.com/sleep/300/300"
    },
    {
      descricao: "Gato curioso",
      imagem: "https://placecats.com/curious/300/300"
    },
    {
      descricao: "Gato brincando com bola",
      imagem: "https://placecats.com/ball/300/300"
    },
    {
      descricao: "Gato comendo",
      imagem: "https://placecats.com/food/300/300"
    }
  ];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor rodando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});