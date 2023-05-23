import express from "express";
import {addUser,getUser} from "../controller/userController.js";
const route=express.Router();

route.post('/add',addUser);
route.get('/login',getUser);

export default route;