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
	category: {				
		type: String,
		trim: true,
	},
	language: {
		type: String,
		trim: true,
	},
	state: {		//Zustand des Buches
		type: String,
		trim: true,
	},

	//User ID, kann momentan nur manuell eingetragen werden 
	owner: {			
		type: String,
		required: 'Besitzer des Buches fehlt'		
	},
	status: {	//privat, bereit zum Verleihen, verliehen	
		type: String,
		required: 'Status des Buches fehlt',	
	},
	created: {
        type: Date,
        default: Date.now
    },
    updated: Date
})

export default mongoose.model('Book', BookSchema)