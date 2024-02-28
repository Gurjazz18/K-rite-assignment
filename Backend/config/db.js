const mongoose=require("mongoose")

const connection =mongoose.connect("mongodb+srv://Gurjazz:rajput@cluster0.dcwrm.mongodb.net/kritedb?retryWrites=true&w=majority")
module.exports={
    connection
  
}