import Link from 'next/link';

const Hero1 = () => {
  return (
    <section className="bg-blue-200 p-4 md:p-16">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl text-blue-700 font-bold mb-4 hover:scale-110 lg:hover:scale-125 hover:text-red-500">
          Welcome to Our Store
        </h1>
        
        {/* Subtext */}
        <p className="text-[13px] sm:text-base md:text-lg font-bold text-blue-700 mb-6 hover:scale-125">
          Discover amazing products and shop with ease.
        </p>

        {/* Button */}
        <Link href="/AllProducts">
          <button className="bg-blue-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:scale-125">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero1;
