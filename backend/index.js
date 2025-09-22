import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import noteRoutes from './routes/note.route.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 4002

//Database connection
try {
    mongoose.connect(process.env.MONGO_URL)
    console.log("Database connected to MongoDB")
} catch (error) {
    console.log("Database connection failed",error)
}

//Routing Middlewares
app.use(express.json())
app.use(cors())
app.use('/api/v1/noteapp', noteRoutes)

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
