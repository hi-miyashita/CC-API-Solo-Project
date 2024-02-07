exports.seed = async function (knex) {
  await knex("planttable").del();
  await knex("planttable").insert([
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
  ]);
};
