const express = require('express');
const router=express.Router();
const auth =require('../middleware/connect')
const {AddItem,UpdateItem,DeleteItem}=require('../controller/Admin_usercontroller')





router.post('/AddItem',auth,AddItem);
router.put('/UpdateItem/:id',auth,UpdateItem)
router.delete('/DeleteItem/:id',auth,DeleteItem)




module.exports=router;