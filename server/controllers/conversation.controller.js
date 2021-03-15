import Conversation from '../models/conversation.model'
import Message from '../models/messages.model'
import errorHandler from './../helpers/dbErrorHandler'
import mongoose from 'mongoose'

// Schicke Nachricht oder erstelle erste Nachricht
// Finde Nachrichten zwischen Benutzern
// const create_or_send = async (req, res) => {
//     // POST daher body
//     let from = mongoose.Types.ObjectId(req.body.sender)
//     let to = mongoose.Types.ObjectId(req.body.receiver)
//     Conversation.findOneAndUpdate(
//         {
//             recipients: {
//                 $all: [
//                     { $elemMatch: { $eq: from } },
//                     { $elemMatch: { $eq: to } },
//                 ],
//             },
//         },
//         {
//             recipients: [req.body.receiver, req.body.sender],
//             lastMessage: req.body.body,
//             date: Date.now(),
//         },
//         // upsert - erstelle Eintrag wenn keine da ist
//         // new - gebe Neuen Datenbank Eintrag zurück
//         // setDefaultsOnInsert - Setze Default eintraege
//         { upsert: true, new: true, setDefaultsOnInsert: true },
//         // Erstelle Nachricht
//         function (err, conversation) {
//             if (err) {
//                 console.log(err)
//                 res.setHeader('Content-Type', 'application/json')
//                 res.end(JSON.stringify({ message: 'Failure' }))
//                 res.sendStatus(500)
//             } else {
//                 let message = new Message({
//                     conversation: conversation._id,
//                     to: req.body.receiver,
//                     from: req.body.sender,
//                     body: req.body.message,
//                 })
//                 // Für direktes Updaten sockets.io
//                 req.io.sockets.emit('messages', req.body.body)
//                 message.save(err => {
//                     if (err) {
//                         console.log(err);
//                         res.setHeader('Content-Type', 'application/json');
//                         res.end(JSON.stringify({ message: 'Failure' }));
//                         res.sendStatus(500);
//                     } else {
//                         res.setHeader('Content-Type', 'application/json');
//                         res.end(
//                             JSON.stringify({
//                                 message: 'Success',
//                                 conversationId: conversation._id,
//                             })
//                         )
//                     }
//                 })
//             }
//         })
// }

const create_or_send = async (req, res, next) => {
    const message = new Message(req.body)
    try {
        await message.save()
        return res.status(200).json({
            message: "Nachricht erfolgreich gesendet!",
            nachricht: message
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}


export default { create_or_send }