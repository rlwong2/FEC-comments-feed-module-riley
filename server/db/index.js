var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    database : 'FEC-comments'
  }
});

knex.schema.createTable('comments', function (table) {
  table.increments('comment_id').primary();
  table.string('comment_user_id');
  table.string('comment_user_name');
  table.text('comment_body');
  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.string('comment_track_location');
  table.integer('original_comment_id');
})

knex.schema.createTable('artist', function (table) {
  table.increments('artist_id').primary();
  table.string('artist_name');
  table.integer('artist_followers_count');
  table.integer('artist_tracks_count');
})

knex.schema.createTable('song', function (table) {
  table.increments('song_id').primary();
  table.integer('song_play_count');
  table.integer('song_likes_count');
  table.integer('song_repost_count');
  table.text('description');
  table.json('hashtags');
})

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