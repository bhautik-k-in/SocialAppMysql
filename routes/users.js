const express = require('express');
const router = express.Router();
const userControl = require('../controller/users')


/**
 * @description LOGIN USER ROUTE
 */
router.route('/')
  .post(userControl.login)



/**
 * @description REGISTER USER ROUTE
 */
router.route('/r')
  .post(userControl.register)


module.exports = router;
