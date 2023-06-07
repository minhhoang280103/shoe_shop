"use strict";
const mongoose = require("mongoose");
/** @class staff
 * @description
 */
const Product = mongoose.Schema(
  {
    masp: { type: Number },
    tensp: { type: String },
    giasp: { type: Number },
    avatar: { type: String },
  },
  { versionKey: false, timestamps: true }
);

/**@memberOf Staff*/
Product.statics.objectId = function (id) {
  return mongoose.Types.ObjectId(id);
};

module.exports = {
  Product: mongoose.model("product", Product),
};
