'use strict';

const Promise = require('bluebird');

module.exports = {
  get: () => {
    return Promise.resolve({
      data: [
        {
          "id": 1,
          "name": "testArtistName",
          "followers_count": 999999,
          "tracks_count": 999,
          "profile_pic": "",
          "createdAt": "2020-03-18T15:36:29.000Z",
          "updatedAt": "2020-03-18T15:36:29.000Z"
        }
      ]
    })
  }
};