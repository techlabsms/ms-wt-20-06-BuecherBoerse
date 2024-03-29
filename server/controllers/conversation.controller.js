import Conversation from '../models/conversation.model'
import Message from '../models/messages.model'


const createConv = async (req, res) => {
    // Erstelt erste Nachricht und die zugehoerige Conversation
    // Füge erste Nachricht zu Conversation hinzu
    const message = new Message(req.body)

    // Erstelle Conversation für Nachricht
    req.body.recipients = [req.body.sender, req.body.reciever]
    req.body.messages = [message._id]
    const conversation = new Conversation(req.body)

    try {
        // Speichere Nachricht
        await message.save()
        // Speichere Conversation
        await conversation.save()
        return res.status(200).json({
            message: "Nachricht erfolgreich gesendet!",
            nachricht: message,
            conversation: conversation
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            error: err.Message,
        })
    }
}

// Update conversation with new message
const writeMessage = async (req, res) => {
    const message = new Message(req.body)
    try {
        await message.save()
        // Add message to conversation
        let conversation = await Conversation.findByIdAndUpdate(req.conv._id, { $push: { messages: message } }, { new: true, useFindAndModify: false }).exec()

        return res.status(200).json({
            message: "Nachricht erfolgreich gesendet!",
            nachricht: message,
            conversation: conversation
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            error: err.message,
        })
    }
}

// Get All Conversations from User
const getConvByUser = async (req, res) => {
    try {
        // populate messages.send _id name
        let convs = await Conversation.find({ recipients: req.params.userId }).populate('recipients', '_id name').populate("messages", "message sender reciever").exec()
        if (!convs) {
            return res.status('400').json({
                error: 'User has no conversations',
            });
        }
        res.json(convs);
    } catch (err) {
        return res.status('400').json({
            error: err.Message,
        });
    }
};

const read = (req, res) => {
    return res.json(req.conv);
};

// Füge die Conversation mit bestimmer ID zum request hinzu 
const convByID = async (req, res, next, id) => {
    try {
        const conv = await Conversation.findById(id).populate('recipients', '_id name').populate("messages", "message sender reciever").exec()
        if (!conv)
            return res.status('400').json({
                error: "Conversation not found"
            })
        req.conv = conv
        next()
    } catch (err) {
        return res.status('400').json({
            error: err.Message
        })
    }
}

const deleteConvByID = async (req, res) => {
    try {
        let conv = req.conv;
        let isLastRecipient = false
        if (req.conv.recipients.length <= 1) {
            isLastRecipient = true
        }

        if (isLastRecipient == true) {
            // Delete conv if last iser
            let deletedConv = await conv.remove();

            return res.status(200).json({
                message: 'Conversation successfully deleted!',
                conversation: deletedConv,
            });
        }
        else {
            // Remove rec if not last else remove conv
            let newRecipients = []
            req.conv.recipients.forEach(recipient => {
                if (recipient._id != req.auth._id) {
                    newRecipients.push(recipient)
                }
            });

            conv.recipients = newRecipients
            await conv.save();

            return res.status(200).json({
                message: 'User from Conversation successfully removed!',
                conversation: conv,
            });
        }


    } catch (err) {
        return res.status(400).json({
            error: err.message,
        });

    }
}

export default { createConv, convByID, read, writeMessage, getConvByUser, deleteConvByID }