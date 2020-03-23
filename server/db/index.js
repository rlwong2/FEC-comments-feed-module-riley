const Sequelize = require('sequelize');
const db = new Sequelize('fec_comments_module', 'root', '', {
  dialect: 'mysql',
  logging: false
});

const Comments = db.define('Comments', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: Sequelize.STRING,
  user_name: Sequelize.STRING,
  user_followers_count: Sequelize.INTEGER,
  user_profile_pic: Sequelize.STRING,
  text: Sequelize.STRING,
  track_location: Sequelize.STRING,
  original_comment_id: Sequelize.INTEGER,
},{
  timestamps: true
});

const Artist = db.define('Artist', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: { type: Sequelize.STRING, unique: true },
  followers_count: Sequelize.INTEGER,
  tracks_count: Sequelize.INTEGER,
  profile_pic: Sequelize.STRING
},{
  freezeTableName: true
});

const Song = db.define('Song', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
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
},{
  freezeTableName: true
});

// Song.belongsTo(Artist);
// Artist.hasMany(Song);

Artist.sync({ force: false });
Song.sync({ force: false });
Comments.sync({ force: false });


exports.Comments = Comments;
exports.Artist = Artist;
exports.Song = Song;


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