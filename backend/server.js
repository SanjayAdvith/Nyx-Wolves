import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import User from './models/userModel.js'
import userRoutes from './routes/userRoutes.js'
import photoRoutes from './routes/photoRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'


const app = express()
dotenv.config()
connectDB() // databae connection
app.use(express.json()) // using post man (for JSON data)




// app.post('/users', async (req, res) => {
//     try {
//         const user = User(req.body)
//         const createUser = await user.save()
//         res.status(201).send(createUser)
//         console.log(user)

//     } catch (error) {
//         res.status(400).send(error)
//         console.log('error')
//     }
// })



// //finding data from api
// app.get('/users', async (req, res) => {
//     try {
//         const userresults = await User.find()
//         res.send(userresults)
//     } catch (error) {
//         res.send(error)
//     }
// })



app.use('/users', userRoutes)
app.use('/posts', photoRoutes)
app.use('/upload', uploadRoutes)

// creating static folder so that it can accessable
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
)
