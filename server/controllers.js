const faker = require('faker');
const moment = require('moment');
const db = require('./db');

async function newComment (obj) {
  let fakeIt = function (object) {
    let newCommentsFeed = {
      user_id: faker.random.uuid(),
      user_name: obj.user_name,
      user_profile_pic: 'https://fec-comments-images.s3.us-east-2.amazonaws.com/zelda.jpg',
      text: obj.text,
      user_followers_count: Math.floor(Math.random() * 100),
      track_location: moment.utc(Math.floor(Math.random() * 235000)).format('mm:ss'),
      original_comment_id: null
    }
    // console.log(newCommentsFeed)
    return newCommentsFeed;
  }
  return await fakeIt(obj);
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
      console.log('req.body: ', req.body)
      let text = req.body.text;
      newComment(req.body)
        .then((obj) => {
          // console.log('obj: ')
          // console.log(obj)
          db.Comments.create(obj)
          .then((result) => {
            console.log('Success: newComment created')
            res.sendStatus(201)
            res.end('Created')
            // db.Comments.findOne({ where: { text: text }})
            //   .then((result) => {
            //     res.sendStatus(201)
            //     res.end('Created')
            //   })
            //   .catch((err) => {
            //     res.sendStatus(200)
            //     res.end('OK')
            //   })
            // db.Comments.findOrCreate({ where: { text: text }})
            //   .spread((comment, created) => {
            //     res.sendStatus(created ? 201: 200);
            //   })
          })
          .catch((err) => {
            console.log('Error: newComment created', err)
            res.sendStatus(200)
            res.end('OK')
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