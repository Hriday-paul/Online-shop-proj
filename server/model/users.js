const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
        },
        password : {
            type: String,
            required: true,
        },
        createdAt : {
            type: String,
          },
    }
);

module.exports = users = mongoose.model("users", userSchema);