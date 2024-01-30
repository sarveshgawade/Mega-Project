import Club from "../models/clubsModel.js";
import Course from "../models/clubsModel.js"
import AppError from "../utils/errorUtil.js";
import cloudinary from 'cloudinary'


const getAllClubs = async function(req,res,next){
    const club = await Club.find({});

    res.status(200).json({
        success:true,
        message: "All Clubs.",
        club
    });

}

const createClub = async(req,res,next)=>{
    const{clubName,description,clubId} = req.body;
    try {
      if(!clubName || !description  || !clubId){
        return next(new AppError('All fields are required',400))
      }

      const ifClubExists = await Club.findOne({clubId})
      if(ifClubExists){
        return next(new AppError('Club already exists with given ClubID,try another ClubId',500))
      }

      const club = await Club.create({
        clubName,
        clubId,
        description,
        thumbnail:{
         public_id:'Dummy',
         secure_url:'Dummy'
        },
       
      })

      if(!club){
        return next(
            new AppError('Club colud not created ,please try again'),500
        )
      }
      if(req.file){
        const result = await cloudinary.v2.uploader.upload(req.file.path,{
            folder:'lms'
        })
      
      if(result){
        club.thumbnail.public_id = result.public_id;
        club.thumbnail.secure_url = result.secure_url;
      }
      //  fs.rm(`../uploads/${req.file.filename}`)
    }

    await club.save();
    res.status(200).json({
        success : true,
        message:'Club created Successfully',
        club,
    });

      
    } 

    catch (error) {
      res.status(400).json({
        success:false,
        message:error.message
      })
    }
   
    }

    const removeClub = async(req,res,next)=>{
        try {
          const {id} = req.params;
          const course = await Course.findById(id);
          if(!course){
            return next(new AppError('Course with given id does not exist',500))
          }
      
          await Course.findByIdAndDelete(id);
      
          res.status(200).json({
            success:true,
            message:'course deleted Successfully'
          })
        } catch (error) {
          return next(new AppError(error.message,500))
        }
      }

      export {
        getAllClubs,
     
        createClub,
        
        removeClub,
        
    }