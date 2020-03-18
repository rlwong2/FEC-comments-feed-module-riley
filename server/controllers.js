const db = require('./db');

module.exports = {
  song: {
    get: function (req, res) {
      db.Song.findOne()
        .then(function(song) {
          console.log(song)
          res.json(song)
        })
        .catch((err) => {
          console.log(err)
        })
    }

  },

  artist: {
    get: (req, res) => {
      db.Artist.findOne()
        .then((artist) => {
          res.json(artist)
        })
        .catch((err) => {
          console.log(err)
        })
    }

  },

  comments: {
    get: (req, res) => {
      db.Comments.findAll()
        .then(function(comments) {
          res.json(comments)
        })
        .catch((err) => {
          console.log(err)
        })
    },

    post: (req, res) => {
      var text = req.body;
      db.Comments.findOrCreate({ where: { text: text }})
        .spread((comment, created) => {
          res.sendStatus(created ? 201: 200);
        })
    }
  }
};

