import AppError from "../utils/errorUtil.js";
import event from "../models/eventModel.js";
import Club from "../models/clubsModel.js";


const createEvent = async (req,res,next) => {
    const {eventId,clubId,eventName,description} = req.body
    
    try {
        if(!eventId || !clubId || !eventName || !description){
            return next(new AppError('All fields are required',500))
        }

        let ifEventExists = await event.findOne({eventId})
        if(ifEventExists){
            return next(new AppError('Event with given id already exists, try another id',500))
        }

        const newEvent = await event.create({
            eventId,clubId,eventName,description
        })

        if(!newEvent){
            return next(new AppError('Error in creating Event !',500))
        }

        
        await newEvent.save()

        let club = await Club.findOne({clubId})
        // console.log(`CLUB -> ${club}`);
        club.eventId.push(eventId) 
        // console.log(`CLUB -> ${club}`);

        await club.save()

        res.status(200).json({
            success:true,
            message: 'Event created successfully',
            newEvent
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const removeEvent = async (req,res,next) =>{
    try {
        const {eventId} = req.body

        if(!eventId){
            return next(new AppError('EventID is required',500))
        }

        const eventToBeDeleted = await event.findOne({eventId})
        if(!eventToBeDeleted){
            return next(new AppError('Event not found !',500))
        }
        
        const eventInClub = await Club.findOne({eventId})
        

        const index = eventInClub.eventId.indexOf(eventId);
        console.log(`Index-> ${index}`);

        eventInClub.eventId.splice(index,1) ;

        await eventInClub.save()
        await event.deleteOne({eventId})

       

        res.status(200).json({
            success: true ,
            message: "Event deleted successfully !"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
    
}

export {createEvent,removeEvent}