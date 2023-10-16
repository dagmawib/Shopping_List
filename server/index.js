const express = require("express");
const bodyParser = require("body-parser");
const collection = require("./mongo");


const app = express();

app.use(bodyParser.json());


// var Items = [];

// app.get("/api",function(req,res){
//     // res.json({message:""})
// });

app.post("/api/items", async(req,res) =>{
    const ItemsDataTitle = req.body.title;
    const ItemsDataContent = req.body.content;

    const data={
        ItemsDataTitle:ItemsDataTitle,
        ItemsDataContent:ItemsDataContent
    }

    await collection.create([data]);
    // Items.push(items);
    // console.log(Items);
   
})

app.listen(5000, function(req,res){
    console.log("Server started on port 5000");
})