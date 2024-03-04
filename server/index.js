const express = require('express');
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 3000;
const connectDb = require("./config/connectDb");

app.use(express.json());
app.use(cors());
connectDb();

app.use("/api",require("./routs/rout"));


app.get('/', (req,res)=>{
    res.send({status : 'true', setUp : 'ok'})
})

// error handler any place

app.get("*", function (req, res) {
    res.send({
        status: false,
        message: "Get product Something wents wrong",
        error: "not found"
    })
});

app.listen(port, () => {
    console.log(`your server is : http://localhost:${port}`);
})