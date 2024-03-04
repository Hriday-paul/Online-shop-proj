const users = require("../model/users");


const createORUpdateUser = async (req, res) => {
    try {
        const options = { upsert: true };
        const filter = { email :  req.body.email};
        const updateDoc = {
            $set: req.body
          };
        const newUser = await users.updateOne(filter, updateDoc, options);
        res.send({
            status: true,
            message: "creat user Successfully",
        })
    }
    catch (err) {
        res.send({
            status: false,
            message: err.message,
            error: err
        })
    }
}


module.exports = {
    createORUpdateUser
}
