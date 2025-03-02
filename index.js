const express = require("express");
const mongoose = require("mongoose");
const jobRouter = require("./route/job.route")
const app = express();

app.use(express.json()) // Middleware used for json sync

const dbUrl = 'mongodb://127.0.0.1:27017/jobsApp' 

mongoose
.connect(dbUrl)
.then(()=>console.log('Database connected successfully'))
.catch((err)=>console.log('Error:',err))

app.use("/api/v1/jobs",jobRouter)

app.listen('5000',()=>console.log(`App is running successfully at port 5000`))