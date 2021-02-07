import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'
import Template from './../template'
import { Server } from "socket.io";

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

mongoose.connection.on('connected', () => {
    console.info(`connected to database: ${config.mongoUri}`)
})


const server = app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})

app.get('/', (req, res) => {
    res.status(200).send(Template())
})

const io = Server.listen(server)

// Assign socket object to every request
app.use(function (req, res, next) {
    req.io = io;
    next();
});