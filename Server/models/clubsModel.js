import mongoose, { Schema, model } from 'mongoose'

const createClub = new Schema(
    {
        clubId :{
          type: String ,
          required: [true,'Club ID is required']
        },
        clubName: {
            type: String,
            required: [true, 'Club name is required'],
            minlength: [4, 'Title must be atleast 8 characters'],
            maxlength: [50, 'Title cannot be more than 50 characters'],
            trim: true,
          },
          description: {
            type: String,
            required: [true, 'Description is required'],
            minlength: [10, 'Description must be atleast 10 characters long'],
          },
          
          thumbnail: {
            public_id: {
              type: String,
            },
            secure_url: {
              type: String,
            },
          },
          numberOfEvents: {
            type: Number,
            default: 0,
          },
          // adminID:{
          //   type:String,
          //   required: [true,'admin id is required']
          // },
          eventId:{
            type:String,
          }
          
        },
        {
          timestamps: true,
        }
    
   
)

const Club = model('Club',createClub);
export default Club;