const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/shoppingItemsdb")
.then(() => console.log("MongoDB connnected"))
.catch((err) => console.log("Mongo Error", err));

const itemSchema = new mongoose.Schema({
    ItemsDataTitle:[],
    ItemsDataContent:[]
})
const collection = mongoose.model("collection", itemSchema);

module.exports = collection;
