const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../src/server");
chai.should();
const server = setupServer();
let request;

beforeEach(() => {
  request = chai.request(server);
});

const newData = {
  id: "4",
  name: "マキンレイカ",
  family: "オミナエシ",
  genus: "オミナエシ",
  area: "千島樺太",
  location: "テスト",
  date: "2024/02/06",
  note: "テスト用",
};

const updateData = {
  id: "2",
  name: "トベラ",
  family: "トベラ",
  genus: "トベラ",
  area: "家周辺",
  location: "家の外壁の横",
  date: "2024/02/06",
  note: "大家さんが朝５時半くらいに水をやってる。差し込む朝日とおばあさんが水やりをする音はだいたい嘘くさい",
};

describe("GET /plants", () => {
  it("should return all plants", async () => {
    const res = await request.get("/plants");
    res.body.length.should.equal(3);
  });

  it("should not return  blank object", async () => {
    const res = await request.get("/plants");
    res.body[2].family.should.equal("オミナエシ");
  });
});

describe("POST /plants", () => {
  it("should return 201", async () => {
    const res = await request.post("/plants").send(newData);
    res.should.have.status(201);
  });

  it("should create new plant", async () => {
    const res = await request.get("/plants");
    console.log(res.body[3]);
    res.body[3].area.should.equal("千島樺太");
  });
});

describe("PUT /plants/:id", () => {
  it("should return 204", async () => {
    const res = await request.put("/plants/2").send(updateData);
    res.should.have.status(204);
  });

  it("should update plant", async () => {
    const res = await request.get("/plants");
    res.body[1].location.should.equal("家の外壁の横");
  });
});

describe("DELETE /plants/:id", () => {
  it("should return 204", async () => {
    const res = await request.delete("/plants/3");
    res.should.have.status(204);
  });

  it("should delete plant", async () => {
    const res = await request.get("/plants");
    res.body.length.should.equal(3);
  });
});
