import Link from 'next/link';

const Hero5 = () => {
  return (
    <section className="bg-blue-200 p-8 md:p-16">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl text-blue-700 font-bold mb-4 hover:scale-125 hover:text-red-500">
          Join Our Newsletter
        </h2>
        
        {/* Subtext */}
        <p className="text-[14px] sm:text-base md:text-lg text-black font-bold hover:scale-125">
          Stay updated on the latest offers and news.
        </p>
      </div>

      {/* Button */}
      <Link href="/Newsletter">
        <div className="flex justify-center items-center mt-4">
          <button className="bg-blue-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:scale-125">
            Read Newsletter
          </button>
        </div>
      </Link>
    </section>
  );
};

export default Hero5;
