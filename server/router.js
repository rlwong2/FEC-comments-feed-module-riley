const controllers = require('./controllers.js');
const router = require('express').Router();

router.get('/null', controllers.main.get);

router.get('/comments', controllers.comments.get);

router.post('/comments', controllers.comments.post);

router.get('/artist', controllers.artist.get);

router.get('/song', controllers.song.get);

module.exports = router;