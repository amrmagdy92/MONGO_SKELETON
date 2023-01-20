import dotenv from "dotenv"
import express from "express"
import { MongoClient } from "mongodb"

dotenv.config()

const mongoURL = process.env.MONGODB_URI || `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@devcluster.b1dvlrj.mongodb.net/?retryWrites=true&w=majority`

MongoClient.connect(mongoURL).then(() => {
    console.log('Database connection is successful...')
}).catch((err) => {
    console.log(`Error connecting to the database:\n${err}`)
})

const app = express()

app.get('/', (req, res) => {res.send("hello world!!!")})

export default app