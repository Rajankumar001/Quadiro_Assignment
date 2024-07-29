const express = require('express');
const router=express.Router();
const {User_register,User_login}=require('../controller/authcontroller')





router.post('/register',User_register);
router.post('/login',User_login)




module.exports=router;
