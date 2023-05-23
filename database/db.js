import mongoose from 'mongoose'

const Connection=async()=>{
   const URL="mongodb://localhost:27017/hack";
    try{
       await mongoose.connect(URL,{useNewUrlParser:true,
         useUnifiedTopology:true
      });
       console.log("database connected successfully");
    }catch(error){
       console.log("database connection error",error.message);
    }
}
export default Connection;


