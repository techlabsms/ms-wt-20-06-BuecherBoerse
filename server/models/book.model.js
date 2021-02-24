import mongoose from 'mongoose'
import User from '../models/user.model'

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name des Buches fehlt'
    },
    author: {
        type: String,
        trim: true,
        required: 'Autor des Buches fehlt'
    },
    category: {
        type: String,
        trim: true,
        required: "Bitte ein Genre eintragen"
    },
    language: {
        type: String,
        trim: true,
        required: "Bitte eine Sprache eintragen"
    },
    condition: {		//Zustand des Buches
        type: String,
        trim: true,
        required: "Bitte den Zustand angeben"
    },
    description: {		//Beschreibung des Buches
        type: String,
        required: "Bitte beschreibe dein Buch"
    },
    //User ID, kann momentan nur manuell eingetragen werden?
    owner: {
        //type: mongoose.Schema.Types.ObjectId,
        //ref: 'User',
        type: String,
        //required: "Bitte einen User eintragen"
    },
    status: {	//privat, bereit zum Verleihen, verliehen
        type: String,
        trim: true,
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date
})

export default mongoose.model('Book', BookSchema)
