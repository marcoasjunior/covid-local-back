const express = require('express');
const router = express();
const UserController = require('../controller/UserController')

router.route('/user')
    .get((req, res) => res.send('tudo ok'))
    .post(UserController.create)
    .put(UserController.update)

router.route('/symptoms')
    .get()
    .post()
    .put(UserController.updateSymptoms)
    .delete()

router.route('/groups')
    .get()
    .post()
    .put(UserController.updateGroups)
    .delete()

router.route('/cases/:id')
    .get(UserController.getCases)
    .post()
    .put()
    .delete()

module.exports = router