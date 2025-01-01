// src/app/Newsletter/page.tsx
"use client"

import Navbar from '@/app/componenents/Navbar';
import Footer from '@/app/componenents/footer';
import OurPromise from '@/app/componenents/OurPromise';
import Signup from '@/app/componenents/Signup';
import styles from './Newsletter.module.css';
import React, { useState } from 'react';

//export default function Newsletter() {
  const newsletters = [
    {
      title: "Tech Trends of the Year",
      content: `Explore the latest trends in electronics, from foldable devices to AI-powered gadgets. 
      Stay ahead with cutting-edge technology that reshapes our lives. 
      Discover how innovation is driving progress in every sector.
      Join the tech revolution today with Star Electronics.`,
    },
    {
      title: "Smart Home Essentials",
      content: `Transform your living space with our smart home devices. 
      From voice-controlled assistants to intelligent lighting systems, 
      make your home smarter and more efficient. 
      Explore our top picks and elevate your living experience.`,
    },
    {
      title: "Exclusive Holiday Deals",
      content: `Celebrate this season with unbeatable discounts on your favorite gadgets. 
      Grab the best offers on TVs, laptops, and accessories. 
      Don’t miss out on the joy of giving and upgrading your tech.`,
    },
    {
      title: "Why Choose Star Electronics?",
      content: `We’re committed to quality and innovation. 
      Our curated selection of products ensures you find the best in tech. 
      Experience exceptional customer care and a seamless shopping experience.`,
    },
    {
      title: "Upcoming Product Launches",
      content: `Be the first to know about the latest releases from top brands. 
      From next-gen smartphones to high-performance appliances, 
      we bring you the future of technology.`,
    },
    {
      title: "Customer Success Stories",
      content: `Read how our customers transformed their homes with our products. 
      From upgrading workstations to creating cinematic experiences, 
      be inspired by their journeys.`,
    },
    {
      title: "Sustainable Tech Practices",
      content: `Learn how Star Electronics is contributing to a sustainable future. 
      From energy-efficient appliances to eco-friendly packaging, 
      join us in making a difference.`,
    },
    {
      title: "Behind the Scenes",
      content: `Get an insider’s look at how we operate. 
      From sourcing the best products to delivering exceptional service, 
      discover what makes Star Electronics unique.`,
    },
    {
      title: "Gift Guides for Every Occasion",
      content: `Find the perfect gift for your loved ones with our curated guides. 
      Whether it’s for birthdays, holidays, or anniversaries, 
      make every celebration special.`,
    },
    {
      title: "Tech Tutorials and Guides",
      content: `Master your new gadgets with our easy-to-follow tutorials. 
      From setting up smart devices to optimizing your laptop, 
      unlock the full potential of your tech.`,
    },
    {
      title: "Deals of the Month",
      content: `Discover our handpicked deals for this month. 
      From bestselling laptops to popular appliances, 
      save big on the products you love.`,
    },
    {
      title: "Connect with Star Electronics",
      content: `Join our community and stay updated on the latest news and promotions.
      Follow us on social media and subscribe to our newsletter for exclusive perks.`,
    },
  ];


  export default function Newsletter() {
    const [expanded, setExpanded] = useState<number | null>(null);
  
    const toggleReadMore = (index: number) => {
      setExpanded((prev) => (prev === index ? null : index));
    };



  return (
    <div>
      <Navbar />
    
    <div className={styles.newsletterPage}>
      <header className={styles.header}>
        <h1 className='hover:scale-y-110  lg:hover:scale-125 hover:text-red-500'>Welcome to Star Electronics Newsletters</h1>
        <p className='hover:scale-110  lg:hover:scale-125 hover:text-blue-600'>Stay informed about the latest updates, promotions, and tech trends.</p>
      </header>

      <section className={styles.cardsContainer}>
      {newsletters.map((newsletter, index) => (
        <div key={index} className={styles.card}>
          <h2 className={styles.title}>{newsletter.title}</h2>
          <p className={styles.content}>
            {expanded === index
              ? newsletter.content
              : `${newsletter.content.substring(0, 200)}... `}
            <span
              className={styles.readMore}
              onClick={() => toggleReadMore(index)}
            >
              {expanded === index ? 'Show Less' : 'Read More'}
            </span>
          </p>
        </div>
      ))}
    </section>

      <footer className={styles.footer}>
        <h2 className='hover:text-red-500'>Stay Connected with Star Electronics</h2>
        <p className='hover:text-blue-500'>Sign up for more updates and exclusive content. We value our customers and are always here for you!</p>
      </footer>
    </div>
      <Signup />
      <OurPromise />
      <Footer />
    </div>
  );
}
