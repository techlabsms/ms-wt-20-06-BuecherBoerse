import mongoose from 'mongoose'
import User from '../models/user.model'


const ConversationSchema = new mongoose.Schema({
    recipients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }],
    created: {
        type: Date,
        default: Date.now,
    },
    // BookId als betreff
    updated: Date // Last message
})

export default mongoose.model('Conversation', ConversationSchema)