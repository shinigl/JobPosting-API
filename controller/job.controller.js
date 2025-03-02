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

//Job Read operation
const jobList = async(req,res,next)=>{
    
   try{
    const id = req.query.id ;
    const minExp = parseInt(req.query.minimumExperience || 0) ;
    const jobsList = await jobModel.find({
        minimumExperience: {
        $gte : minExp
    }
   })
    // const jobsList = await jobModel.findById(id);
    res.json({
        success:true,
        message:'Job list fetched successfully',
        data: jobsList,
    })
} catch(err){
    next(err);
}
}

//Edit Operation
const jobEdit = async(req,res,next)=>{
    try{
     const id = req.query.id ;
     await jobModel.findByIdAndUpdate(id,req.body);
    //  updateOne / updateMany
    const findbyTitle = {
        title: req.query.title
    }
    await jobModel.updateOne(findbyTitle,req.body);
    res.json({
        success:true,
        message:'Job edited successfully'
    })
}catch(err){
    next(err)
}
}

//Delete operation : findByIdAndDelete , deleteOne , deleteMany
const jobDelete = async(req,res,next)=>{

    try{
    const id = req.query.id ;
    await jobModel.findByIdAndDelete(id);
    res.json({
        success:true,
        message:'Job deleted successfully'
    })
} catch(err){
    next(err);
}
}

const jobController = {
     jobCreate,
     jobDelete,
     jobEdit,
     jobList
}

module.exports = jobController;