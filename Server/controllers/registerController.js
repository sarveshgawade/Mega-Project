import AppError from "../utils/errorUtil.js";
import register from '../models/registrationModel.js';
// import Event from '../models'

const registerToEvent = async (req,res,next) => {
    try {
        const {prn,year,department} = req.body
        
        if(!prn || !year || !department){
            return next(new AppError(500,'Every field is required'))
        }

        const alreadyRegisteredPRN = await register.findOne({prn}) 

        if(alreadyRegisteredPRN){
            return next(new AppError(500,'Already registered with given PRN'))
        }

        const newRegistration = await register.create({
            prn,year,department
        })

        newRegistration.isRegistered = true
        newRegistration.fullName = req.user.fullName
        newRegistration.email = req.user.email

        if(!newRegistration){
            return next(new AppError(500,'Error in registering'))
        }

        await newRegistration.save()

        res.status(200).json({
            success: true,
            message: "registered sucessfully !",
            newRegistration
        })
    } catch (error) {
        res.status(500).json({
            success: false ,
            message: error.message
        })
    }
}

const unregisterFromEvent = async (req,res,next) => {
    try {
        // const ID = req.user.id
        // console.log(ID);

        // // if(!ID){
        // //     return next(new AppError(500,'PRN is required'))
        // // }

        // const isDeleted = await register.findByIdAndDelete(ID)

        
        // if(!isDeleted){
        //     return next(new AppError(500,'Cannot be unregistered !'))
        // }

        // res.status(200).json({
        //     success: true,
        //     message: 'Unregistered from event'
        // })
    } catch (error) {
        res.status(500).json({
            success: false ,
            message: error.message
        })
    }
}

export  {registerToEvent,unregisterFromEvent}