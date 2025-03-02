const mongoose = require("mongoose");
const jobSchemaDetails = {
    title: {
        type:String,
     },
    description:{
        type:String,
    },
    location:{
        type:String,
    },
    skills:{
        type:[String], //for multiple skills
    },
    minimumExperience:{
        type:Number,
    },
    salary:{
        type:Number,
    },
    isVacant:{
        type:Boolean,
    }

}

const jobSchema = mongoose.Schema(jobSchemaDetails);

const jobModel = mongoose.model("jobs",jobSchema);

module.exports = jobModel;