import express from 'express'; 
import { client } from "@repo/db/client"
import cors from "cors"
const app = express(); 

app.use(express.json()); 
app.use(cors())

app.get('/', (req, res)=>{
    res.send("Hello world")
})

app.post("/signup",async (req, res)=>{
    const username = req.body.username; 
    const password = req.body.password; 
    try{
        const user = await client.user.create({
            data: {
                username: username, 
                password: password
            }
        })
        res.json({
            message: "Signup Sucessfully", 
            id : user.id
        })
    }
    catch(e){
        res.status(400).json({
            message: "Error adding user", 
            error: e
        })
    }
})
app.listen(3001, ()=>{
    console.log("http-server is listening at :3001")
});