const express = require("express");
const mongoose = require("mongoose");
const jobRouter = require("./route/job.route")
const app = express();

app.use(express.json()) // Middleware used for json sync

const dbUrl = 'mongodb+srv://kraniket754:IZjqAUKDp2xJvJ8i@cluster0.blryc.mongodb.net/' 

mongoose
.connect(dbUrl)
.then(()=>console.log('Database connected successfully'))
.catch((err)=>console.log('Error:',err))

app.use("/api/v1/jobs",jobRouter)

app.listen('5000',()=>console.log(`App is running successfully at port 5000`))