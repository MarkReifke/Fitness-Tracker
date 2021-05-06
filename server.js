const express= require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const PORT = process.env.PORT || 8080;

const app = express();
app.use (logger("dev")); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(require ("./routes"));
mongoose.connect(process.env.MONGODB_URI || 'https://fitness-tracke.herokuapp.com/',
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, 
    useFindAndModify:false,
}
);
mongoose.connection.once("open", ()=>{
    app.listen(PORT, ()=> {
        console.log ("server is running")
    })
}) 