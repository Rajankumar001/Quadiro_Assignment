const express = require('express');
const router=express.Router();
const auth =require('../middleware/connect')
const {AddItem,UpdateItem,DeleteItem,getAllItem,comment}=require('../controller/Admin_usercontroller')


// Admin
router.post('/AddItem',auth,AddItem);
router.put('/UpdateItem/:id',auth,UpdateItem)
router.delete('/DeleteItem/:id',auth,DeleteItem)
// User_section
router.get('/AllItem',getAllItem)
router.post('/Item/comment/:id',auth,comment)



module.exports=router;