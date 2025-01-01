'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/app/componenents/Navbar';
import Footer from '@/app/componenents/footer';
import OurPromise from '@/app/componenents/OurPromise';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string; 
}

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data1/products.json'); // Corrected path
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError('Failed to load data.');
        console.error('Error fetching data:', err);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, []);
  
  

  if (error) {
    return <div>Failed to load: {error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
  <h1 className='text-5xl text-blue-500 font-bold text-center mb-4 mt-4 underline hover:text-white'>All Products</h1>
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((product: Product) => (
      <li key={product.id} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
        <Image 
          src={product.image} 
          alt={product.name} 
          width={400} 
          height={400} 
          className="object-cover rounded-md"
        />
        <div className="mt-4 text-center">
          <h3 className="text-xl text-black font-bold">{product.name}</h3>
          <p className="text-sm text-gray-500 font-bold">{product.description}</p>
        </div>
      </li>
    ))}
  </ul>
  <OurPromise />
  <Footer />
</div>
  );
};

export default AllProducts;