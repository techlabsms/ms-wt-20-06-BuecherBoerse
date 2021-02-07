import mongoose from 'mongoose'
import User from '../models/user.model'
import Conversation from '../models/conversation.model'

const MessageSchema = new mongoose.Schema({
    conversation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation',
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    message: {
        type: string,
        required: 'Bitte Nachricht eingeben',
    },
    created: {
        type: Date,
        default: Date.now,
    },
    updated: Date
})

export default mongoose.model('Message', MessageSchema)