import user from '../model/User.js'

export const addUser=async (request,response)=>{
    try{
     let exist=await user.findOne({email:request.body.email});
      if(exist){
       response.status(200).json('user already exists');
       return;
       }
     const newUser=new user(request.body);
     await newUser.save();
     response.status(201).json(newUser);
    }catch(error){
      response.status(400).json(error.message);
    }
 }
 export const getUser=async (req,res)=>{
    try{
      const { email,password } = req.body;
      const result = await user.find({email});
        res.status(201).json(result);
      }catch(error){
      res.status(400).json(error.message);
      }
 }