const config = require("./knexfile");
const knex = require("knex")(config);
const PLANT_TABLE = "planttable";

module.exports = {
  async findAll(req) {
    const plants = await knex.select().from("planttable");
    return plants;
  },

  async create(req) {
    knex(PLANT_TABLE).insert(req.body).returning("id");
  },

  async update(req) {
    knex(PLANT_TABLE).where({ id: req.params.id }).update(req.body);
  },

  async delete(req) {
    knex(PLANT_TABLE).where({ id: req.params.id }).del();
  },
};
