import http from "http"
import app from "./express"

http.createServer(app).listen(3000, (err) => {
    if (err) console.log(err)
    console.info('Server started on port 3000')
})