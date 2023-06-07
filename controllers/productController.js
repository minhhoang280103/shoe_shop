"use strict";
const Product = require("../models/product").Product;

/** @class ProductController */
function ProductController() {
  const SELF = {};
  return {
    getList: (req, res) => {
        try {
          return Product.find()
            .then((rs) => {
              console.log(rs);
              res.render("pages/indexAdmin", {
                products: rs,
                urlUploaded: null,
              });
            })
            .catch((error) => {
              res.send({ s: 400, msg: error });
            });
        } catch (error) {
          console.log(error);
        }
      },
      getListDB: () => {
        try {
          return new Promise((resolve, reject) => {
            Staff.find()
              .then((rs) => {
                resolve(rs);
              })
              .catch((err) => {
                console.log(err);
                reject(err);
              });
          });
        } catch (error) {
          console.log(error);
        }
      },
      addProduct: (req, res) => {
        try {
          let data = req.body;
          console.log(data);
          return Product.create(data)
            .then((rs) => {
              console.log(rs);
              return res.redirect("/product/list");
            })
            .catch((err) => {
              res.send({ s: 400, msg: err });
            });
        } catch (error) {
          console.log(error);
        }
      },
      getProductDetail: async (req, res) => {
        try {
          let productId = req.params?.id;
          let productInfo = await Staff.findById(productId);
          if (!productInfo) {
            return res.json({ s: 404, msg: "Staff not found" });
          }
          return res.json({ s: 200, data: productInfo });
        } catch (error) {
          console.log(error);
        }
      },
      editProduct: async (req, res)=>{
        try{
          let data=req.body;
          let productInfo=await Product.findById(data?._id);
          if(!productInfo){
            return res.json({ s: 404, msg: "Product not found" });
          }
          delete data._id;
          return Product.findByIdAndUpdate(productInfo._id, data)
          .then((rs) => {
            if (rs) {
              res.redirect("/product/list");
            }
          })
          .catch((err) => {
            console.log(err);
          });
        } catch(error){
          console.log(error);
        }
      },
      DeleteProduct: async (req, res) => {
        try {
          const productId = req.params?.id;
          const productInfo = await Product.findById(productId);
          if (!productInfo) {
            return res.json({ s: 404, msg: "Product not found" });
          }
          Product.deleteOne({ _id: productId })
            .then((rs) => {
              console.log(rs);
              return res.json({ s: 200, msg: "Delete Product success!!" });
            })
            .catch((e) => {
              console.log(`DeleteProduct - fail: ${e}`);
              return rs.json({ s: 400, msg: "Delete Product fail" });
            });
        } catch (error) {
          console.log(error);
        }
      },
    }
}
    module.exports = new ProductController();