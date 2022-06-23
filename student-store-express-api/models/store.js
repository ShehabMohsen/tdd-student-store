const {storage} = require("../data/storage") 
// import {storage} from "../data/storage"
// const db = require("../data/db")


class Store{
    // create functions to access data from the data folder->storage.js
    // this data could be a product or a list of products
    static listItems(){
        const response = storage.get("products").value()
        // const response = Storage.get("products").orderBy("postedAt", "desc");
        return response;
    }

    static fetchByItem(){
        const response = storage.get()
    }

}

module.exports = Store