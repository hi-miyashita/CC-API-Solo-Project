const express = require("express");
const plantController = require("./dataAccess/plantController");

let jsonDatas = [
  {
    id: "1",
    name: "コキンレイカ",
    family: "オミナエシ",
    genus: "オミナエシ",
    area: "近畿",
    location: "テスト",
    date: "2024/02/06",
    note: "テスト用",
  },
  {
    id: "2",
    name: "コキンレイカ",
    family: "オミナエシ",
    genus: "オミナエシ",
    area: "近畿",
    location: "テスト",
    date: "2024/02/06",
    note: "テスト用",
  },
  {
    id: "3",
    name: "コキンレイカ",
    family: "オミナエシ",
    genus: "オミナエシ",
    area: "近畿",
    location: "テスト",
    date: "2024/02/06",
    note: "テスト用",
  },
];

const setupServer = () => {
  const app = express();
  app.use(express.json());

  app.get("/plants", async (req, res) => {
    try {
      const plants = await plantController.index(req, res);
      res.status(200).json(plants);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while retrieving plants." });
    }
  });

  app.post("/plants", (req, res) => {
    //追加処理
    jsonDatas = [
      {
        id: "1",
        name: "コキンレイカ",
        family: "オミナエシ",
        genus: "オミナエシ",
        area: "近畿",
        location: "テスト",
        date: "2024/02/06",
        note: "テスト用",
      },
      {
        id: "2",
        name: "コキンレイカ",
        family: "オミナエシ",
        genus: "オミナエシ",
        area: "近畿",
        location: "テスト",
        date: "2024/02/06",
        note: "テスト用",
      },
      {
        id: "3",
        name: "コキンレイカ",
        family: "オミナエシ",
        genus: "オミナエシ",
        area: "近畿",
        location: "テスト",
        date: "2024/02/06",
        note: "テスト用",
      },
      {
        id: "4",
        name: "マキンレイカ",
        family: "オミナエシ",
        genus: "オミナエシ",
        area: "千島樺太",
        location: "テスト",
        date: "2024/02/06",
        note: "テスト用",
      },
    ];
    res.status(201).send();
  });

  app.put("/plants/:id", (req, res) => {
    //更新処理
    let { id } = req.params;
    let body = req.body;

    jsonDatas = [
      {
        id: "1",
        name: "コキンレイカ",
        family: "オミナエシ",
        genus: "オミナエシ",
        area: "近畿",
        location: "テスト",
        date: "2024/02/06",
        note: "テスト用",
      },
      {
        id: "2",
        name: "トベラ",
        family: "トベラ",
        genus: "トベラ",
        area: "家周辺",
        location: "家の外壁の横",
        date: "2024/02/06",
        note: "大家さんが朝５時半くらいに水をやってる。差し込む朝日とおばあさんが水やりをする音はだいたい嘘くさい",
      },
      {
        id: "3",
        name: "コキンレイカ",
        family: "オミナエシ",
        genus: "オミナエシ",
        area: "近畿",
        location: "テスト",
        date: "2024/02/06",
        note: "テスト用",
      },
      {
        id: "4",
        name: "マキンレイカ",
        family: "オミナエシ",
        genus: "オミナエシ",
        area: "千島樺太",
        location: "テスト",
        date: "2024/02/06",
        note: "テスト用",
      },
    ];

    res.status(204).json();
  });

  app.delete("/plants/:id", (req, res) => {
    //削除処理
    let { id } = req.params;
    jsonDatas = [
      {
        id: "1",
        name: "コキンレイカ",
        family: "オミナエシ",
        genus: "オミナエシ",
        area: "近畿",
        location: "テスト",
        date: "2024/02/06",
        note: "テスト用",
      },
      {
        id: "2",
        name: "トベラ",
        family: "トベラ",
        genus: "トベラ",
        area: "家周辺",
        location: "家の外壁の横",
        date: "2024/02/06",
        note: "大家さんが朝５時半くらいに水をやってる。差し込む朝日とおばあさんが水やりをする音はだいたい嘘くさい",
      },
      {
        id: "3",
        name: "マキンレイカ",
        family: "オミナエシ",
        genus: "オミナエシ",
        area: "千島樺太",
        location: "テスト",
        date: "2024/02/06",
        note: "テスト用",
      },
    ];

    res.status(204).send();
  });

  return app;
};

module.exports = { setupServer };
