import mongoose from "mongoose";
const loginSchema=new mongoose.Schema({
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
const login=mongoose.model('user',loginSchema);
export default login;