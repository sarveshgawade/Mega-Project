import mongoose, { model } from "mongoose";

const eventSchema = new mongoose.Schema({
    eventId:{
        type: String,
        required : [true,'EventId is required'],
    },
    clubId:{
        type: String,
        required : [true,'Club is required']
    },
    eventName:{
        type: String,
        required : [true,'EventName is required']
    },
    description:{
        type: String,
        required : [true,'Description is required'],
        minLength: [5,'minLength should be atleast 5 characters']
    }
    
},{timestamps:true})

const event = model('Event',eventSchema)

export default event