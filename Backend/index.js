const express = require("express")
const { connection } = require("./config/db")
const { authMiddleware } = require("./Middlewaree/authentication")
const { noteRouter } = require("./userRoute/notesRoute")
const { userRoute } = require("./userRoute/userRoute")
const app = express()
const cors = require("cors")
app.use(cors({ origin: "*" }))
app.use(express.json())
//................................................................
app.use("/user", userRoute)
app.use(authMiddleware)
app.use("/notes", noteRouter)

app.listen(8080, async () => {
    try {
        await connection
        console.log("DB is connected")

    } catch (error) {
        console.log({ 'error': "something went wrong" })
    }
    console.log("run the server at 8080")
})

