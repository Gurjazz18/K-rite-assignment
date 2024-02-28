const mongoose=require("mongoose")

const TaskSchema=mongoose.Schema({
    title:String,
    note:String,
    category:String,
    userID:String
});

const NoteModel=mongoose.model("taskMagement",TaskSchema)

module.exports={
    NoteModel
}