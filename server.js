const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

class Server{
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 5000;
        this.middlewares();
        this.routes();
        mongoose.connect('mongodb://localhost:27017/test');
        mongoose.Promise = global.Promise;
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use("/api/estudiantes/",require("./routes/estudiantes.routes"));
        this.app.get("*",(req,res)=>{
            res.sendFile(path.join(__dirname,"public","index.html"));
        });
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`running in port ${this.port}`)
        });
    }

}

module.exports = Server;