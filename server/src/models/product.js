const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        index: true,
        required: true
    },
    price: Number,
    desc: String,
    imageUrl: String,
    author:mongoose.Schema.Types.ObjectId,

},{timestamp:true,versionKey:false});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
