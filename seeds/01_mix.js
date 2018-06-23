exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('mixtable').del()
    .then(function () {
      // Inserts seed entries
      return knex('mixtable').insert([{
          id: 1,
          DJ: "Reed Black",
          Title: "2016 Promo Mix",
          Mixlink: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Reed+Black+at+Emily's+101316.mp3",
          Tags: "chill house lounge funk groove hip-hop",
          Likes: 3
        },
        {
          id: 2,
          DJ: "Nero",
          Title: "BBC Essential Mix 2015",
          Mixlink: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Nero+2015+Essential+Mix.mp3",
          Tags: "EDM club electronica dance dubstep house",
          Likes: 22
        },
        {
          id: 3,
          DJ: "Bob Moses",
          Title: "BBC Essential Mix 2016",
          Mixlink: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/01+Bob+Moses+Essential+Mix-SAT-03-05-2016.mp3",
          Tags: "chill canadian house vocal lounge experimental",
          Likes: 14
        },
        {
          id: 4,
          DJ: "Reed Black",
          Title: "@ Punch House",
          Mixlink: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Punch+House+mp3.mp3",
          Tags: "funk soul electronic chill electro chill-wave weed hip-hop",
          Likes: 3
        },
        {
          id: 5,
          DJ: "Nicolas Jaar",
          Title: "NYC Boiler Room",
          Mixlink: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Nicolas+Jaar+Boiler+Room+NYC+DJ+Set+at+Clown+%26+Sunset+Takeover.mp3",
          Tags: "house experimental left-field techno unconventional odd strange psychedelic",
          Likes: 5
        },
        {
          id: 6,
          DJ: "Four Tet & Jamie XX",
          Title: "BBC Essential Mix",
          Mixlink: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/Four+Tet+%26+Jamie+XX+-+Essential+Mix+BBC+Radio+1+MAR+28+2015.mp3",
          Tags: "House chill lounge experimental soul world UK England",
          Likes: 5
        }
      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE mixtable_id_seq RESTART WITH 7;")
    })
};