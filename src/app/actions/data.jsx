"use server"

import db from "../db/db";


import User from "../schema/schema";

export const datastore=async(fromdata)=>{
    try{
        // const{firstname,email,phoneno,message}=req.body;
       await db();

        // const res=User.create({
        //     firstname:firstname,
        //     email:email,
        //     phoneno:phoneno,
        //     message:message,
        // });
      const res=await User.create(fromdata);

     

    }catch(error){
     
      console.log(error);
    }
}