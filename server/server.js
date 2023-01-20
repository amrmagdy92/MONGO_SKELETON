import express from "express"
import { Db, MongoClient } from "mongodb"

const mongoURL = process.env.MONGODB_URI || `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@devcluster.b1dvlrj.mongodb.net/?retryWrites=true&w=majority`

MongoClient.connect(mongoURL).then(() => {
    console.log('Database connection is successful...')
}).catch((err, db) => {
    console.log(`Error connecting to the database:\n${err}`)
    db.close()
})

const app = express()

export default app