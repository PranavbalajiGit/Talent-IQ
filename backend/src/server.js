import express from "express"
import { ENV } from "./lib/env.js"

const app = express()



app.get("/" , (req , res) => {
    res.status(200).json({msg : "Success from API"})
})

if(ENV.NODE_ENV == "production") {
    app.use(express.static(path.join(__dirname , "../frontend/dist")));

    app.get("/{*any}" , (req,res) => {
        res.sendFile(path.join(__dirname , "../frontend" , "dist" , "index.html"));
    });
}

app.listen(ENV.PORT , () => console.log("Server is running on port" , ENV.PORT))

