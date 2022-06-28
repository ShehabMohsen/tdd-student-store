const express = require("express");
const Store = require("../models/store");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await Store.listItems();
    res.status(200).json({ products });

  } catch (error) {
    next(error);
  }
});

router.get("/:product", async (req, res, next) => {
  
    try {
        // res.status(200).json({ping:"ping pong"})
        const productId = req.params.product;
        const product = await Store.fetchByItem(productId);
    
    if (!product) {
        throw new NotFoundError("No Post Found")
    }
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});
/*
  -pass our object in store model
  -extract user and email so that they can be used to identify the order
    if there's no user and email, then notify the user/programmer
  -extract item id in order to get information related to the item
    check for duplicates
    if either quantity or item is missing, then 400 error (problem with data passed)  
  -use the quantity of the item to compute the total price, but you need to complete the step before 
    multiply item prices by 0.0875
  -put it together and write it to the file
  -send back a response with the form `{"purchase": purchase}`
*/

router.post("/", async (req, res, next)=>{
  try{
    const order = req.body
    const newOrder = await Store.createPurchase(order)
    res.status(201).json({newOrder})
  }
  catch(error){
    next(error)
  }
})

module.exports = router;
