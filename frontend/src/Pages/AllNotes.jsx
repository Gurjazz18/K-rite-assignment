import React, { useEffect, useState } from 'react'

const AllNotes = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:8080/notes`,{
       
        headers:{
         
          "Authorization":localStorage.getItem("token")
          }
        
     
       }).then((res)=>res.json()).then((res)=>{
        console.log(res)
        setData(res)})

    },[])

    // delete functionality

    const DeleteNotes=(id)=>{
        fetch(`http://localhost:8080/notes/delete/${id}`,{
            method:"DELETE",
       
            headers:{
            
            "Authorization":localStorage.getItem("token")
            }
        
     
       })

        
    }
    
   
  return (
    <div style={{textAlign:"center"}}>
    <h1>All Notes</h1>
    {
         data&&data.map((ele)=>(
        <div key={ele._id}  style={{border:"1px solid black",textAlign:"center"}}>
           <p>Auther:{ele.author}</p> 
           <p> Category:{ele.category}</p>
           <p> Note:{ele.note}</p>
           <button onClick={()=>DeleteNotes(ele._id)}>DELETE</button>
          
        </div>
           
        ))
    }
    
      
    </div>
  )
}

export default AllNotes
