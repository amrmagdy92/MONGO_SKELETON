import http from "http"
import config from "../config/config"
import app from "./express"

http.createServer(app).listen(config.port, (err) => {
    if (err) console.log(err)
    console.info(`Server started on port ${config.port}`)
})