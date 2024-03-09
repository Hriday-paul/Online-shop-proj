const userCart = require("../model/userCart");

const addedCart = async (req, res) => {
    const options = { upsert: true };
    const updateDoc = {
        $set: req.body
    };
    const result = await userCart.updateOne({ id: req.body.id }, updateDoc, options);
    res.send(result);
}

const getCartProduct = async (req, res) => {
    const { email } = req.params;
    const carts = await userCart.find({ email });
    res.send(carts);
}

const deleteCart = async (req, res) => {
    const id = req.params.id;
    const result = await userCart.deleteOne({ id });
    res.send(result);
}

const deleteManyCart = async (req, res) => {
    try {
        const email = req.params.email;
        const result = await userCart.deleteMany({email});
        res.send(result);
    }
    catch (err) {
        res.status(400).send({message : err.message})
    }
}

module.exports = {
    addedCart,
    getCartProduct,
    deleteCart,
    deleteManyCart
}