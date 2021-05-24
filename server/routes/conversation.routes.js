import express from 'express'
import authCtrl from '../controllers/auth.controller'
import conversationCtrl from '../controllers/conversation.controller'

const router = express.Router()

router.route('/api/messages')
    .post(authCtrl.requireSignin, conversationCtrl.createConv) // Create conversation authCtrl.requireSignin, 

// authCtrl.requireSignin, authCtrl.hasAuthorizationForConversation
// Erstelle Nachricht in bestimmter Conversation, erhalte bestimmte Conversation
router.route('/api/messages/:convId')
    .get(authCtrl.requireSignin, authCtrl.hasAuthorizationForConversation, conversationCtrl.read)
    .post(authCtrl.requireSignin, authCtrl.hasAuthorizationForConversation, conversationCtrl.writeMessage)

// Erhalte bestimmte Nachricht??

// Erhalte alle Conversations in denen der User beteiligt ist
router.route('/api/messages/user/:userId')
    .get(authCtrl.requireSignin, authCtrl.hasAuthorizationForConversation, conversationCtrl.getConvByUser)

// Loesche Konversation


router.param('convId', conversationCtrl.convByID)

export default router