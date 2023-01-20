import dotenv from "dotenv"
import express from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import compress from "compression"
import cors from "cors"
import helmet from "helmet"
import mongoose from "mongoose"
import config from "../config/config"

dotenv.config()

mongoose.Promise = global.Promise
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log(`Database connected successfully @ ${config.mongoURI}`)
})

mongoose.connection.on('error', (err) => {
    throw new Error(`Unable to connect to database: ${config.mongoURI}\n${err}`)
})

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

export default app