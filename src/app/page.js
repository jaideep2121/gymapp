'use client'

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import gym from "../../public/gym.jpg";
import before from "../../public/before.jpg";
import after from "../../public/after.jpg"

export default function Home() {
  const transformations = [
    {
      id: 1,
      before: before,
      after: after,
      title: 'Lost 30kg in 6 months',
    },
    {
      id: 2,
      before: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5',
      after: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b',
      title: 'Sarah - Gained muscle mass',
    },
    {
      id: 3,
      before: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
      after: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155',
      title: 'Mike - Complete transformation',
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % transformations.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + transformations.length) % transformations.length);
  };
  return (
   <div className="min-h-screen bg-white">
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
            alt="Hero background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Transform Your Life</h1>
          <p className="text-xl md:text-2xl mb-8">Expert Personal Training & Nutrition Guidance</p>
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Start Your Journey
          </Link>
        </div>
      </section>



      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Transformations</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-[600px] overflow-hidden rounded-xl">
              <div className="flex h-full">
                <div className="flex-1 relative">
                  <Image
                    src={transformations[currentSlide].before}
                    alt="Before"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full">
                    Before
                  </div>
                </div>
                <div className="flex-1 relative">
                  <Image
                    src={transformations[currentSlide].after}
                    alt="After"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full">
                    After
                  </div>
                </div>
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <p className="text-center mt-4 text-xl font-semibold">
              {transformations[currentSlide].title}
            </p>
          </div>
        </div>
      </section>








      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] ">
              <Image
                src={gym}

                alt="Trainer"
                fill
                className="object-none rounded-xl width-[10px]"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg mb-6">
                With over 15 years of experience in personal training and nutrition coaching,
                I've helped hundreds of clients achieve their fitness goals. My approach combines
                science-based training methods with personalized nutrition plans to deliver
                sustainable results.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-secondary p-6 rounded-lg text-center">
                  <h3 className="text-3xl font-bold mb-2">500+</h3>
                  <p>Clients Trained</p>
                </div>
                <div className="bg-secondary p-6 rounded-lg text-center">
                  <h3 className="text-3xl font-bold mb-2">15+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


   </div>
  );
}


  // src="https://images.unsplash.com/photo-1533681904393-9ab6eee7e408"

  // before: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
  // after: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155',