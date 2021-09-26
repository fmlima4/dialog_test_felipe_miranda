import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema"
import cors from "cors";
import { createConnection } from "typeorm";
import {Users} from "./Entities/Users"
import Data from "../data.js"
const fs = require('fs');

const main = async () => {
    // await createConnection({
    //     type:"mysql",
    //     database: "graphql",
    //     username: "root",
    //     password: "",
    //     logging: true,
    //     synchronize: false,
    //     entities: [Users]
    // }) 

    const getActualRequestDurationInMilliseconds = start => {
        const NS_PER_SEC = 1e9; // convert to nanoseconds
        const NS_TO_MS = 1e6; // convert to milliseconds
        const diff = process.hrtime(start);
        return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
      };

    let demoLogger = (req, res, next) => {
        console.log('aqui')
        let current_datetime = new Date();
        let formatted_date =
            current_datetime.getFullYear() +
            "-" +
            (current_datetime.getMonth() + 1) +
            "-" +
            current_datetime.getDate() +
            " " +
            current_datetime.getHours() +
            ":" +
            current_datetime.getMinutes() +
            ":" +
            current_datetime.getSeconds();
        let method = req.method;
        let url = req.url;
        let status = res.statusCode;
        const start = process.hrtime();
        const durationInMilliseconds = getActualRequestDurationInMilliseconds(start);
        let log = `[${formatted_date}] ${method}:${url} ${status} ${durationInMilliseconds.toLocaleString()} ms`;
        console.log(log);
        fs.appendFile("request_logs.txt", log + "\n", err => {
            if (err) {
              console.log(err);
            }
        });
        next();
    };
        
    const app = express()


    app.use(demoLogger);
    app.use(cors())
    app.use(express.json())
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }))
    
    app.get('/users', function(req,res){
        res.header("Access-Control-Allow-Origin", "*");
        res.send(Data)
    })

    app.listen(4000, () =>{
        console.log("Server subiu na 4000")
    })
};

main().catch((err) => {
    console.log(err);
});