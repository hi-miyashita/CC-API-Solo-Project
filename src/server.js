const express = require("express");
const plantController = require("./dataAccess/plantController");

const setupServer = () => {
  const app = express();
  app.use(express.json());

  app.get("/plants", async (req, res) => {
    try {
      const plants = await plantController.findAll(req, res);
      res.status(200).json(plants);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while retrieving plants." });
    }
  });

  app.post("/plants", async (req, res) => {
    try {
      await plantController.create(req, res);
      res.status(201).json();
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while creating plant." });
    }
  });

  app.put("/plants/:id", async (req, res) => {
    try {
      await plantController.update(req, res);
      res.status(204).json();
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while updating plants." });
    }
  });

  app.delete("/plants/:id", async (req, res) => {
    try {
      await plantController.delete(req, res);
      res.status(204).json();
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while deleting plants." });
    }
  });

  return app;
};

module.exports = { setupServer };
