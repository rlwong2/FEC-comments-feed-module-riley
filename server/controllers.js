const db = require('./db');
const controller = require('./controllers');

module.exports = {
  comments: {
    get: (req, res) => {
      db.Comments.findAll()
        .then(function(comments) {
          res.json(comments)
        })
    },

    post: (req, res) => {
      var text = req.body;
      db.Comments.findOrCreate({ where: { text: text }})
        .spread((comment, created) => {
          res.sendStatus(created ? 201: 200);
        })
    }
  },

  song: {
    get: (req, res) => {
      db.Song.findAll()
        .then(function(song) {
          res.json(song)
        })
    }

  },

  artist: {
    get: (req, res) => {
      db.artist.findAll()
        .then(function(artist) {
          res.json(artist)
        })
    }

  }
};