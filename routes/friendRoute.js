const express = require('express');
const authenticate = require('../middlewares/authenticate');
const friendController = require('../controllers/friendController');

const router = express.Router();

router.get('/', authenticate, friendController.getAllFriends);
router.post('/', authenticate, friendController.requestFriend);
router.patch('/:friendId', authenticate, friendController.updateFriend);

module.exports = router;
