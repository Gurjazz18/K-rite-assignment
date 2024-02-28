const jwt=require("jsonwebtoken")

const authMiddleware=(req,res,next)=>{
    const token=req.headers.authorization
    // console.log(token)
    if(token){
         const decoded=jwt.verify(token,"masai")
         if(decoded){
            const userID=decoded.userID
            console.log(userID)
            req.body.userID=userID 
            next()
         }else{
            res.send("Please login First")
         }
    }else{
        res.send("Please login First")
    }
}

module.exports={
    authMiddleware
}
