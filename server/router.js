const controller = require('./controllers');
const router = require('express').Router();

router.get('/comments', controller.comments.get);

router.post('/comments', controller.comments.post);

router.get('/artist', controller.artist.get);

router.get('/song', controller.song.get);

module.exports = router;