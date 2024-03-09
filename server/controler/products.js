const productModel = require("../model/productModel");

const filterProduct = async (req, res) => {

    const obj = req.body;

    const keyArray = Object.keys(obj);
    const filterObj = {};

    for (let i = 0; i < keyArray.length; i++) {
        if (keyArray[i] == 'category') {
            if (obj.category !== 'all') {
                filterObj.category = obj.category
            }
        }
        else if (keyArray[i] == 'price') {
            filterObj.price = { $gte: obj.price[0], $lte: obj.price[1] }
        }
        else if (keyArray[i] == 'rating') {
            filterObj.rating = { $gte: obj.rating }
        }
        else if (keyArray[i] == 'stock') {
            if (obj.stock == true) {
                filterObj.stock = { $gte: 1 }
            }
        }
    }

    const datas = await productModel.find(filterObj).skip((parseInt(req.body.activePage) - 1) * parseInt(req.body.limit)).limit(parseInt(req.body.limit))
    res.send(datas)
}

const productLength = async (req, res) => {
    const obj = req.body;

    const keyArray = Object.keys(obj);
    const filterObj = {};

    for (let i = 0; i < keyArray.length; i++) {
        if (keyArray[i] == 'category') {
            if (obj.category !== 'all') {
                filterObj.category = obj.category
            }
        }
        else if (keyArray[i] == 'price') {
            filterObj.price = { $gte: obj.price[1], $lte: obj.price[0] }
        }
        else if (keyArray[i] == 'rating') {
            filterObj.rating = { $gte: obj.rating }
        }
        else if (keyArray[i] == 'stock') {
            if (obj.stock == true) {
                filterObj.stock = { $gte: 1 }
            }
        }
    }

    const datas = await productModel.countDocuments(filterObj);
    res.send({length : datas})
}


const productDetails = async(req, res)=>{
    const id = req.params.id;
    const data = await productModel.findOne({id})
    res.send(data)
}

module.exports = {
    filterProduct,
    productLength,
    productDetails
}

