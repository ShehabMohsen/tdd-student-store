const {storage} = require("../data/storage") 
const { BadRequestError } = require("../utils/errors");
const TAX_MULTIPLIER = 1.0875
// const db = require("../data/db")


class Store{

    
    // create functions to access data from the data folder->storage.js
    // this data could be a product or a list of products
    static async listItems(){
        const response = storage.get("products").value()
        // const response = Storage.get("products").orderBy("postedAt", "desc");
        return response;
    }
    
    static async fetchByItem(id){
        // const post = storage.get("products").find({id}).value()
        // const response = storage.get("products")
        const response = storage.db.get("products").find({id: Number(id)}).value();
        return response
    }

    static async createPurchase(purchase){
        // of no user name or email provided
        if (!purchase.user.email || !purchase.user.name){
            throw new BadRequestError("no username or email provided");
        }
        
        //date the order was created
        const postedAt = new Date().toISOString()
        let user = purchase.user
        let email = purchase.user.email
        let name = purchase.user.name
        let subTotal = 0;
        let id = storage.get("purchases").value().length;    
        
        const products = await this.listItems()
        let order = purchase.shoppingCart
        
        // if there are duplicate items in the cart
        let idArray = order.map(function(element){ return element.itemId});
        let isDuplicate = idArray.some(function(element, index){ 
            return idArray.indexOf(element) != index
        });
        if (isDuplicate) throw new BadRequestError("all items must have unique id")

        
        const receipt = []
        
        //looping through orders in order to get item price
        order.map((element)=>{
            if (!element.itemId || !element.quantity)
                throw new BadRequestError("no item id or quantity provided")
            
            //returns the element that matches the itemId attribute inside 'order'
            let product = products.find((e)=>{
                return (e.id == element.itemId)
            })
            if (!product) throw new BadRequestError(`item with ${element.itemId} not found`)


            let tempObj = {
                id:product.id,
                name: product.name,
                price: product.price,
                quantity: element.quantity,
                totalPrice: product.price * element.quantity
            }
            receipt.push(tempObj)

            subTotal+= (product.price * element.quantity)

        })
        subTotal = (subTotal*TAX_MULTIPLIER).toFixed(2);
        const newPurchase = {id, name, email, order, subTotal, postedAt, receipt}
        storage.get("purchases").push(newPurchase).write()
        return newPurchase
    }
}

module.exports = Store