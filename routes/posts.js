const express = require("express")
const router = express.Router()
const comments = require("./comments")
const postControl = require('../controller/posts')



/**
 * @description FOR ALL COMMENTS OF INDIVIDUAL POST
 */
router.use('/:postid/comments', comments)



/**
 * @description ROUTES FOR GET ALL POSTS & CREATE NEW POST
 */
router.route('/')
    .get(postControl.all)
    .post(postControl.store)


/**
 *@description ROUTES FOR EDIT / DELETE / GET SINGLE POST
 */
router.route('/:id')
    .get(postControl.show)
    .put(postControl.update)
    .delete(postControl.destroy)


module.exports = router