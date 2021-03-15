import express from 'express'
import authCtrl from '../controllers/auth.controller'
import conversationCtrl from '../controllers/conversation.controller'

const router = express.Router()

router.route('/api/conversation')
    .post(conversationCtrl.create_or_send) // Create message
    .get(authCtrl.requireSignin, authCtrl.hasAuthorization, conversationCtrl.create_or_send) // Get messages

export default router