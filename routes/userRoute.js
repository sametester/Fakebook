const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const authenticate = require('../middlewares/authenticate');
const upload = require('../middlewares/upload');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.patch(
  '/profile-img',
  authenticate, // เอา req.user มาให้ใช้
  upload.single('profileImg'), // เอา req.file มาให้ใช้
  userController.updateProfileImg // สามารถเรียกใช้ req.file ได้
);

module.exports = router;
