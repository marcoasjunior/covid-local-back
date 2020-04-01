const express = require('express');
const router = express();
const UserController = require('../controller/UserController')

router.route('/user')
    .get((req, res) => res.send('tudo ok'))
    .post(UserController.create)
    .put()

module.exports = router