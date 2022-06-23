const express = require("express")
const Store = require("../models/store")
const router = express.Router()


router.get("/", async (req, res, next)=>{
    try {
        const products = await Store.listItems()
        res.status(200).json({products})
    } catch (error){
        next(error)
    }   
})

router.get("/:product", async (req, res, next)=>{
    try {
        const productId = req.params.product

    } catch (error){
        next(error)
    }
})


module.exports = router