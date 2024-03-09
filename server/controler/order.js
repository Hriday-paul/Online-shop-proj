const orders = require("../model/orderModel");

const uploadOrder = async (req, res) => {
    try {
        const orderData = await {
            ...req.body,
            paymentMethod: 'Cash on delivery',
            isPending: true,
            completePay: false,
            date : Date.now()
        }
        const result = await orders.insertMany([orderData]);
        res.send(result);
    } catch (err) {
        res.status(400).send({message : err.message})
    }
    
}

module.exports = {
    uploadOrder
}