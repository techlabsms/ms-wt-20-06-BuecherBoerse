import mongoose from 'mongoose'
import User from '../models/user.model'

const ConversationSchema = new mongoose.Schema({
    recipients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    lastMessage: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now,
    },
    updated: Date
})

export default mongoose.model('Conversation', ConversationSchema)