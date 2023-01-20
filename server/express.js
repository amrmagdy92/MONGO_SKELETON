import dotenv from "dotenv"
import express from "express"
import { MongoClient } from "mongodb"
import config from "../config/config"

dotenv.config()

MongoClient.connect(config.mongoURI).then(() => {
    console.log('Database connection is successful...')
}).catch((err) => {
    console.log(`Error connecting to the database:\n${err}`)
})

const app = express()

app.get('/', (req, res) => {res.send("hello world!!!")})

export default app