exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('mixtable').del()
    .then(function () {
      // Inserts seed entries
      return knex('mixtable').insert([{
          id: 1,
          DJ: "Reed Black",
          Title: "2016 Promo Dopeness",
          Mixlink: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Reed+Black+at+Emily's+101316.mp3",
          Tags: "chill house lounge funk groove hip-hop"
        },
        {
          id: 2,
          DJ: "Nero",
          Title: "BBC Essential Mix 2015",
          Mixlink: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Nero+2015+Essential+Mix.mp3",
          Tags: "EDM club dance dubstep house"
        },
        {
          id: 3,
          DJ: "Bob Moses",
          Title: "BBC Essential Mix 2016",
          Mixlink: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/01+Bob+Moses+Essential+Mix-SAT-03-05-2016.mp3",
          Tags: "chill house lounge experimental"
        }
      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE mixtable_id_seq RESTART WITH 4;")
    })
};