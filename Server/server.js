import app from './app.js'
import { config } from 'dotenv';
config()
import cloudinary from 'cloudinary'


const PORT = process.env.PORT || 5010


// cloudinary config         
cloudinary.v2.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

//razorpay config
// export const razorpay = new Razorpay({
//       key_id: process.env.RAZORPAY_KEY_ID ,
//       key_secret:process.env.RAZORPAY_SECRET 
// })

app.listen(PORT, ()=>{

    console.log(`listening at port: ${PORT}`);
})