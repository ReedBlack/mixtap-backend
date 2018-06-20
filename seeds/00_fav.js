exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('favmixes').del()
    .then(function () {
      // Inserts seed entries
      return knex('favmixes').insert([{
          id: 1,
          DJ: "Reed Black",
          Title: "2016 Promo Dopeness",
          Mixlink: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Reed+Black+at+Emily's+101316.mp3",
          Tags: "chill house lounge funk groove hip-hop",
          Likes: 3
        }

      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE favmixes_id_seq RESTART WITH 2;")
    })
};