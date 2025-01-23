'use client'

import { ChevronDown, Dumbbell } from 'lucide-react';
import React, { useState } from 'react'





const page = () => {

    const exercises = {
        beginner: [
          {
            name: 'Cross-over',
            description: 'Basic upper body exercise targeting chest, shoulders, and triceps.',
            sets: '3 sets of 10 reps',
            video: "https://youtube.com/embed/8xZquzWT4w8?si=GN8uO6ZxOMLHGJTK",
          },
          {
            name: 'Bodyweight Squats',
            description: 'Fundamental lower body exercise for legs and core strength.',
            sets: '3 sets of 15 reps',
            video: 'https://www.youtube.com/embed/n_xLyzPEX7A',
          },
          // Add more beginner exercises
        ],
        intermediate: [
          {
            name: 'Dumbbell Bench Press',
            description: 'Chest exercise with dumbbells for increased strength.',
            sets: '4 sets of 12 reps',
            video: 'https://www.youtube.com/embed/z6A4W5Dib28',
          },
          {
            name: 'Barbell Squats',
            description: 'Advanced lower body exercise with barbell.',
            sets: '4 sets of 10 reps',
            video: 'https://www.youtube.com/embed/0zECQ7qyCRM',
          },
          // Add more intermediate exercises
        ],
        advanced: [
          {
            name: 'Clean and Jerk',
            description: 'Olympic weightlifting movement for full body power.',
            sets: '5 sets of 3-5 reps',
            video: 'https://www.youtube.com/embed/VwNkc1QYUGA',
          },
          {
            name: 'Muscle Ups',
            description: 'Advanced calisthenics movement combining pull-up and dip.',
            sets: '4 sets of 3-5 reps',
            video: 'https://www.youtube.com/embed/ab6QVmYzns0',
          },
          // Add more advanced exercises
        ],
      };
      const[selected,setselected]=useState('beginner');
      const [openercise,setopenercide]=useState(null);
      const level=['beginner','intermediate','advanced'];
  return (
    <div className="min-h-screen bg-background py-20">
    <div className="container mx-auto px-4">
    <h1 className="text-4xl font-bold text-center mb-12">Exercise Library</h1>

    <div className='flex justify-center space-x-4 mb-12'>
    {
        level.map((item,index)=>{
            return(
                <button key={index} onClick={()=>setselected(item)
                
                } className={` px-6 py-3 rounded-lg font-medium capitalize${selected===item?' text-white bg-black':'bg-white '}`}>{item}</button>
            )
        })



    }



    </div>

    <div className="max-w-3xl mx-auto space-y-4">
    {exercises[selected].map((exercise,index)=>{
        return(
            <div key={index} className="bg-card rounded-lg overflow-hidden"> 
               <button onClick={()=>setopenercide(openercise===exercise.name?null:exercise.name)}
               className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50"
               >

                <div className='flex items-center space-x-4'>
                <Dumbbell></Dumbbell>
                <span className='font-medium'>{exercise.name}</span>
                
                </div>
                <ChevronDown
                  className={`transform transition-transform ${
                    openercise === exercise.name ? 'rotate-180' : ''
                  }`}
                />
                
               </button>
               {openercise === exercise.name && (
                <div className="px-6 py-4 border-t border-border">
                  <p className="text-muted-foreground mb-4">{exercise.description}</p>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Recommended Sets & Reps</h3>
                    <p>{exercise.sets}</p>
                  </div>
                  <iframe width="400" height="250" src={exercise.video} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                
              )}


            </div>
        )
    })}
    </div>

    </div>

    </div>
  )
}

export default page