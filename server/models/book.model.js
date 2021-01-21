import mongoose from 'mongoose'
import crypto from 'crypto'

const BookSchema = new mongoose.Schema ({
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
	category: {				//am besten aus einer liste auswählen(frondend)
		type: String,
		trim: true,
	},
	//User ID, kann momentan nur manuell eingetragen werden (Versuch: book.controller.js Zeile 6)
	owner: {			
		type: String,
		required: 'Besitzer des Buches fehlt'
	},
	status: {	//privat, bereit zum Verleihen, verliehen

	},
	created: {
        type: Date,
        default: Date.now
    },
    updated: Date
})

export default mongoose.model('Book', BookSchema)