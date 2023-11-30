import mongoose, { model } from "mongoose";

const registrationSchema = new mongoose.Schema({
    eventId:{
        type: String
    },
    isRegistered: {
        type: Boolean,
        enum: ['true','false'],
        default: 'false'
    },
    prn:{
        type:String,
        maxLength: [10,'Length should be of 10 characters'],
        minLength: [10,'Length should be of 10 characters'],
        required:true
    },
    department:{
        type:String,
        required: true
    },
    year:{
        type:String,
        required: true
    },
    fullName:{
        type:'String',
    },
    email:{
        type: String
    }

},{timestamps:true})

const registration = model('Registration',registrationSchema)

export default registration