"use strict";
const express = require("express");
const router = express.Router({});
const ProductController = require("../controllers/productController");
const multer = require("multer");



router.get("/product/list", ProductController.getList);
router.post("/product/add", ProductController.addProduct);
router.get("/product/detail/:id", ProductController.getProductDetail);
router.post("/product/edit", ProductController.editProduct);
router.delete("/product/delete/:id", ProductController.DeleteProduct);
module.exports = router;