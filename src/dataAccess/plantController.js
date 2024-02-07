const config = require("./knexfile");
const knex = require("knex")(config);
const PLANT_TABLE = "planttable";

module.exports = {
  async findAll(req, res) {
    const plants = await knex.select().from("planttable");
    res.json(plants);
  },

  async create(req, res) {
    knex(PLANT_TABLE).insert(req.body).returning("id");
  },

  async update(req, res) {
    knex(PLANT_TABLE).where({ id: req.params.id }).update(req.body);
  },

  async delete(req, res) {
    knex(PLANT_TABLE).where({ id: req.params.id }).del();
  },
};
