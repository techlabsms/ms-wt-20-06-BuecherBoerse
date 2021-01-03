import express from 'express'
import path from 'path'

// development
import devBundle from './devbundle' //dev
const app = express()
devBundle.compile(app) //dev

// Leite Dateien aus dem dist folder weiter
const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

// root rendering
import template from './../template'
app.get('/', (req, res) => {
    res.status(200).send(template())
})

// start server
let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', port)
})

// datenbank mongodb