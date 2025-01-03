'use client'

import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send, MessageCircle, Instagram, Loader2 } from 'lucide-react';


import Link from 'next/link';
import { Toast } from '@radix-ui/react-toast';
import toast from 'react-hot-toast';
import { datastore } from '../actions/data';




const page = () => {
    const[fromdata,newformdata]=useState({firstname:'',email:'',phoneno:'',message:''});
    const[loading,setloading]=useState(false);

   async function submithandller(e){
        e.preventDefault(); 
        try{
          setloading(true);
            const res=await datastore(fromdata);
            console.log(res);


              setloading(false);
            toast.success("Succesfully submitted")
            newformdata({firstname:'',email:'',phoneno:'',message:''});
            console.log(fromdata);

        }catch{
            toast.error("data is not submmited");

        }
       
    }

    function changehandler(e){
        newformdata({...fromdata,[e.target.id]:e.target.value});
    }
  return (
    <div className='min-h-screen bg-white py-20'>
    <div className='container mx-auto px-4 '>
    <h1 className='text-4xl font-bold text-center mb-12'>Get in Touch</h1>
    <div className='grid md:grid-cols-2 gap-12 max-w-6xl mx-auto'>
    <div className="bg-card p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="text-primary" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p>+91 9650017189</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p>trainer@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="text-primary" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p>Lifeline Gym,Lajpat Nagar</p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5">
              <Link
                href="https://wa.me/+919650017189"
                target="_blank"
                className="inline-flex w-[210px] h-[58px] items-center space-x-2 bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-opacity"
              >
                <MessageCircle />
                <span>Chat on WhatsApp</span>
              </Link>

              
              <Link
                href="https://www.instagram.com/sachinkfitness/?hl=en"
                target="_blank"
                className="inline-flex w-[210px] h-[58px] items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-opacity"
              >
                    <Instagram className="w-5 h-5 mr-2" />
                <span>Instagram</span>
              </Link>
              
            </div>
          </div>

          <div className='bg-card p-8 rounded-xl'>
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <form className='space-y-6' onSubmit={submithandller}>
          <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-white "
               value={fromdata.firstname}
             onChange={changehandler}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-white"
                value={fromdata.email}
                onChange={changehandler}
                  required
                />
              </div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Phone No
                </label>
              <div className='flex items-center space-x-4'>
<svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 left-0 hover:cursor-pointer'  viewBox="0 0 512 512"><path fill="#999" d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z"/><path fill="#fff"  d="M255.99 19.48c65.31 0 124.46 26.48 167.25 69.27 42.79 42.79 69.28 101.93 69.28 167.24s-26.49 124.46-69.28 167.25c-42.79 42.79-101.94 69.28-167.25 69.28-65.23 0-124.38-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24 42.79-42.79 101.93-69.27 167.24-69.27z"/><path fill="#F93"  d="M255.99 39.59c84.4 0 157.5 48.29 193.17 118.74H62.84C98.52 87.88 171.62 39.59 255.99 39.59z"/><path fill="#128807"  d="M60.38 348.64h391.24c-34.71 73.18-109.24 123.77-195.63 123.77-86.37 0-160.89-50.59-195.61-123.77z"/><path fill="#008" d="M255.99 179.9c42.05 0 76.13 34.08 76.13 76.11 0 42.04-34.08 76.12-76.13 76.12-42.03 0-76.11-34.08-76.11-76.12 0-42.03 34.08-76.11 76.11-76.11zm13.31 75.43c-.04-.71-.13-1.41-.27-2.09l13.3-1.92 38.01-12.54-39.2 8.14-12.46 4.99c-.22-.68-.49-1.33-.81-1.95l12.34-5.29 33.46-21.96c-.9-1.56-1.85-3.08-2.87-4.55l.07-.05c-1.46 1.13-3.55.84-4.68-.61a3.345 3.345 0 0 1 .56-4.61 62.382 62.382 0 0 0-3.66-3.96v-.02l-29.87 26.65-8.29 10.57c-.53-.48-1.1-.91-1.68-1.3l8.04-10.75 18.01-35.75-21.95 33.47-5.29 12.35c-.62-.32-1.28-.59-1.97-.81l5.01-12.46 8.14-39.2-12.56 38.01-1.9 13.3c-.68-.14-1.38-.23-2.09-.28l1.6-13.34-2.3-39.95c-1.8 0-3.59.09-5.37.22l-.01-.1c.24 1.83-1.05 3.5-2.87 3.74a3.325 3.325 0 0 1-3.72-2.79c-3.58.65-7.05 1.59-10.4 2.79.65 1.68-.16 3.6-1.84 4.28-1.66.68-3.58-.08-4.31-1.73-1.63.78-3.23 1.63-4.78 2.52l21.96 33.45 5.29 12.35c.62-.32 1.27-.59 1.95-.81l-4.99-12.46-8.14-39.2 12.55 38.01 1.91 13.3c.68-.14 1.38-.23 2.09-.28l-1.6-13.34 2.28-39.95c1.81 0 3.61.08 5.39.22l.01-.1a3.342 3.342 0 0 0 2.87 3.74c1.79.24 3.45-1.01 3.72-2.79 3.58.65 7.05 1.59 10.41 2.79-.65 1.68.16 3.6 1.82 4.28 1.68.68 3.59-.08 4.32-1.73 3.28 1.55 6.38 3.34 9.33 5.39l.05-.07c-1.13 1.46-.84 3.55.61 4.67a3.36 3.36 0 0 0 4.68-.61l-.07.08a64.22 64.22 0 0 1 3.94 3.62h.02l-26.64 29.89-10.56 8.29c.48.53.9 1.08 1.28 1.68l10.76-8.06 35.74-18c.89 1.56 1.74 3.15 2.52 4.78a3.298 3.298 0 0 0-1.73 4.31c.68 1.67 2.58 2.48 4.28 1.83 1.19 3.34 2.13 6.83 2.78 10.41a3.325 3.325 0 0 0-2.78 3.72c.23 1.82 1.91 3.1 3.73 2.86l-.09.02c.13 1.77.22 3.56.22 5.37l-39.95-2.28-13.35 1.6zm-46.61-56.98 18.01 35.73 8.06 10.75c-.6.39-1.16.82-1.68 1.3l-8.3-10.57-29.87-26.63c1.27-1.27 2.6-2.49 3.96-3.66 1.13 1.39 3.18 1.65 4.61.55a3.33 3.33 0 0 0 .62-4.67l.05.07c1.48-1.02 2.99-1.97 4.54-2.87zm-13.78 10.58 26.64 29.87 10.56 8.29c-.47.53-.9 1.08-1.3 1.68l-10.75-8.06-35.74-18c-.89 1.55-1.73 3.15-2.5 4.76a3.35 3.35 0 0 1 1.72 4.33c-.68 1.67-2.6 2.48-4.27 1.83-.61 1.7-1.13 3.41-1.6 5.15l38 12.54 13.31 1.92c-.15.68-.24 1.38-.29 2.09l-13.33-1.6-39.96 2.28c0 1.81.1 3.61.22 5.38l-.09.02c1.82-.25 3.5 1.03 3.74 2.87.23 1.79-1.02 3.45-2.79 3.72.65 3.58 1.58 7.03 2.79 10.39 1.67-.64 3.59.17 4.27 1.83.68 1.67-.08 3.6-1.72 4.33.77 1.63 1.61 3.21 2.5 4.76l35.74-18 10.75-8.05c.4.59.83 1.16 1.3 1.68l-10.56 8.3-26.65 29.87h.01c1.27 1.26 2.6 2.48 3.96 3.66 1.13-1.4 3.18-1.67 4.61-.56 1.46 1.12 1.74 3.22.62 4.67l.05-.06c1.47 1.03 2.99 1.98 4.54 2.88l21.96-33.48 5.29-12.35c.62.33 1.27.6 1.95.82l-4.99 12.47-8.14 39.19c1.73.46 3.49.86 5.26 1.19a3.325 3.325 0 0 1 3.72-2.8c1.79.25 3.06 1.87 2.87 3.65 1.77.15 3.56.23 5.38.23l2.3-39.97-1.6-13.34c.71-.03 1.41-.13 2.09-.27l1.9 13.3 12.56 38.01-8.14-39.19-5.01-12.47c.69-.22 1.35-.5 1.97-.82l5.29 12.35 21.95 33.48c1.55-.9 3.09-1.87 4.56-2.88l.05.06c-1.13-1.45-.84-3.55.61-4.67 1.43-1.11 3.49-.84 4.6.56 1.37-1.16 2.7-2.4 3.97-3.66l-26.64-29.87-10.56-8.3c.48-.52.9-1.09 1.28-1.68l10.76 8.05 35.76 18-33.48-21.96-12.36-5.28c.34-.63.61-1.28.83-1.96l12.46 5.01 39.18 8.13c.46-1.72.87-3.46 1.2-5.25a3.325 3.325 0 0 1-2.78-3.72 3.318 3.318 0 0 1 3.73-2.87l-.09-.02c.14-1.77.22-3.56.22-5.38l-39.95 2.28-13.35-1.6c-.04.73-.13 1.43-.27 2.11l13.3 1.9 37.99 12.55c-.47 1.75-.98 3.46-1.58 5.14-1.7-.64-3.6.17-4.28 1.83-.7 1.7.08 3.61 1.73 4.33a64.329 64.329 0 0 1-5.39 9.32l.07.05a3.335 3.335 0 0 0-4.68.62c-1.1 1.42-.83 3.48.56 4.59a72.466 72.466 0 0 1-3.66 3.98l-29.87-26.64-8.29-10.56c-.53.46-1.1.9-1.68 1.28l8.04 10.75 18.01 35.76c-1.55.89-3.14 1.73-4.77 2.5-.71-1.64-2.63-2.42-4.32-1.72-1.7.69-2.5 2.64-1.79 4.34l-.03-.07a64.87 64.87 0 0 1-10.41 2.79 3.325 3.325 0 0 0-3.72-2.8c-1.79.25-3.06 1.87-2.87 3.65-1.77.13-3.59.23-5.4.23l-2.28-39.97 1.6-13.34c-.71-.03-1.41-.13-2.09-.27l-1.91 13.3-12.55 38.01c-1.75-.46-3.48-1-5.14-1.6a3.3 3.3 0 0 0-1.84-4.27c-1.68-.7-3.6.08-4.32 1.72a65.32 65.32 0 0 1-4.77-2.5l18.01-35.76 8.06-10.75c-.6-.38-1.16-.82-1.68-1.28l-8.3 10.56-29.88 26.64v-.02c-1.27-1.27-2.49-2.6-3.65-3.96 1.4-1.11 1.65-3.17.56-4.59a3.324 3.324 0 0 0-4.67-.62l.06-.05c-1.01-1.47-1.98-3-2.88-4.56l33.46-21.96 12.35-5.28c-.31-.63-.58-1.28-.81-1.96l-12.46 5.01-39.19 8.13 38-12.55 13.31-1.9c-.15-.68-.24-1.38-.29-2.11l-13.33 1.6-39.96-2.28c0-1.82.08-3.6.22-5.37l-.09-.02c1.82.24 3.5-1.04 3.74-2.86.23-1.79-1.02-3.45-2.79-3.72.33-1.78.73-3.53 1.19-5.26l39.19 8.14 12.46 4.99c.23-.68.5-1.33.81-1.95l-12.35-5.29-33.46-21.96c.9-1.56 1.85-3.08 2.88-4.55l-.06-.05c1.45 1.13 3.54.84 4.67-.61 1.09-1.43.84-3.49-.56-4.61 1.18-1.36 2.4-2.69 3.66-3.96z"/></svg>
<div className='fontbold text-md'>+91</div>
<input type='tel' id="phoneno" required  className="w-full px-4 py-2 rounded-lg border border-input bg-white"
value={fromdata.phoneno}
onChange={changehandler}
></input>

              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-white"
                value={fromdata.message}
                onChange={changehandler}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center space-x-2"
              >
               {
                loading?<Loader2></Loader2>: <Send size={20} />
               }
                <span>{
                  loading?'Loading...':'Send Message'
                }</span>
              </button>

          </form>

          </div>

    </div>

    </div>

    </div>
  )
}

export default page