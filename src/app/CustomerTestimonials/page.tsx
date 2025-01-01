// src/app/CustomerTestimonials/page.tsx
"use client"

import Navbar from '@/app/componenents/Navbar';
import Footer from '@/app/componenents/footer';
import OurPromise from '@/app/componenents/OurPromise';
import Image from 'next/image';
import React, { useState } from 'react';

interface Testimonial {
  name: string;
  image: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    image: '/fac1.png',
    review:
      'Star Electronics has the best customer service I have ever experienced. The products are high-quality, and the staff is always ready to help with any queries. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    image: '/fac2.png',
    review:
      'I am amazed by the variety of products available at Star Electronics. From laptops to home appliances, everything I need is right there. Their promotions are always exciting!',
    rating: 4,
  },
  {
    name: 'Michael Brown',
    image: '/fac3.png',
    review:
      'Star Electronics truly stands out with their customer care. I had an issue with my order, and they resolved it quickly without any hassle. Love this store!',
    rating: 5,
  },
  {
    name: 'Emily Wilson',
    image: '/fac4.png',
    review:
      'The range of gadgets available is incredible. I bought a new phone and laptop at amazing prices. I will definitely shop here again!',
    rating: 5,
  },
  {
    name: 'Chris Johnson',
    image: '/fac5.png',
    review:
      'I have been a regular customer of Star Electronics for years. They never fail to impress me with their excellent service and quality products.',
    rating: 5,
  },
  {
    name: 'Sophia Davis',
    image: '/fac6.png',
    review:
      'I loved their accessories collection! The headphones I purchased work perfectly, and the delivery was super quick.',
    rating: 4,
  },
  {
    name: 'Ethan Martinez',
    image: '/fac7.png',
    review:
      'Their seasonal promotions are unbeatable. I got a 50-inch smart TV at a discount, and it’s fantastic!',
    rating: 5,
  },
  {
    name: 'Olivia Taylor',
    image: '/fac8.png',
    review:
      'The home appliances from Star Electronics have made my life so much easier. Thank you for the quick service and quality products!',
    rating: 5,
  },
  {
    name: 'Daniel Harris',
    image: '/fac9.png',
    review:
      'The gadgets section is a paradise for tech enthusiasts. The staff was incredibly helpful in guiding me to the right product.',
    rating: 4,
  },
  {
    name: 'Sophia Thompson',
    image: '/fac10.png',
    review:
      'My family loves shopping at Star Electronics. The environment is welcoming, and they always have what we’re looking for.',
    rating: 5,
  },
  {
    name: 'James Anderson',
    image: '/fac11.png',
    review:
      'I appreciate the detailed product descriptions on their website. Shopping online was a breeze, and the delivery was prompt!',
    rating: 4,
  },
  {
    name: 'Mia Robinson',
    image: '/fac12.png',
    review:
      'Great selection of laptops and accessories. The pricing is fair, and the quality is outstanding. Highly recommend Star Electronics!',
    rating: 5,
  },
];


const CustomerTestimonials = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleReadMore = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div>
      <Navbar />
    
    <div className="bg-blue-200 min-h-screen py-10 px-5">
      
      <h1 className="text-4xl  lg:text-5xl text-blue-700 font-bold text-center mb-10 hover:scale-y-150 lg:hover:scale-125 hover:text-red-500">
        Customer Testimonials
      </h1>
      <p className="text-center text-black font-bold text-lg mb-10 hover:scale-125">
        Hear what our satisfied customers have to say.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-5 transition-transform transform hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={testimonial.image}
                width={100}
                height={100}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg text-blue-700 font-semibold hover:scale-125">{testimonial.name}</h3>
                <div className="flex items-center text-yellow-500 hover:scale-y-150">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                  {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-gray-300 ">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700">
              {expanded === index
                ? testimonial.review
                : `${testimonial.review.substring(0, 120)}...`}
              <span
                onClick={() => toggleReadMore(index)}
                className="text-blue-500 cursor-pointer ml-2"
              >
                {expanded === index ? 'Read Less' : 'Read More'}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
    <OurPromise />
    <Footer />
    </div>
  );
};

export default CustomerTestimonials;
