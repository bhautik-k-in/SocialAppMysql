const express = require('express')
const router = express.Router()


/**
 * @description ROUTES REDIRECTION FOR ALL INDEX URL
 */
router.route('/')
    .get(async (req, res, next) => {
        await res.redirect('/api/v1/users')
    })


module.exports = router