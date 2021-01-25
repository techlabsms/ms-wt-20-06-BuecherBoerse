import User from '../models/user.model'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/config'

const signin = async (req, res) => {
    try {
        let user = await User.findOne({
            "email": req.body.email
        })
        if (!user)
            return res.status('401').json({
                error: "User not found"
            })

        if (!user.authenticate(req.body.password)) {
            return res.status('401').send({
                error: "Email and password don't match."
            })
        }

        // JSON Web Tokens
        const token = jwt.sign({
            _id: user._id
        }, config.jwtSecret)

        res.cookie("t", token, {
            expire: new Date() + 9999
        })

        return res.json({
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })

    } catch (err) {

        return res.status('401').json({
            error: "Could not sign in"
        })

    }
}

const signout = (req, res) => {
    res.clearCookie("t")
    return res.status('200').json({
        message: "signed out"
    })
}

// Beschuetze Anfrage mit JWT
// Abfrage ob Benutzer angemeldet ist
// Wird in den Routen benutzt
const requireSignin = expressJwt({
    secret: config.jwtSecret,
    userProperty: 'auth'
})

// Darf der Benutzer die Aktion ausfuehren?
// Sein eigenes Profil bearbeiten ist in Ordnung
const hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id == req.auth._id
    if (!(authorized)) {
        return res.status('403').json({
            error: "User is not authorized"
        })
    }
    next()
}

//Dürfen BenutzerInnen etwas an einem Buch ändern?
const hasAuthorizationForBook = (req, res, next) => {
    const authorized = req.profile.owner == req.auth._id
    if (!(authorized)) {
        return res.status('403').json({
            error: "User " + req.auth._id + " is not authorized"
        })
    }
    next()
} 

export default { signin, signout, requireSignin, hasAuthorization, hasAuthorizationForBook }