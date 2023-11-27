import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'   
import morgan from 'morgan'
import connectToDB from './config/dbConnection.js'
import userRoute from './routes/userRoutes.js'
import clubRouter from './routes/clubRoutes.js'
import errorMiddleware from './middleware/errorMiddleware.js'
import companyRoutes from './routes/comapnyRoutes.js'


const app = express()



// CONNECTING WITH DB
connectToDB()



//  MIDDLEWARE
app.use(cookieParser())

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    credentials:true 
}))
app.use(morgan('dev'))



// ROUTES
app.use('/ping',(req,res)=>{
    res.status(200)
    res.send('pong')       // for testing purpose
})

app.use('/user',userRoute)
app.use('/clubs',clubRouter)
app.use('/company',companyRoutes)
// app.use('/api/v1/payments',paymentRoute)

app.all('*',(req,res)=>{    // if somebody enters url other than any route defined here 
    res.status(404).send(`Oops ! Page 404 not found !`)
})

// single middleware that can handle all the errors 
app.use(errorMiddleware)    





export default  app