const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true,
     unique: true 
    },
    email:{
type:String,
required:true,
unique:true,
    },

  password: { 
    type: String, 
    required: true 
},
  role: { 
    type: String, 
    default: 'user'
 } // 'admin' or 'user'
});
UserSchema.pre("save",async function(next){
  if(this.isModified('password')){
      try{
      this.Password= await bcrypt.hash(this.password,10);    
  }
  catch(e){
       console.log("error hashing password",e);
  }
}
  next();
})


module.exports = mongoose.model('User', UserSchema);
