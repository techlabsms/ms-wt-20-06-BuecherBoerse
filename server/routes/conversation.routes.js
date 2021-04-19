import express from 'express'
import authCtrl from '../controllers/auth.controller'
import conversationCtrl from '../controllers/conversation.controller'

const router = express.Router()

router.route('/api/messages')
    .post(conversationCtrl.createConv) // Create conversation authCtrl.requireSignin, 

// authCtrl.requireSignin, authCtrl.hasAuthorizationForConversation
// Erstelle Nachricht in bestimmter Conversation, erhalte bestimmte Conversation
router.route('/api/messages/:convId')
    .get(conversationCtrl.read)
    .post(conversationCtrl.writeMessage)

// Erhalte bestimmte Nachricht??

// Erhalte alle Conversations in denen der User beteiligt ist
router.route('/api/messages/user/:userId')
    .get(conversationCtrl.getConvByUser)

router.param('convId', conversationCtrl.convByID)

export default router