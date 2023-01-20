import dotenv from "dotenv"
import express from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import compress from "compression"
import cors from "cors"
import helmet from "helmet"
import { MongoClient } from "mongodb"
import config from "../config/config"

dotenv.config()

MongoClient.connect(config.mongoURI).then(() => {
    console.log('Database connection is successful...')
}).catch((err) => {
    console.log(`Error connecting to the database:\n${err}`)
})

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

export default app