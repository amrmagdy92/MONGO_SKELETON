import dotEnv from "dotenv"
import express from "express"
import { MongoClient } from "mongodb"

dotEnv.config()

const mongoURL = process.env.MONGODB_URI || `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@devcluster.b1dvlrj.mongodb.net/?retryWrites=true&w=majority`

MongoClient.connect(mongoURL).then(() => {
    console.log('Database connection is successful...')
}).catch((err, db) => {
    console.log(`Error connecting to the database:\n${err}`)
    // db.close()
})

const app = express()

app.listen(3000, (err) => {
    if (err) console.log(err)
    console.info('Server started on port 3000')
})

app.get('/', (req, res) => {res.send("hello world!!!")})

export default app