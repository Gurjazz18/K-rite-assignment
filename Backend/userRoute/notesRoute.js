const express=require("express")

const noteRouter=express.Router()

const {NoteModel}=require("../model/Note.model")

 // get the all element that in the notes collections

noteRouter.get("/",async(req,res)=>{
        try {
            let note=await NoteModel.find()
             res.send(note)
        } catch (error) {
            res.send("something went wrong")
        }
    })

// add the data in the notes collection 

noteRouter.post("/create",async(req,res)=>{
    const payload=req.body
    try {

        const note=new NoteModel(payload)
        await note.save()
        res.send("add All the notes")
    } catch (error) {
        console.log(error)
        res.send({"msg":"something went wrong"})
        
    }
   
})

// edit the data in the notes colection 

 noteRouter.patch("/update/:id",async(req,res)=>{
    const payload=req.body;
    const id=req.params.id;
    const note= await NoteModel.findOne({_id:id})
    console.log(note)
    const userID_in_notes=note.userID
    const userID_in_making_req=req.body.userID
    //console.log(userID_in_notes)
     try {
          if(userID_in_making_req!==userID_in_notes){
            res.send({"msg":"You are not authorised person"})

          }else{
            await NoteModel.findByIdAndUpdate({_id:id},payload)
            res.send("update the item All the notes")
           }
     }catch (error) {
            console.log(error)
            res.send({"msg":"some thing went wrong"})
        }
     })
 // delete the particular element that exist in the notes
 
noteRouter.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id;
    const note=await NoteModel.findOne({_id:id})
    const userID_in_notes=note.userID
    const userID_in_makingreq=req.body.userID
     try {
          if(userID_in_makingreq!==userID_in_notes){
            res.send({"msg":"You are not authorised person"})

          }else{
            await NoteModel.findByIdAndDelete({_id:id})
            res.send("Delated particular the notes")
           }

     }catch (error) {
            console.log(error)
            res.send({"msg":"some thing went wrong"})
        
        }
   
})



module.exports={
    noteRouter
}