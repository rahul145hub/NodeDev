const express = require('express');
const fileUpload = require('express-fileupload'); 
const userRoutes = require('./routes/user.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(fileUpload({
    useTempFiles: true
}))

// Routes
app.use('/user', userRoutes);

app.listen(PORT, ()=>{
    console.log(`server is ruuning on ${PORT}`);
})