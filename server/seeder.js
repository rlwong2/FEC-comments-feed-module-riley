const faker = require('faker');
const db = require('./db');
const AWS = require('aws-sdk');
const fs = require('fs');
const $ = require('jquery');
const cliProgress = require('cli-progress');
let n = 1; // how many pictures?

// setup progress bar

const b1 = new cliProgress.SingleBar({
  format: 'Progress |' + _colors.cyan('{bar}') + '| {percentage}% || {value}/{total} Chunks || Speed: {speed}',
  barCompleteChar: '\u2588',
  barIncompleteChar: '\u2591',
  hideCursor: true
});

b1.start(n, 0, {
  speed: "N/A"
});

// Download 100 profile pics


// Upload to s3
const ID = 'AKIAIFYG46ECG53WG5VA';
const SECRET = 'UEmgqixBIDsAa6nY3Pft0XeVMH1cezmxju1uaul/';
const BUCKET_NAME = 'fec-comments-images';
let imageName = faker.image.avatar();

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET
});

const uploadFile = (fileName) => {
  // Read content from the file
  const fileContent = fs.readFileSync(fileName);

  // Setting up S3 upload parameters
  const params = {
      Bucket: BUCKET_NAME,
      Key: imageName, // File name you want to save as in S3
      Body: fileContent
  };

  // Uploading files to the bucket
  s3.upload(params, function(err, data) {
      if (err) {
          throw err;
      }
      console.log(`File uploaded successfully. ${data.Location}`);
  });
};

// Seed Comments

// Seed Artist
db.Artist.create({
  name: 'the1975',
  followers_count: 981356,
  tracks_count: 136,
  profile_pic: 'https://fec-comments-images.s3.us-east-2.amazonaws.com/frailstateofmindsm.jpg'
}).then((message) => {
  console.log(message);
});

// Seed Song
db.Artist.findOrCreate({ where: { name: 'the1975'}  })
  .spread((user, created) => {
    db.Song.create({
      artist_id: Artist.get('id'),
      title: 'Frail State of Mind',
      play_count: 16543,
      likes_count: 368,
      repost_count: 41,
      description: '',
      released_by: '',
      release_date: '24 October 2019',
      p_line: '℗ 2020 Dirty Hit, under exclusive licence to Polydor Records and Interscope Records',
      c_line: '© 2019 Dirty Hit, under exclusive licence to Polydor Records and Interscope Records',
      hashtags: ''
    }).then((message) => {
      console.log(message);
    })
  });


// update progress bar
  b1.update(1);

// end progress bar
  b1.stop();