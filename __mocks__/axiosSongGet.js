'use strict';

const Promise = require('bluebird');

module.exports = {
  get: () => {
    return Promise.resolve({
      data: [
        {
          "id": 1,
          "artist_id": 1,
          "title": "Test Song Title",
          "play_count": 999999,
          "likes_count": 999,
          "repost_count": 99,
          "description": "",
          "released_by": "",
          "release_date": "01 January 2020",
          "p_line": "℗ 2020",
          "c_line": "© 2019",
          "hashtags": "",
          "createdAt": "2020-03-18T15:36:29.000Z",
          "updatedAt": "2020-03-18T15:36:29.000Z"
      }
      ]
    })
  }
};