/*
    - get all comments (can access regardless of login status)
    - decide whether or not expand comments button is necessary based on number of comments in database for certain page
    - create new comment (only after logged in)
    - update comment (edit their own comment, upvote/downvote)
    - delete comment (delete comment)
    - send database (commentID + userID + token), retrieve from database to load onto screen, 

*/

//require model
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError, NotFoundError } = require('../errors')
const Comment = require('../models/Comment')

const getAllComments = async (req, res) => {
    //get all comments 

    res.status(StatusCodes.OK).send('Get All Comments')
}

const createComment = async (req, res) => {
    const {
        params: { id: userID }
    } = req
    const { text } = req.body;

    if (!userID) {
        throw new UnauthenticatedError('Please log in before using this feature.')
    }
    if (!text) {
        throw new NotFoundError('Please enter a message.')
    }
    const comment = await Comment.create({ text, userID });

    res.status(StatusCodes.CREATED).json({ comment })
}

const updateComment = async (req, res) => {
    const {
        params: { id: commentID }
    } = req;
    //update text or update upvotes/downvotes
    //single comment with commentID (unique id)

    res.status(StatusCodes.OK).send('Update Comment')
}

const deleteComment = async (req, res) => {
    const {
        params: { id: commentID }
    } = req;
    //delete single comment
    //single comment with commentID (unique id)

    res.status(StatusCodes.OK).send('Delete Comment')
}

module.exports = {
    getAllComments,
    createComment,
    updateComment,
    deleteComment
}



