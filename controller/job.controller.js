const jobModel = require("../model/job.model")




const jobCreate = async(req,res,next)=>{
    try{
    const jobObject = {
        ...req.body,
        isVacant:true
    }  
    //Create JOB  
    const response = await jobModel.create(jobObject) // creates a document in MongoDB 
    console.log(response);
    res.json({
        success:true,
        message:`Job created successfully ${response._id}`
    })
}catch(err){
    next(err);
}
}

const jobList = (req,res)=>{
    res.json({
        success:true,
        message:'Job list fetched successfully'
    })
}

const jobEdit = (req,res)=>{
    res.json({
        success:true,
        message:'Job edited successfully'
    })
}
const jobDelete = (req,res)=>{
    res.json({
        success:true,
        message:'Job deleted successfully'
    })
}

const jobController = {
     jobCreate,
     jobDelete,
     jobEdit,
     jobList
}

module.exports = jobController;