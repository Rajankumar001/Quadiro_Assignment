const express = require('express');
const bodyParser = require('body-parser');
const connection=require('./config/connection');
const authRoutes=require('./routes/auth');
const itemRoutes=require('./routes/Admin_user');
const app = express();
const cors =require('cors');
// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Middleware to parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send("hi i am there")
})
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// Routes
// const itemRoutes = require('./routes/item');
app.use('/api/auth', authRoutes);
 app.use('/api/admin', itemRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
