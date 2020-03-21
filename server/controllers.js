const faker = require('faker');
const moment = require('moment');
const db = require('./db');

async function newComment (obj) {
  return await function () {
    let newCommentBlock = {
      user_id: faker.random.uuid(),
      user_name: obj.user_name,
      user_profile_pic: 'https://fec-comments-images.s3.us-east-2.amazonaws.com/zelda.jpg',
      text: obj.text,
      user_followers_count: Math.floor(Math.random() * 100),
      track_location: moment.utc(Math.floor(Math.random() * 235000)).format('mm:ss'),
      original_comment_id: null
    }
    // console.log(fakeCommentBlock)
    return newCommentBlock;
  }
}

module.exports = {
  song: {
    get: function (req, res) {
      db.Song.findOne()
        .then(function(song) {
          // console.log(song)
          res.json(song)
        })
        .catch((err) => {
          console.log('Error: song.get', err)
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
          console.log('Error: artist.get', err)
        })
    }

  },

  comments: {
    get: (req, res) => {
      db.Comments.findAll({ order: [['updatedAt', 'DESC']] })
        .then(function(comments) {
          res.json(comments)
        })
        .catch((err) => {
          console.log('Error: comments.get', err)
        })
    },

    post: (req, res) => {
      console.log(req.body)
      let text = req.body.text;
      newComment(req.body)
        .then((obj) => {
          db.Comments.create(obj)
          .then((result) => {
            console.log('Success: newComment created')
            db.Comments.findOrCreate({ where: { text: text }})
              .spread((comment, created) => {
                res.sendStatus(created ? 201: 200);
                res.end();
              })
          })
          .catch((err) => {
            console.log('Error: newComment created', err)
          })
        })

    }
  },

  main: {
    get: (req, res) => {
      res.sendStatus(200)
      res.end()
    }
  }
};

module.exports.newComment = newComment;