import express, { Router } from "express";
import user from './model/User.js';
import Connection from './database/db.js';
import route from "./Routes/Routes.js";
const app=express();
const port=process.env.port||8000
Connection();
app.use(express.json());
app.listen(port,()=>{ console.log(`connection is setup at ${port}`); })

app.use('/',route);


