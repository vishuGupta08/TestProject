const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const surveyorSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    organization: {
        type: String,
        required: true,
    }

})

surveyorSchema.plugin(passportLocalMongoose) // this will add a username and password to our Schema automatically

const Surveyor = mongoose.model('Surveyor', surveyorSchema)
module.exports = Surveyor;
