import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    firstName:{
       type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id is allready present"],
    },
    password:{
        type:Number,
        required:true
    },
    
});
const user=mongoose.model('user',userSchema);
export default user;