const plantModel = require("./plantModel");

module.exports = {
  async index(req, res) {
    const plants = await plantModel.getAll();
    res.json(plants);
  },

  async view(req, res) {
    const id = parseInt(req.params.id);
    const plant = await plantModel.getById(id);
    res.json(plant);
  },

  async edit(req, res) {
    const id = parseInt(req.params.id);
    const edittedId = await plantModel.update(id);
    res.json(edittedId);
  },

  async delete(req, res) {
    const id = parseInt(req.params.id);
    await plantModel.delete(id);
    res.json();
  },
};
