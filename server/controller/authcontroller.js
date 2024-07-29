const bcrypt = require('bcryptjs');
const Usermodel = require('../models/User');
const jwt = require('jsonwebtoken');
const JWT_KEY=process.env.secret_key;
// const JWT_KEY='mysecretkeyismyBook'

const User_register=async(req,res)=>{
    try{
    
        const { username,email,password,role}=req.body;
        if( !username ||!password||!role){
            res.status(500).send({
                success:false,
                message:'Error to get the accurate data',
            })
        }
        const Existing=await Usermodel.findOne({email});
        if(Existing){
            res.status(500).send({
                success:false,
                message:'User is Already registered',
            })
        }
        const user= await Usermodel.create({ username,email,password,role})
        res.status(201).send({
            success:true,
            message:'user`s Registeration successfull...............',
            user
        })
    
      }
      catch(err){
       console.log(err);
       res.status(500).send({
        success:false,
        message:'error in register API'
       })
      }
    
}
const User_login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        if(!email||!password){
            return res.status(500).send({
                success:false,
                message:"please provide the data",
            })
        }
        const user=await Usermodel.findOne({email});
        if(!user){
            return  res.status(401).send({
                success:false,
                message:"user is not found",
            })
        }
        if (!user.password) {
            console.error("Password field is missing in retrieved user document");
            return res.status(500).send({
                success: false,
                message: "User password is not set",
            });
        }
        const isMatch=await bcrypt.compare(password, user.password);
    //    if(password ==user.password){
    //     console.log("password is  working fine....")
    //        return res.status(200).send({
    //         sucess:false,
    //         message:"password is  working fine....",
    //        })
    //    }
    //    else{
    //     console.log("password is not matching..........");
    //    }
    //     if(!isMatch){
    //         return res.status(401).send({
    //             success:false,
    //             message:"Invalid credentials...",
    //         })
    //     }
        const token=await jwt.sign({id:user._id},JWT_KEY,{expiresIn:'7d'})
        return  res.status(200).send({
            success:true,
            message:"login successfully........",
            token,
            
        })
    
       }
       catch(err){
        console.log("error caught..",err);
        return  res.status(500).send("err is found..........")
       }
    
}

module.exports={User_register,User_login}