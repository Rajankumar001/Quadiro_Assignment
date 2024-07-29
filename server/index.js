const express = require('express');
const bodyParser = require('body-parser');
const connection=require('./config/connection')
const authRoutes=require('./routes/auth');
const itemRoutes=require('./routes/Admin_user')
const app = express();

// Middleware
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send("hi i am there")
})


// Routes
// const itemRoutes = require('./routes/item');
app.use('/api/auth', authRoutes);
 app.use('/api/admin', itemRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
