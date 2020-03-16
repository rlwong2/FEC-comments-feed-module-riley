const Sequelize = require('sequelize');
const db = new Sequelize('FEC_comments_module', 'root', '', {
  dialect: 'mysql'
});

var Comments = db.define('Comments', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  user_id: Sequelize.STRING,
  user_name: Sequelize.STRING,
  user_followers_count: Sequelize.INTEGER,
  user_profile_pic: Sequelize.STRING,
  text: Sequelize.STRING,
  track_location: Sequelize.INTEGER,
  original_comment_id: Sequelize.INTEGER,
});

var Artist = db.define('Artist', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: Sequelize.STRING,
  followers_count: Sequelize.INTEGER,
  tracks_count: Sequelize.INTEGER,
  profile_pic: Sequelize.STRING
});

var Song = db.define('Song', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  url: Sequelize.STRING,
  artist_id: Sequelize.INTEGER,
  title: Sequelize.STRING,
  play_count: Sequelize.INTEGER,
  likes_count: Sequelize.INTEGER,
  repost_count: Sequelize.INTEGER,
  description: Sequelize.STRING,
  released_by: Sequelize.STRING,
  release_date: Sequelize.STRING,
  p_line: Sequelize.STRING,
  c_line: Sequelize.STRING,
  hashtags: Sequelize.STRING
});

Song.belongsTo(Artist);
Artist.hasMany(Song);

Comments.sync();
Artist.sync();
Song.sync();

exports.Comments = Comments;
exports.Artist = Artist;
exports.Song = Song;

// var knex = require('knex')({
//   client: 'mysql',
//   connection: {
//     host : '127.0.0.1',
//     user : 'root',
//     database : 'FEC-comments'
//   }
// });

// var init = function() {
//   console.log('Running db init')
//   knex.schema.createTable('comments', function (table) {
//     table.increments('comment_id').primary();
//     table.string('comment_user_id');
//     table.string('comment_user_name');
//     table.text('comment_body');
//     table.timestamp('created_at').defaultTo(knex.fn.now());
//     table.string('comment_track_location');
//     table.integer('original_comment_id');
//   })
//   .then((result) => {
//     console.log(result);
//     knex.schema.createTable('artist', function (table) {
//       table.increments('artist_id').primary();
//       table.string('artist_name');
//       table.integer('artist_followers_count');
//       table.integer('artist_tracks_count');
//     })
//   })
//   .then((result) => {
//     console.log(result);
//     knex.schema.createTable('song', function (table) {
//       table.increments('song_id').primary();
//       table.integer('song_artist_id');
//       table.integer('song_play_count');
//       table.integer('song_likes_count');
//       table.integer('song_repost_count');
//       table.text('description');
//       table.json('hashtags');
//     })
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// }

// init();

// module.exports.knex = knex;
// module.exports.init = init;

// Schema
// Comments Feed
    // comment_id
    // comment_user_id
    // comment_user_name
    // comment_body
    // comment_date
    // comment_track_location
      // reply_comment_id
      // reply_id
      // reply

// Artist Block
  // artist_id
  // artist_name
  // followers_count
  // artist_tracks_count

// Song Details
  // song_likes_count
  // song_play_count
  // song_repost_count
  // song_description
  // song_hashtags