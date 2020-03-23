'use strict';
module.exports = {
  comments: {
    get: () => {
      return Promise.resolve({
        data: [
          {
            "id": 998,
            "user_id": "d2cc14dd-e8ad-44d2-a8f0-86262928test",
            "user_name": "Test User 1",
            "user_followers_count": 5,
            "user_profile_pic": "https://fec-comments-images.s3.us-east-2.amazonaws.com/zelda.jpg",
            "text": "Learning how to write useful tests is hard!",
            "track_location": "01:00",
            "original_comment_id": null,
            "createdAt": "2020-03-23T01:48:48.000Z",
            "updatedAt": "2020-03-23T01:48:48.000Z"
          },
          {
            "id": 999,
            "user_id": "14914f57-b595-4196-92ea-e2b6bf1ftest",
            "user_name": "Test User 2",
            "user_followers_count": 99,
            "user_profile_pic": "https://fec-comments-images.s3.us-east-2.amazonaws.com/zelda.jpg",
            "text": "One day writing tests will be easier!",
            "track_location": "03:00",
            "original_comment_id": null,
            "createdAt": "2020-03-23T01:47:52.000Z",
            "updatedAt": "2020-03-23T01:47:52.000Z"
          }
        ]
      });
    }
  }
};