exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('mixtable').del()
    .then(function () {
      // Inserts seed entries
      return knex('mixtable').insert([{
          id: 1,
          DJ: "Reed Black",
          Title: "September 2017 Yoga Mix",
          selectedFile: null,
          Tags: "chill meditation lounge yoga"
        },
        {
          id: 2,
          DJ: "Vince Staples",
          Title: "Yeah Right",
          selectedFile: null,
          Tags: "rap bass hip-hop"
        },
        {
          id: 3,
          DJ: "Bob Moses",
          Title: "BBC Essential Mix 2016",
          selectedFile: null,
          Tags: "chill house lounge experimental"
        }
      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE mixtable_id_seq RESTART WITH 4;")
    })
};