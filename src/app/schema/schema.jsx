import mongoose, { Mongoose } from "mongoose";


const Userschema=new mongoose.Schema({
    firstname:{
        type:String,
         required:true,
       
    },
    email:{
        type:String,
         required:true,
       
    },
    phoneno:{
        type:Number,
         required:true,
       
    },
    message:{
        type:String,
         required:true,
       
    },

})
const User=mongoose.model('People',Userschema);
export default User;